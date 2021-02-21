import React from 'react'

export default function TaskSocialTag(props) {
    return (
        <div className='TaskSocialTag'>
            <div className='value' >{window.formatNumber(props.value)}</div>
            <div className='followers'>
                { `${props.social.toUpperCase()} FOLLOWERS` }
            </div>
        </div>
    )
}
