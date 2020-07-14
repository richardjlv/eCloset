/**
 * Actions types
 */

export enum CartTypes {
  ADD_REQUEST = '@cart/ADD_REQUEST',
  ADD_SUCCESS = '@cart/ADD_SUCCESS',
  REMOVE = '@cart/REMOVE',
  UPDADE_AMOUNT_REQUEST = '@cart/UPDATE_AMOUNT_REQUEST',
  UPDADE_AMOUNT_SUCCESS = '@cart/UPDATE_AMOUNT_SUCCESS',
}

/**
 * Data types
 */

export interface Product {
  id: number
  name: string
  price: number
  image: {
    url: string
  }
  amount: number
  size: string
  priceFormatted: string
  subTotal?: string
}

/**
 * State types
 */

export interface CartState {
  readonly products: Product[]
}
