import moment from 'moment';

export function setBirthday(birthday) {
  birthdayMoment = moment(birthday, "MM/DD/YYYY")
  return {
    type: 'SET_BIRTHDAY',
    birthdayCaptured: true,
    birthday: birthdayMoment
  }
}

export function doCoreCalcs(birthdayMoment) {
  testing(birthdayMoment)
  return {
    type: 'SET_STARS',
    stars: [7, 8, 1]
  }
}

function testing(bdm) {
  console.log(bdm)
}
