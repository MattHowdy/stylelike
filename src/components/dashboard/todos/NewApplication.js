import React from 'react'
import TaskFooter from './TaskFooter'
import TaskHeader from './TaskHeader'
import TaskSocialTag from './TaskSocialTag'

export default function NewApplication(props) {

    return (
        <div className="Task">

            <TaskHeader name={props.name} happening={props.happening} />

            <div className="TaskBody">
                <img src={props.image} height='100' width='100' style={{ objectFit: 'cover', borderRadius: '100px' }} alt={props.name} />

                <div className="messageContainer">
                    <div>
                        {props.name}
                    </div>
                    <div className="message" style={{ display: 'flex', margin: '9px' }}>
                        <TaskSocialTag value={props.instagram} social='instagram' />
                        <TaskSocialTag value={props.snapchat} social='snapchat' />
                    </div>
                </div>
            </div>

            <TaskFooter />

        </div>
    )
}
