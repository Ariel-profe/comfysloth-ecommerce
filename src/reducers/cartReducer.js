import { types } from "../types/types"


export const cartReducer = (state = {}, action) => {

    
    switch (action.type) {
        case types.addToCart:
            const {id, color, amount, product} = action.payload;
            const tempItem = state.cart.find((i) => i.id === id + color)

            if(tempItem){
                const tempCart = state.cart.map( cartItem => {
                    if(cartItem.id === id + color){
                        let newAmount = cartItem.amount + amount;
                        if(newAmount > cartItem.max){
                            newAmount = cartItem.max
                        }
                        return {...cartItem, amount: newAmount}
                    }else{
                       return cartItem; 
                    }
                })
                return {...state, cart: tempCart}
            }else{
                const newItem = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.images[0].url,
                    price: product.price,
                    max: product.stock
                };
                return {...state, cart: [...state.cart, newItem]}
            }
        
        case types.toggleCartItemAmount:

            const tempCart = state.cart.map( item => {
                if(item.id === action.payload.id){
                    if(action.payload.value === 'inc'){
                        let newAmount = item.amount + 1;
                        if(newAmount > item.max){
                            newAmount = item.max
                        }
                        return {...item, amount: newAmount}
                    }
                if(action.payload.value === 'dec'){
                    let newAmount = item.amount - 1;
                    if(newAmount < 1){
                        newAmount = 1
                    }
                    return {...item, amount: newAmount}
                }
                }else{
                    return item
                }
            })

            return {
                ...state,
                cart: tempCart
            }

        case types.countCartTotals:
            const {totalItems, totalAmount} = state.cart.reduce((total, cartItem) => {

                const {amount, price} = cartItem;

                total.totalItems += amount;

                total.totalAmount += price * amount;

                return total
            }, {
                totalItems: 0,
                totalAmount: 0
            })
            return {
                ...state,
                totalItems,
                totalAmount
            }

        case types.removeCartItem:
            const tempCartArray = state.cart.filter( item => item.id !== action.payload)
            return {
                ...state,
                cart : tempCartArray
            }
           
        case types.clearCart:
            return {
                ...state,
                cart: []
            }
    
        default:
            return{ state }
    }

}