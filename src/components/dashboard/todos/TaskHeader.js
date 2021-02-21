import React from 'react'

export default function TaskHeader(props) {
    return (
        <div className='TaskHeader'>
            <span>{props.name}</span> {props.happening}
        </div>
    )
}
