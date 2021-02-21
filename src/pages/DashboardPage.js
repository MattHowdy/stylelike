import React from 'react'
import Campaign from '../components/dashboard/campaign/Campaign'
import CampaignsContainer from '../components/dashboard/campaign/CampaignsContainer'
import Influencer from '../components/dashboard/campaign/Influencer'
import MyTodosContainer from '../components/dashboard/MyTodosContainer'
import StatisticsContainer from '../components/dashboard/StatisticsContainer'
import Task from '../components/dashboard/Task'
import TopInfluencersContainer from '../components/dashboard/TopInfluencersContainer'
import PrimaryButton from '../components/ui/buttons/PrimaryButton'
import PageTitle from '../components/ui/PageTitle'
import { campaings } from "../helpers/campaings.json"

export default function DashboardPage() {
    // get todos
    // get statistics

    const renderCampaigns = () => campaings.map(campaign => <Campaign key={campaign.id} { ...campaign }/>);
    

    return (
        <div>

            <div style={{ display: 'flex', paddingBottom: '24px' }}>
                <PageTitle text="My Dashboard" />
                <PrimaryButton name='create a new campaign' />
            </div>

            <div>
                <div className='MainContainer'>
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


                <div className='SideContainer'>

                    <MyTodosContainer>
                        <Task />
                    </MyTodosContainer>
                </div>
            </div>


        </div>
    )
}
