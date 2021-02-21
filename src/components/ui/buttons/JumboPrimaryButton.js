import React from 'react'

export default function JumboPrimaryButton(props) {
    return (
        <button className='JumboPrimaryButton'>

            { window.formatNumber(props.value)}
            <div style={{ fontSize: '8px', color: 'white'}}>
                <img src={`${props.social}-2.svg`} alt={props.name} />
                {props.name.toUpperCase()}
            </div>
        </button>

    )
}
