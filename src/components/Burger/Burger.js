//program to build the burger
import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => { //ingredients are sent as props
     //igkey = bacon,cheese etc
    let transformedIngredients=Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey+i} type={igKey} />;
        });
    }).reduce((arr,el)=>{ //arr -prev elm ,el- curr elm,
        return arr.concat(el);
    },[]);
    //console.log(transformedIngredients);
    //console.log(transformedIngredients.length);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;