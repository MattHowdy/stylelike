import React from 'react'
import moment from 'moment'

export default function Status(props) {
    return (
        <div>
            <span className='StatusTag'>
                {props.status.toUpperCase()}
            </span>
            <span className='StatusDate'>
                Closes in { moment(props.closeDate).diff(moment(Date.now()), 'days') } days
            </span>
        </div>
    )
}
