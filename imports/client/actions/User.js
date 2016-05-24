import moment from 'moment'
import * as C from '../constants/constants.js';

export function setBirthday(birthday) {
  if (moment(birthday, C.DATE_FORMAT).isValid()) {
    birthdayMoment = moment(birthday, C.DATE_FORMAT)
    formatted = birthdayMoment.format("dddd, MMMM Do YYYY")
    return {
      type: 'SET_BIRTHDAY',
      entered: true,
      valid: true,
      birthday: birthdayMoment,
      needsCalcs: true,
      formatted: formatted,
    }
  } else {
    return {
      type: 'SET_BIRTHDAY',
      entered: true,
      valid: false,
      birthday: null,
      needsCalcs: true,
      formatted: null,
    }
  }


}

export function doCoreCalcs(birthdayMoment) {
  stars = calculateStars(birthdayMoment)
  return {
    type: 'SET_STARS',
    stars: stars,
    needsCalcs: false
  }
}

//
// Internal functions to calculate star numbers, etc
//

function calculateStars(bdm) {
  star1 = calcFirstStar(bdm)
  // console.log("First Star: "+star1)
  star2 = calcSecondStar(star1, bdm)
  // console.log("Second Star: "+star2)
  star3 = calcThirdStar(star1, star2)
  // console.log("Third Star: "+star3)
  console.log("Your numbers are: "+star1+"-"+star2+"-"+star3)
  return [star1, star2, star3];
  //tests
  // console.log("1.5."+calcThirdStar(1,5))
  // console.log("2.4."+calcThirdStar(2,4))
  // console.log("3.9."+calcThirdStar(3,9))
  // console.log("4.7."+calcThirdStar(4,7))
  // console.log("5.7."+calcThirdStar(5,7))
  // console.log("7.5."+calcThirdStar(7,5))
  // console.log("9.1."+calcThirdStar(9,1))
  // console.log("9.9."+calcThirdStar(9,9))
  // console.log("5.5."+calcThirdStar(5,5))
}

function calcThirdStar(s1, s2) {
  ref = [5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6];
  offset = s2-s1+9;
  s3 = ref[offset]
  return s3
}

function calcSecondStar(star1, bdm) {
  //console.log(C.MATRIX[1][11])
  year = bdm.year()
  chiMonth = 0
  switch(true) {
    case (bdm.isBetween(moment(C.MONTH_DATES[1].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[1].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 1;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[2].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[2].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 2;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[3].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[3].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 3;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[4].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[4].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 4;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[5].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[5].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 5;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[6].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[6].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 6;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[7].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[7].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 7;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[8].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[8].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 8;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[9].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[9].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 9;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[10].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[10].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 10;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[11].start+(year), C.DATE_FORMAT), moment("12/31/"+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 11;  break;  }
    case (bdm.isBetween(moment("01/01/"+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[11].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 11;  break;  }
    case (bdm.isBetween(moment(C.MONTH_DATES[12].start+(year), C.DATE_FORMAT), moment(C.MONTH_DATES[12].end+(year), C.DATE_FORMAT), null, '[]')):
          { chiMonth = 12;  break;  }

    default: console.log("No match found. Can't assign chiMonth")
  }
  return C.MATRIX[star1][chiMonth];
}

function calcFirstStar(bdm){
  year = bdm.year()
  start = moment("01/01/"+(year), C.DATE_FORMAT)
  end = moment("02/03/"+(year), C.DATE_FORMAT)
  needOffset = bdm.isBetween(start, end, null, '[]') //this format includes the start/end dates
  t = bdm.year()
  if (needOffset) t -= 1
  //console.log(t)
  do {
    t = sumOfDigits(t)
    //console.log(t)
  } while (t > 10)
  return (11 - t)
}

function sumOfDigits(myInt) {
  intArray = myInt.toString(10).split("").map(Number)
  t = 0;
  for (var item in intArray) {
      t += intArray[item]
  }
  return t
}
