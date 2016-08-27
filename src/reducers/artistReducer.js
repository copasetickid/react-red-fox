export default function artistReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_CITY_SUCCESS':
      return action.artists;



    default:
      return state;
  }
}
