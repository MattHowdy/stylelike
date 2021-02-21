import React, { useState } from 'react'
import Campaign from '../components/dashboard/campaign/Campaign'
import CampaignsContainer from '../components/dashboard/campaign/CampaignsContainer'
import Influencer from '../components/dashboard/campaign/Influencer'
import MyTodosContainer from '../components/dashboard/todos/MyTodosContainer'
import StatisticsContainer from '../components/dashboard/StatisticsContainer'
import NewContent from '../components/dashboard/todos/NewContent'
import NewApplication from '../components/dashboard/todos/NewApplication'
import TopInfluencersContainer from '../components/dashboard/TopInfluencersContainer'
import PrimaryButton from '../components/ui/buttons/PrimaryButton'
import PageTitle from '../components/ui/PageTitle'
import { campaings as campignJSON } from "../helpers/campaings.json"
import { tasks as taskJSON } from "../helpers/tasks.json"
import { NEW_CONTENT } from '../helpers/constants'

export default function DashboardPage() {

    const [campaings, setCampaings] = useState(campignJSON)
    const [tasks, setTassks] = useState(taskJSON)


    const renderCampaigns = () => campaings.map(campaign => <Campaign key={campaign.id} {...campaign} />);
    const renderTasks = () => tasks.map(task => {
        if(task.type === NEW_CONTENT ){
            return <NewContent key={task.id} {...task} />
        }else{
            return <NewApplication key={task.id} {...task} />
        }
    })

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

                    <div>
                        <StatisticsContainer>

                        </StatisticsContainer>

                        <TopInfluencersContainer>
                            <Influencer />
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
