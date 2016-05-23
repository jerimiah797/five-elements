export default userReducer = function (state = [], action) {
  //console.log('itemsReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'SET_BIRTHDAY_CAPTURED':
      return {
        ...state,
        birthdayCaptured: action.birthdayCaptured,
        birthday: action.birthday
      }
    default:
      return state;
  }
}
