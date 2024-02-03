import React, {createContext, useState} from 'react';
import all_product from '../Components/Assests/Assets/all_product'

export const ShopContext = createContext(null); 

const getDefaultCart=()=>{
    let cart = {};//this is an function of empty array for cart as we have to store products in that..
    for (let index = 0 ; index < all_product.length+1 ; index++) {
        cart[index] = 0 ;
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    //logic for cart functionality using spread function from js, usestate from react 
    const [cartItems, setcartItem] = useState(getDefaultCart());
    const addToCart = (Itemid) =>{
        setcartItem((prev)=>({...prev , [Itemid]:prev[Itemid]+1}))
    }
    const removefromCart = (Itemid) =>{
        setcartItem((prev)=>({...prev , [Itemid]:prev[Itemid]-1}))
    }
    
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
           if(cartItems[item]>0){
              let itemInfo = all_product.find((product)=>product.id===Number(item));
              totalAmount += itemInfo.new_price*cartItems[item];
           }
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0 ;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue={all_product , cartItems , addToCart, removefromCart , getTotalCartAmount,getTotalCartItems};
    return (<ShopContext.Provider value ={contextValue} >{props.children}</ShopContext.Provider>) 
}

export default ShopContextProvider
