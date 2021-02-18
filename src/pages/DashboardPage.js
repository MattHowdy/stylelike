import React from 'react'
import Campaign from '../components/dashboard/Campaign'
import CampaignsContainer from '../components/dashboard/CampaignsContainer'
import Influencer from '../components/dashboard/Influencer'
import MyTodosContainer from '../components/dashboard/MyTodosContainer'
import StatisticsContainer from '../components/dashboard/StatisticsContainer'
import Task from '../components/dashboard/Task'
import TopInfluencersContainer from '../components/dashboard/TopInfluencersContainer'
import PrimaryButton from '../components/ui/buttons/PrimaryButton'

export default function DashboardPage() {

    // get campaings
    // get todos
    // get statistics

    return (
        <div>

            My Dashboard

            <PrimaryButton name='newCampaignBtn' />


            <div>
                <div className='Main-Container'>
                    <CampaignsContainer>
                        <Campaign />
                    </CampaignsContainer>

                    <div>
                        <StatisticsContainer>

                        </StatisticsContainer>

                        <TopInfluencersContainer>
                            <Influencer />
                        </TopInfluencersContainer>
                    </div>
                </div>


                <div className='Side-Container'>

                    <MyTodosContainer>
                        <Task />
                    </MyTodosContainer>
                </div>
            </div>


        </div>
    )
}
