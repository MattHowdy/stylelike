import React from 'react'

export default function CampaignsContainer(props) {
    return (
        <div className="CampaignContainer">
            <div className="CampaignTitle">
                Ongoing Campaign
            </div>
            { props.children}
        </div>
    )
}
