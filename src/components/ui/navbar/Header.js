import React from 'react'
import { Link } from 'react-router-dom'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const createMenuItems = () => {
    const menuName = ['campaigns', 'influencers', 'statistics']
    return menuName.map((menu, index) => {
        return (<Link to={menu} className='Link Header' key={menu + index}>
            {menu.toUpperCase()}
        </Link>)
    })
}

export default function Header() {
    return (
        <div className="HeaderContainer">


            <Link to='/' className='Link Header Logo'>
                StyleLike
            </Link>

            <div className='MenuItems'>
                {createMenuItems()}
            </div>

            <FontAwesomeIcon icon={faBars} className='Hamburger'/>


            <div className='Profile'>
                <img height='24px'  src='/mail.svg' alt="mail" />
                <img className="Icons" src='/profileicon.svg' alt="profile" />
                <span style={{ paddingRight: '10px'}}>My Profile</span>
                <img src='/dropdown.svg' alt="dropdown" />
            </div>
        </div>
    )
}