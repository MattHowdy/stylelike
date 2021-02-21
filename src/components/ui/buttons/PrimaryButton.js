import React from 'react'

export default function PrimaryButton(props) {
    return (
        <button className='PrimaryButton'>            
            { props.name.toUpperCase() }
        </button>
    )
}
