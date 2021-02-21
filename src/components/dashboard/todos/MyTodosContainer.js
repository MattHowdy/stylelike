import React from 'react'
import ContainerTitle from '../../ui/ContainerTitle'

export default function MyTodosContainer(props) {
    return (
        <div className="TodosContainer">
            <ContainerTitle text={`My to do's (${props.total})`}/>

            <div className="TodoTasks">
                {props.children}
            </div>
        </div>
    )
}
