import {
  call, select, put, takeLatest, all,
} from 'redux-saga/effects';

import * as CartActions from './actions';
import { CartTypes, Product } from './types';
import api from '~/services/api';
import { navigate } from '~/services/rootNavigation';
import { ApplicationState } from '~/store/types';
import { alert } from '~/util/alert';
import { formatPrice } from '~/util/format';

interface Stock {
  AmountP: number
  AmountM: number
  AmountG: number
}

function* addToCart({ payload }: CartActions.AddToCart) {
  const { id, size } = payload;
  const productExists = yield select((state: ApplicationState) => state.cart.products.find(
    (product) => (product.id === id && product.size === size),
  ));

  const { data: stock }: { data: Stock } = yield call(api.get, `stock/${id}`);

  const stockAmount = () => {
    if (size === 'P') return stock.AmountP;
    if (size === 'M') return stock.AmountM;

    return stock.AmountG;
  };

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount()) {
    alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(CartActions.updateAmountSuccess(id, size, amount));
  } else {
    const { data }: { data: Product } = yield call(api.get, `/products/${id}`);

    const newProduct = {
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      size,
      amount: 1,
      priceFormatted: formatPrice(data.price),
    };

    yield put(CartActions.addToCartSuccess(newProduct));
  }
  navigate('Cart');
}

function* updateAmount({ payload }: CartActions.UpdateAmount) {
  const { id, size, amount } = payload;
  if (amount <= 0) return;

  const { data: stock }: { data: Stock } = yield call(api.get, `stock/${id}`);

  const stockAmount = () => {
    if (size === 'P') return stock.AmountP;
    if (size === 'M') return stock.AmountM;

    return stock.AmountG;
  };

  if (amount > stockAmount()) {
    alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(CartActions.updateAmountSuccess(id, size, amount));
}

export default all([
  takeLatest(CartTypes.ADD_REQUEST, addToCart),
  takeLatest(CartTypes.UPDADE_AMOUNT_REQUEST, updateAmount),
]);
