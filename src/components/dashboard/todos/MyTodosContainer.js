import React from 'react'

export default function MyTodosContainer(props) {
    return (
        <div className="TodosContainer">
             <div className="Title">
                My to do's ({props.total})
            </div>
            { props.children}
        </div>
    )
}
