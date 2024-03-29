import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart, subItemFromCart } from './cart.utils';
const INITIAL_STATE = {
    cartDropdownHidden: true,
    cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                cartDropdownHidden: !state.cartDropdownHidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.SUB_ITEM:
            return {
                ...state,
                cartItems: subItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
};

export default CartReducer;
