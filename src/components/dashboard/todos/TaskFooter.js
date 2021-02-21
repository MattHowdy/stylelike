import React from 'react'
import SecondaryButton from '../../ui/buttons/SecondaryButton'

export default function TaskFooter() {
    return (
        <div className='TaskFooter' >
            <SecondaryButton text="accept" />
            <SecondaryButton text="decline"/>
        </div>
    )
}
