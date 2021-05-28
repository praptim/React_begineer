//adds the black bg behind the order summary box
//imported in Modal
import React from "react";
import classes from './Backdrop.css';
const backdrop = (props) => (
    props.show?<div 
                    className={classes.Backdrop}
                    onClick={props.clicked}>
                </div>:null
);

export default backdrop;