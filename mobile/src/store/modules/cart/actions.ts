import { action } from 'typesafe-actions';

import { Product, CartTypes } from './types';

export const addToCartRequest = (id: number, size: string) => action(
  CartTypes.ADD_REQUEST, { id, size },
);

export const addToCartSuccess = (product: Product) => action(
  CartTypes.ADD_SUCCESS, { product },
);

export const removeFromCart = (product: Product) => action(
  CartTypes.REMOVE, { product },
);

export const updateAmountRequest = (id: number, size: string, amount: number) => action(
  CartTypes.UPDADE_AMOUNT_REQUEST, { id, size, amount },
);

export const updateAmountSuccess = (id: number, size: string, amount: number) => action(
  CartTypes.UPDADE_AMOUNT_SUCCESS, { id, size, amount },
);

export type AddToCart = ReturnType<typeof addToCartRequest>;
export type UpdateAmount = ReturnType<typeof updateAmountRequest>;
