import React, { useEffect, useState } from 'react'
import Campaign from '../components/dashboard/campaign/Campaign'
import CampaignsContainer from '../components/dashboard/campaign/CampaignsContainer'
import Influencer from '../components/dashboard/campaign/Influencer'
import MyTodosContainer from '../components/dashboard/todos/MyTodosContainer'
import StatisticsContainer from '../components/dashboard/statistic/StatisticsContainer'
import NewContent from '../components/dashboard/todos/NewContent'
import NewApplication from '../components/dashboard/todos/NewApplication'
import TopInfluencersContainer from '../components/dashboard/TopInfluencersContainer'
import PrimaryButton from '../components/ui/buttons/PrimaryButton'
import PageTitle from '../components/ui/PageTitle'
import { campaings as campignJSON } from "../helpers/campaings.json"
import { tasks as taskJSON } from "../helpers/tasks.json"
import { influencers as influencerJSON } from "../helpers/influencers.json"
import { NEW_CONTENT, TWITTER_API } from '../helpers/constants'
import { get } from '../helpers/request'

export default function DashboardPage() {

    const [campaings, setCampaings] = useState(campignJSON)
    const [tasks, setTassks] = useState(taskJSON)
    const [influencers, setInfluencers] = useState(influencerJSON)
    const [twitterData, setTwitterData] = useState([])

    useEffect(() => {
        const getTwitterData = () => {
            get(TWITTER_API).then(res => {
                console.log(res.statuses)

                const uxHashtags = res.statuses.filter( status => status.entities.hashtags.filter( entity => entity.text === 'ux'))

                console.log('uxHashtags', uxHashtags);
                setTwitterData()
        })
    }
        getTwitterData()
    }, [])

const renderCampaigns = () => campaings.map(campaign => <Campaign key={campaign.id} {...campaign} />);
const renderTasks = () => tasks.map(task => {
    if (task.type === NEW_CONTENT) {
        return <NewContent key={task.id} {...task} />
    } else {
        return <NewApplication key={task.id} {...task} />
    }
})
const renderInfluencers = () => influencers.map(influencer => <Influencer key={influencer.id} {...influencer} />)

return (
    <div>
        <div style={{ display: 'flex', paddingBottom: '24px' }}>
            <PageTitle text="My Dashboard" />
            <PrimaryButton name='create a new campaign' />
        </div>

        <div style={{ display: 'flex' }}>
            <div className='MainContainer' style={{ width: '66%', paddingRight: '20px' }}>
                <CampaignsContainer>
                    {renderCampaigns()}
                </CampaignsContainer>


                <div style={{ display: 'flex', marginTop: '20px', marginBottom: '10px' }} id="container">
                    <StatisticsContainer campaigns={campaings.map(campaing => campaing.name)} />

                    <TopInfluencersContainer>
                        {renderInfluencers()}
                    </TopInfluencersContainer>
                </div>
            </div>


            <div className='SideContainer' style={{ width: '33%' }}>

                <MyTodosContainer total={tasks.length}>
                    {renderTasks()}
                </MyTodosContainer>
            </div>
        </div>


    </div>
)
}
