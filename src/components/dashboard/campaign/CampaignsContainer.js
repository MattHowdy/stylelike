import React from 'react'

export default function CampaignsContainer(props) {
    return (
        <div className="CampaignContainer">
            <div className="Title">
                Ongoing Campaigns
            </div>
            { props.children}
        </div>
    )
}
