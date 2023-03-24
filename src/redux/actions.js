export const actions = {
    SET_PRODUCTS : "SET_PRODUCTS",
    SELECTED_PRODUCTS : "SELECTED_PRODUCTS",
    REMOVE_SELECTED_PRODUCTS : "REMOVE_SELECTED_PRODUCTS",
    ADD: "ADD"
}

export const setProducts = (products) => {
    return {
        type: actions.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actions.SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeSelectedProduct = (id) => {
    return {
        type: actions.REMOVE_SELECTED_PRODUCTS,
        payload: id
    }
}

export const addcart = (item) => {
    return{
        type: actions.ADD,
        payload: item
    }
}