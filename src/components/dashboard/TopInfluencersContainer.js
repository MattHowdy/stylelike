import React from 'react'

export default function TopInfluencersContainer(props) {
    return (
        <div className='TopInfluencersContainer'>

            <div className="Title">
                Top influencers
            </div>
            
            <div className='TopInfluencers'>
                {props.children}
            </div>
        </div>
    )
}
