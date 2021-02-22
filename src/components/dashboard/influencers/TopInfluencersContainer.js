import React from 'react'
import ContainerTitle from '../../ui/ContainerTitle'

export default function TopInfluencersContainer(props) {
    return (
        <div className='TopInfluencersContainer'>
            <ContainerTitle text='Top influencers' />

            <div className='TopInfluencers'>
                {props.children}
            </div>
        </div>
    )
}
