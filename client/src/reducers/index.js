const initialState = {
  charges: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RETRIEVE_CHARGES':
      return Object.assign({}, state, {
        charges: action.payload
      })
    default:
      return state;
  }
}