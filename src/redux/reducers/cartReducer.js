import Actions from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CART_LOADING:
      return { ...state, isLoading: true };

    case Actions.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case Actions.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: action.payload };

    case Actions.ADD_ITEM:
      const updatedCart = state.cart.concat(action.payload);

      return { ...state, cart: updatedCart };

    case Actions.UPDATE_ITEM:
      const updatedArr = state.cart.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { ...state, cart: updatedArr };

    case Actions.DELETE_ITEM:
      const filtred = state.cart.filter((i) => i.id !== action.payload);

      return { ...state, cart: filtred };

    default:
      return state;
  }
};

export default cartReducer;
