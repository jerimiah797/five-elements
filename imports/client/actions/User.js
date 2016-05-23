export function setBirthdayCaptured(value, birthday) {
  return {
    type: 'SET_BIRTHDAY_CAPTURED',
    birthdayCaptured: value,
    birthday: birthday
  }
}
