import React from 'react'

export default function Campaign(props) {
    return (
        <div className="Campaign">

            <div className="Image">
                <img src={props.image} alt={props.name} height="200px" style={{ borderRadius: '3px 0 0 3px' }}/>
                {props.instagram ? props.instagram.link : null }
                {props.snapchat ? props.snapchat.link : null }
            </div>

            <div className="MainInfo">
                {props.status} {props.closeDate}
                {props.influencers}
                {props.name}
                {props.version}
            </div>

            <div className="Statistics">

                <div className="Insta">
                    {/* { props.instagram } */}
                </div>

                <div className="Snap">
                    {/* { props.snapchat} */}
                </div>

                {/* {props.reach} icon Reach
                {props.likes}
                {props.comments}
                {props.opens}
                {props.screens}
                {props.completion} */}
            </div>

        </div>
    )
}
