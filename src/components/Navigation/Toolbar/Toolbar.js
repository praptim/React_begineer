import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle click={props.clicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        {/* only when the screen size is like a desktop then show the navigation in the nav bar.
        else show it in the side drawer */}
        <nav className={classes.DesktopOnly}> 
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;