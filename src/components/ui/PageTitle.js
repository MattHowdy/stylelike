import React from 'react'

export default function PageTitle(props) {
    return (
        <div className="PageTitle">
            { props.text.toUpperCase() }
        </div>
    )
}
