import moment from 'moment'

const DATEFORMAT = "MM/DD/YYYY"

export function setBirthday(birthday) {
  if (moment(birthday, DATEFORMAT).isValid()) {
    birthdayMoment = moment(birthday, DATEFORMAT)
    return {
      type: 'SET_BIRTHDAY',
      entered: true,
      valid: true,
      birthday: birthdayMoment,
      calcsDone: false
    }
  } else {
    return {
      type: 'SET_BIRTHDAY',
      entered: true,
      valid: false,
      birthday: null,
      calcsDone: false
    }
  }


}

export function doCoreCalcs(birthdayMoment) {
  calculateStars(birthdayMoment)
  return {
    type: 'SET_STARS',
    stars: [7, 8, 1],
    calcsDone: true
  }
}

//
// Internal functions to calculate star numbers, etc
//

function calculateStars(bdm) {
  console.log("Calculating Stars")
  year = bdm.year()
  month = bdm.month()
  day = bdm.day()
  // start = moment("12/31/"+(year-1), DATEFORMAT)
  // end = moment("02/04/"+(year), DATEFORMAT)
  // needOffset = bdm.isBetween(start, end)
  // t = bdm.year()
  // console.log(t)
  // do {
  //   t = sumOfDigits(t)
  //   console.log(t)
  // } while (t > 10)
  star1 = calcFirstStar(bdm)
  console.log("First Star: "+star1)
}

function calcFirstStar(bdm){
  start = moment("12/31/"+(year-1), DATEFORMAT)
  end = moment("02/04/"+(year), DATEFORMAT)
  needOffset = bdm.isBetween(start, end)
  t = bdm.year()
  if (needOffset) t -= 1
  console.log(t)
  do {
    t = sumOfDigits(t)
    console.log(t)
  } while (t > 10)
  return (11 - t)
}

function sumOfDigits(myInt) {
  intArray = myInt.toString(10).split("").map(Number)
  temp = 0;
  for (var item in intArray) {
      temp += intArray[item]
  }
  return temp
}
