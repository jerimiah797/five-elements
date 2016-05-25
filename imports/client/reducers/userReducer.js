export default userReducer = function (state = [], action) {
  //console.log('itemsReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'SET_BIRTHDAY':
      return {
        ...state,
        entered: action.entered,
        valid: action.valid,
        birthday: action.birthday,
        needsCalcs: action.needsCalcs,
        formatted: action.formatted,
        original: action.original,
      }
    case 'SET_STARS':
      return {
        ...state,
        stars: action.stars,
        needsCalcs: action.needsCalcs,
      }
    default:
      return state;
  }
}
