import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const SideNav = (props) => {

    const SidebarData = [
        {
            title: 'Restaurants',
            path: '/',
            icon: <FaIcons.FaUtensils />,
            cName: 'nav-text'
        },
        {
            title: 'Cart',
            path: '/cart',
            icon: <FaIcons.FaShoppingCart />,
            cName: 'nav-text'
        }
    ];

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <a href="/" className='title'>Uber Eats</a>
                <AmplifySignOut />
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default SideNav;