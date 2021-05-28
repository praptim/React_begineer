//imported in layout
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary/Auxillary';
const sidedrawer = (props) =>{
    let attachClasses =[classes.Sidedrawer,classes.Close];
    if(props.open){
        attachClasses=[classes.Sidedrawer,classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/> {/*the moment u click on the backdrop the sidedrawer should close - ie show = false*/}
            <div className={attachClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}

export default sidedrawer;