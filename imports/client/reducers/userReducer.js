export default userReducer = function (state = [], action) {
  //console.log('itemsReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'SET_BIRTHDAY':
      return {
        ...state,
        birthdayCaptured: action.birthdayCaptured,
        birthday: action.birthday
      }
    case 'SET_STARS':
      return {
        ...state,
        stars: action.stars
      }
    default:
      return state;
  }
}
