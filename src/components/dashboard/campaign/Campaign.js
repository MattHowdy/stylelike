import React from 'react'
import InstaStat from './InstaStat'
import SnapStat from './SnapStat'
import Status from './Status'

export default function Campaign(props) {

    return (
        <div className="Campaign" >

            <div className="ImageContainer">
                <img className="Image" src={props.image} alt={props.name} height="114px" width="96px" />
            </div>

            <div className="MainInfo">

                <Status status={props.status} closeDate={props.closeDate} />

                <div className="Influencers">
                    {props.influencers} INFLUENCERS
                </div>
                <div className='Name'>
                    {props.name}
                </div>
                <div className='Name'>
                    {props.version}
                </div>
            </div>

            <div className="Statistics">

                {props.instagram
                    ? <InstaStat stats={props.instagram}/>
                    : null
                }
                {props.snapchat
                    ? <SnapStat stats={props.snapchat} />
                    : null
                }
            </div>

        </div>
    )
}
