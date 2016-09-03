import * as types from '../actions/actionTypes';

export default function shopReducer(state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case types.REQUEST_SHOPS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE_SHOPS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.shops,
      })

    case types.CREATE_SHOP_SUCCESS:
      return [
        ...store,
        Object.assign({}, action.shop)
      ]

    default:
      return state;
  }
}
