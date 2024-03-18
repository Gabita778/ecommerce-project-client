export const productsInitialState = {
    data: [],
};

export const productInitialState = {};

export const productsReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                data: action.payload,
            };
        
        default:
            return state;    
    }
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_PRODUCT_SINGLE":
            return action.payload;
        case "EDIT_PRODUCT":
            return action.payload;

        default:
            return state;
    }
};