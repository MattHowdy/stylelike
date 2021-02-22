import React, { useEffect, useState } from 'react'
import Campaign from '../components/dashboard/campaign/Campaign'
import CampaignsContainer from '../components/dashboard/campaign/CampaignsContainer'
import Influencer from '../components/dashboard/campaign/Influencer'
import MyTodosContainer from '../components/dashboard/todos/MyTodosContainer'
import StatisticsContainer from '../components/dashboard/statistic/StatisticsContainer'
import NewContent from '../components/dashboard/todos/NewContent'
import NewApplication from '../components/dashboard/todos/NewApplication'
import TopInfluencersContainer from '../components/dashboard/influencers/TopInfluencersContainer'
import PrimaryButton from '../components/ui/buttons/PrimaryButton'
import PageTitle from '../components/ui/PageTitle'
import { campaings as campignJSON } from "../helpers/campaings.json"
import { tasks as taskJSON } from "../helpers/tasks.json"
import { influencers as influencerJSON } from "../helpers/influencers.json"
import { NEW_CONTENT, TWITTER_API } from '../helpers/constants'
import { get } from '../helpers/request'
import Table from '../components/table/Table'

export default function DashboardPage() {

    const [campaings] = useState(campignJSON)
    const [tasks] = useState(taskJSON)
    const [influencers] = useState(influencerJSON)
    const [twitterData, setTwitterData] = useState([])

    useEffect(() => {
        const getTwitterData = () => {
            get(TWITTER_API).then(res => {
                const uxHashtags = res.statuses.filter(status => status.entities.hashtags.some(tag => tag.text.toLowerCase() === 'ux'))
                setTwitterData(uxHashtags)
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

            <div className='DashBoardContainer'>
                <div className='MainContainer' >
                    <CampaignsContainer>
                        {renderCampaigns()}
                    </CampaignsContainer>


                    <div className='Secondary' id="container">
                        <StatisticsContainer campaigns={campaings.map(campaing => campaing.name)} />

                        <TopInfluencersContainer>
                            {renderInfluencers()}
                        </TopInfluencersContainer>
                    </div>
                </div>


                <div className='SideContainer' >
                    <MyTodosContainer total={tasks.length}>
                        {renderTasks()}
                    </MyTodosContainer>
                </div>

            </div>
            <div>
                <Table data={twitterData} />
            </div>

        </div>
    )
}
