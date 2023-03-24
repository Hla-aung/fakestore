import { combineReducers } from "redux";
import { actions } from "./actions";

const intialState = {
    products: []
}

export const productsReducer = (state = intialState, {type, payload}) => {
    switch(type){
        case actions.SET_PRODUCTS: 
            return {...state, products: payload};
        default: 
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case actions.SELECTED_PRODUCTS:
            return {...state, ...payload};
        case actions.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
}

const cartState = {
    item: []
}
export const addCartReducer = (state = cartState, {type, payload}) => {
    switch(type) {
        case actions.ADD:
            const itemIndex = state.item.findIndex((item) => item.id === payload.id)

            if (itemIndex >= 0) {
                state.item[itemIndex].qty += 1
            } else {
                const temp = {...payload, qty: 1}
                return {
                    ...state,
                    item: [...state.item, temp]
                }
            }
        default:
            return state
    }
}
const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    addItem: addCartReducer
})

export default reducers