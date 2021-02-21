import React from 'react'

export default function JumboSecondaryButton(props) {
    return (
        <button className='JumboSecondaryButton'>

            { window.formatNumber(props.value)}
            <div style={{ fontSize: '8px', color: '#c6c6c6' }}>
                <img src={`${props.social}-1.svg`} alt={props.name} />
                {props.name.toUpperCase()}
            </div>
        </button>

    )
}
