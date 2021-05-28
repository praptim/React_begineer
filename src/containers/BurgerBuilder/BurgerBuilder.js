import React,{Component} from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};

class BurgerBuilder extends Component{
    state = {
        ingredients :{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice :4,
        purchasable:false, //true if atleast one ingredient is selected
        purchasing:false //will be true when order now button is clicked
    }
    updatePurchaseState(ingredients) { //funct to check if we can order if atleast one ingredient is added
        console.log('in isPurchasable funct');
        const sum =Object.keys(ingredients).map(igKey=>{ //sum = [1,0,0,0] - reducing this to get the total sum
            return ingredients[igKey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        console.log(sum);
        /*let sum=0;
        for(let keys in sum)
        {
            console.log('key',sum[keys]);
            s=s+sum[keys];
        }
        console.log(s);
        console.log(sum);
        console.log(sum[0]); - alternative to reduce*/
        this.setState({purchasable:sum>0})
    }
    addIngredientHandler = (type) => {
        const oldCount =  this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]=updatedCount;
        const priceAdd=INGREDIENT_PRICES[type];
        const newPrice=this.state.totalPrice+priceAdd;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });
        console.log('in function add ingredients');
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount =  this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        if(updatedCount<0)
        {
            return;
        }
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type]=updatedCount;
        const priceSub=INGREDIENT_PRICES[type];
        const newPrice=this.state.totalPrice-priceSub;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });
        console.log('in function remove ingredients');
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = ()  => {
        this.setState({purchasing:true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = () => {
        alert('You continue!');
    }
    render(){
        console.log('[BurgerBuilder] - render');
        const disabledInfo = {...this.state.ingredients};
        for (let keys in disabledInfo){
            disabledInfo[keys]=disabledInfo[keys]<=0
        }
        const canPurchase=this.state.totalPrice>4;
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={canPurchase}
                    //purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;