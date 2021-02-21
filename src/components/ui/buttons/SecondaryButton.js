import React from 'react'

export default function SecondaryButton(props) {
    return (
        <button className="SecondaryButton"> 
            {props.text.toUpperCase()}
        </button>
    )
}
