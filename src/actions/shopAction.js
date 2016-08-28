import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

var StoreAPIEndpoint = 'http://red-fox.herokuapp.com/api/v1/stores';

export function receiveShops(json) {
  return { type: types.RECEIVE_SHOPS, shops: json.data  };
}

export function requestShops() {
  return { type: types.REQUEST_SHOPS }
}

export function createShopSuccess(shop) {
  return { type: types.CREATE_SHOP_SUCCESS, shop };
}

export function fetchShops() {
  return function(dispatch) {
    //dispatch(requestShops());
    return fetch(StoreAPIEndpoint)
      .then(response => response.json())
      .then(json => dispatch(receiveShops(json))
    );
  };
}
