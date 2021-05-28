import React, { Component } from 'react';
import Aux from '../Auxillary/Auxillary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';
class Layout extends Component
{
    state={
        showSidedrawer:false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSidedrawer:false});
    }
    SideDrawerToggleHandler = () =>{
        this.setState((prevState) =>
        { return {showSidedrawer:!prevState.showSidedrawer}});
    }
    render(){
        return (
            //using Auxillary higher order component to have adjacent jsx elements
            <Aux>
                <Toolbar clicked={this.SideDrawerToggleHandler}/>
                <Sidedrawer 
                    open={this.state.showSidedrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;