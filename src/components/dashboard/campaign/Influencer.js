import React from 'react'
import SecondaryButton from '../../ui/buttons/SecondaryButton'

export default function Influencer(props) {
    return (
        <div className='Influencer'>
            <img className='Image' src={props.image} alt={props.name} width='44' height='44'/>


            <div className='MainPart'>
                <div>{props.name}</div>
                <span> Engagement rate {props.engagementRate} % </span>
            </div>

            <SecondaryButton text="Add to favorites"/>

        </div>
    )
}
