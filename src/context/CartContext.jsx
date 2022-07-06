import {useEffect, createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { types } from "../types/types";

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(cart)
    }else{
        return [];
    }
}

const initialState = {
    cart: getLocalStorage(),
    totalItems: 0,
    totalAmount: 0,
    shippingFee: 534
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    // add to cart
    const addToCart = (id, color, amount, product) => {
        dispatch({type: types.addToCart, payload: {id, color, amount, product}})
    };

    // remove item from cart
    const removeItem = (id) => {
        dispatch({type: types.removeCartItem, payload: id})
    };

    // toggle amount
    const toggleAmount = (id, value) => {
        dispatch({type: types.toggleCartItemAmount, payload: {id, value}})
    };

    // clear cart
    const clearCart = () => {
        dispatch({type: types.clearCart})
    };

    useEffect(() => {
        dispatch({type: types.countCartTotals});
        localStorage.setItem('cart', JSON.stringify(state.cart))   
    }, [state.cart])
    

    return (
        <CartContext.Provider value={{...state, addToCart, removeItem, toggleAmount, clearCart}}>
            {children}
        </CartContext.Provider>
    )
};