export const cartsInitialState = {
  items: [],
  isOpen: false,
};

export const cartsReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART_DATA":
      return {
        ...state,
        items: action.payload.items,
      };

    case "ADD_CART_DATA":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "UPDATE_CART_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.product && item.product._id === action.payload._id ? action.payload : item
        ),
      };
    
      case "DELETE_FROM_CART":
        return {
          ...state,
          items: state.cartItems?.filter((item) => item._id !== action.payload)
        };

    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};