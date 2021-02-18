import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="Header">

            <Link to='/' className='Link'>
                StyleLike
            </Link>

            <Link to='/campaings' className='Link'>
                Campaigns
                </Link>
            <Link to='/influencers' className='Link'>
                Influencers
                </Link>
            <Link to='/statistics' className='Link'>
                Statistics
            </Link>




            Notifications
            Image
            Profile
            Dropdown
        </div>
    )
}
