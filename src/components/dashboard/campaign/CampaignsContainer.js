import React from 'react'
import ContainerTitle from '../../ui/ContainerTitle'

export default function CampaignsContainer(props) {
    return (
        <div className="CampaignContainer">
            <ContainerTitle text='Ongoing Campaigns'/>
            { props.children}
        </div>
    )
}
