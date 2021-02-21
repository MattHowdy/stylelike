import React from 'react'
import TaskFooter from './TaskFooter'
import TaskHeader from './TaskHeader'

export default function NewApplication(props) {
    return (
        <div className="Task">
            
            <TaskHeader name={props.name} happenning={props.happenning}/>

            <div className="TaskBody">

            </div>


            <TaskFooter/>

        </div>
    )
}
