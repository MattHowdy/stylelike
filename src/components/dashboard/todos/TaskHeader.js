import React from 'react'

export default function TaskHeader(props) {
    return (
        <div className='TaskHeader'>
            {props.name} {props.happening}
        </div>
    )
}
