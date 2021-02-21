import React from 'react'
import TaskFooter from './TaskFooter'
import TaskHeader from './TaskHeader'

export default function NewContent(props) {
    return (
        <div className="Task">

            <TaskHeader name={props.name} happening={props.happening} />

            <div className="TaskBody">
                <img src={props.image} height='105' width='95' style={{ objectFit: 'cover' }} alt={props.name} />

                <div  className="messageContainer">
                    <div>
                        <img src='/insta-1.svg' alt='insta-icon' width='10px' />
                        <span className='Date'>{props.date}</span>
                    </div>
                    <div className="message" >
                        {props.message}
                        <span>
                            {props.hashtags.map(ht => '#' + ht).join(' ')}
                        </span>
                    </div>
                </div>
            </div>

            <TaskFooter />
        </div>
    )
}
