export const DATE_FORMAT = "MM/DD/YYYY"
export const ICON_SIZE = 160
export const FIRE = "images/Fire.svg"
export const WOOD = "images/Wood.svg"
export const WATER = "images/Water.svg"
export const METAL = "images/Metal.svg"
export const EARTH = "images/Earth.svg"

// Array of objects is padded with a null to map star number directly
// Star 5 EARTH is located at STAR[5]
export const STAR = [null,
  {name: "White Water Star",
      trigramName: "K'an",
      trigram: [2, 1, 2],
      number: 1,
      symbolism: "Water - The North",
      familyMember: "Middle Son",
      element: "Water",
      color: "White or transparent",
      image: WATER
  },

  {name: "Black Earth Star",
      trigramName: "K'Un",
      trigram: [2, 2, 2],
      number: 2,
      symbolism: "Earth - The Receptive",
      familyMember: "Mother",
      element: "Earth",
      color: "Black",
      image: EARTH
  },

  {name: "Bright Green Wood",
      trigramName: "Chen",
      trigram: [2, 2, 1],
      number: 3,
      symbolism: "Thunder - the Awakening",
      familyMember: "Eldest Son",
      element: "Wood",
      color: "Bright Green",
      image: WOOD
  },

  {name: "Green Wood Star",
      trigramName: "Sun",
      trigram: [1, 1, 2],
      number: 4,
      symbolism: "Wind",
      familyMember: "Eldest Daughter",
      element: "Wood",
      color: "Green",
      image: WOOD
  },

  {name: "Yellow Earth Star",
      trigramName: null,
      trigram: null,
      number: 5,
      symbolism: "The center",
      familyMember: "the Seventh Child",
      element: "Earth",
      color: "Yellow",
      image: EARTH
  },

  {name: "White Metal Star",
      trigramName: "Ch'ien",
      trigram: [1, 1, 1],
      number: 6,
      symbolism: "Heaven",
      familyMember: "Father",
      element: "Metal",
      color: "White",
      image: METAL
  },

  {name: "Red Metal Star",
      trigramName: "Tui",
      trigram: [2, 1, 1],
      number: 7,
      symbolism: "Lake",
      familyMember: "Youngest Daughter",
      element: "Metal",
      color: "Red",
      image: METAL
  },

  {name: "White Earth Star",
      trigramName: "Ken",
      trigram: [1, 2, 2],
      number: 8,
      symbolism: "Mountain",
      familyMember: "Youngest Son",
      element: "Earth",
      color: "White",
      image: EARTH
  },

  {name: "Purple Fire Star",
      trigramName: "Li",
      trigram: [1, 2, 1],
      number: 9,
      symbolism: "Fire",
      familyMember: "Middle Daughter",
      element: "Fire",
      color: "Purple",
      image: FIRE
  }
]

// table is padded with nulls to map literal star numbers without using zero-based translation
// Given month m, and star s, find character star number at MATRIX[s][m]
export const MATRIX = [null,
  [null,8,7,6,5,4,3,2,1,9,8,7,6],
  [null,2,1,9,8,7,6,5,4,3,2,1,9],
  [null,5,4,3,2,1,9,8,7,6,5,4,3],
  [null,8,7,6,5,4,3,2,1,9,8,7,6],
  [null,2,1,9,8,7,6,5,4,3,2,1,9],
  [null,5,4,3,2,1,9,8,7,6,5,4,3],
  [null,8,7,6,5,4,3,2,1,9,8,7,6],
  [null,2,1,9,8,7,6,5,4,3,2,1,9],
  [null,5,4,3,2,1,9,8,7,6,5,4,3]
]

export const MONTH_DATES = [null,
  {start: "02/04/", end: "03/05/"},
  {start: "03/06/", end: "04/05/"},
  {start: "04/06/", end: "05/05/"},
  {start: "05/06/", end: "06/05/"},
  {start: "06/06/", end: "07/07/"},
  {start: "07/08/", end: "08/07/"},
  {start: "08/08/", end: "09/07/"},
  {start: "09/08/", end: "10/08/"},
  {start: "10/09/", end: "11/07/"},
  {start: "11/08/", end: "12/07/"},
  {start: "12/08/", end: "01/05/"},
  {start: "01/06/", end: "02/03/"},
]
