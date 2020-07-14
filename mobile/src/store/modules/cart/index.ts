import produce from 'immer';
import { Reducer } from 'redux';

import { CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
  products: [],
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  switch (action.type) {
    case CartTypes.ADD_SUCCESS: {
      draft.products.push(action.payload.product);
      break;
    }
    case CartTypes.UPDADE_AMOUNT_SUCCESS: {
      const index = draft.products.findIndex((product) => (
        product.id === action.payload.id && product.size === action.payload.size
      ));

      if (index >= 0) {
        draft.products[index].amount = action.payload.amount;
      }
      break;
    }
    case CartTypes.REMOVE: {
      const productIndex = draft.products.findIndex((product) => product.id === action.payload.product.id);

      if (productIndex >= 0) draft.products.splice(productIndex, 1);
      break;
    }
    default:
  }
});

export default reducer;
