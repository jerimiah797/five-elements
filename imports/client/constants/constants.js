export const DATE_FORMAT = "MM/DD/YYYY"
export const ICON_SIZE = 160 //for landing page
export const RESULTS_ICON_SIZE = 120
export const FIRE = "images/Fire.svg"
export const WOOD = "images/Wood.svg"
export const WATER = "images/Water.svg"
export const METAL = "images/Metal.svg"
export const EARTH = "images/Earth.svg"
export const BACKGROUND = 'url("images/background.svg")'

// Array of objects is padded with a null to map star number directly
// Star 5 EARTH is located at STAR[5]
export const STAR = [null,
  {name: "White Water Star"
  , trigramName: "K'an"
  , trigram: [2, 1, 2]
  , number: 1
  , symbolism: "Water - The North"
  , familyMember: "Middle Son"
  , element: "Water"
  , color: "White or transparent"
  , image: WATER
  , balance: null
  , desc: ["Middle Son / Iceberg / Depth of emotion / A lot going on underneath / Takes a long time to process / Creative / Intuitive / Wisdom in bones"
            , "Worst case scenario / May become paralyzed with fear / Feeling hurt deeply without others knowing / May become secretive / Passive-aggressive"
            , "Fear / Ancestral issues / Loneliness & abandonment / Accessing intuition / Allowing creativity to flow / Wisdom / Deep emotions / Freedom"
          ]
  },

  {name: "Black Earth Star"
  , trigramName: "K'Un"
  , trigram: [2, 2, 2]
  , number: 2
  , symbolism: "Earth - The Receptive"
  , familyMember: "Mother"
  , element: "Earth"
  , color: "Black"
  , image: EARTH
  , balance: "Yin"
  , desc: ["Mama / Goddess of compassion / Nurturing / Supportive / Puts others needs before own / Family, friends important / Sticks with a project"
          ,"May get stuck in worry / Lose confidence / Feel disempowerment / Sacrifice own needs / Have poor boundaries"
          ,"Giving vs. over-giving / Lack of boundaries vs. creating healthy boundaries / Moving through the worry / Answering the 'What if' / Self-care"
          ]
  },

  {name: "Bright Green Wood"
  , trigramName: "Chen"
  , trigram: [2, 2, 1]
  , number: 3
  , symbolism: "Thunder - the Awakening"
  , familyMember: "Eldest Son"
  , element: "Wood"
  , color: "Bright Green"
  , image: WOOD
  , balance: "Yang"
  , desc: ["Eldest Son / Thunder / The Warrior / Active / Drive / Need for growth & challenge / Goal setter / Agent of change / Tension - needs to be doing"
          ,"May become angry, frustrated, or impatient / Needs to blow off steam / Shout / Make noise / Can get stuck in a groove / Harsh self-judgement / Trouble adjusting to new plan"
          ,"Anger / Frustration / Impatience / shame / Self-judgement & depression / Addiction vs discipline / Taking action to make the world better / Setting and reaching goals"
          ]
  },

  {name: "Green Wood Star"
  , trigramName: "Sun"
  , trigram: [1, 1, 2]
  , number: 4
  , symbolism: "Wind"
  , familyMember: "Eldest Daughter"
  , element: "Wood"
  , color: "Green"
  , image: WOOD
  , balance: "Yin"
  , desc: ["Eldest Daughter / Gentle Guide / Bamboo / Wind / Flexible / Champion thinkers / Can be easily influenced / Can have issues with timing"
          ,"May have trouble making a decision / Gets stuck thinking, thinking, thinking / May want to flee - or avoid deciding / Anger turns inward"
          ,"Indecisiveness / Issues with timing / Getting stuck over-thinking / Self-judgement leading to depression / Guiding others / Having great influence"
          ]
  },

  {name: "Yellow Earth Star"
  , trigramName: null
  , trigram: null
  , number: 5
  , symbolism: "The center"
  , familyMember: "the Seventh Child"
  , element: "Earth"
  , color: "Yellow"
  , image: EARTH
  , balance: "Center"
  , desc: ["The Center / A Force of Nature / Seventh Son - Outsider / The Empress / Highly capable & knowledgeable / Life of extremes / Great need for appreciation"
          ,"Soaks up energy of other two numbers and intensifies their nature"
          ,"Soaks up energy of other two numbers and intensifies their nature"
          ]
  },

  {name: "White Metal Star"
  , trigramName: "Ch'ien"
  , trigram: [1, 1, 1]
  , number: 6
  , symbolism: "Heaven"
  , familyMember: "Father"
  , element: "Metal"
  , color: "White"
  , image: METAL
  , balance: "Yang"
  , desc: ["Father / Heaven / The King / Need for sacred purpose / Values quality / Natural leader / Can be rigid / Highly self-critical / Idealist"
          ,"May try to take control / Often right, but can become rigid / May become anxious due to strong inner critic / Pride prevents progress"
          ,"Stepping into personal power / Praise bounces off, criticism soaks in / Rigid / Prideful / Finding sacred purpose / Achieving respect / Doing valuable work"
          ]
  },

  {name: "Red Metal Star"
  , trigramName: "Tui"
  , trigram: [2, 1, 1]
  , number: 7
  , symbolism: "Lake"
  , familyMember: "Youngest Daughter"
  , element: "Metal"
  , color: "Red"
  , image: METAL
  , balance: "Yin"
  , desc: ["Youngest Daughter / Lake / Princess / Gracious / Perfect host / Highly sensitive to surroundings and others' needs & energy / Creates beauty / Appearance important"
          ,"May clamp down and hold onto things too tightly while trying to maintain outward appearances / Can struggle with 'enough' issues / Can deprive themselves / Avoid responsibility"
          ,"Issues with 'enough': not good enough, don't have enough / Self-deprivation / Holding on too tightly / Getting stuck in making it perfect / Letting go / Living a charmed life / Creating beauty"
          ]
  },

  {name: "White Earth Star"
  , trigramName: "Ken"
  , trigram: [1, 2, 2]
  , number: 8
  , symbolism: "Mountain"
  , familyMember: "Youngest Son"
  , element: "Earth"
  , color: "White"
  , image: EARTH
  , balance: "Yang"
  , desc: ["Youngest Son / The Mountain / Solid / Hard-working / Tends to do things the hard way / Generous / Has large community / Needs cave time"
          ,"May work too hard, especially when perceive an injustice / Has great difficulty receiving - will resist / Under pressure becomes the volcano / Needs cave time"
          ,"Creating struggle for self / Doing things the hard way / Overly generous / Not able to receive care, support / Deep transformation / Care for large community"
          ]
  },

  {name: "Purple Fire Star"
  , trigramName: "Li"
  , trigram: [1, 2, 1]
  , number: 9
  , symbolism: "Fire"
  , familyMember: "Middle Daughter"
  , element: "Fire"
  , color: "Purple"
  , image: FIRE
  , balance: null
  , desc: ["Middle Daughter / Passionate / Warm / Talkative / Open-hearted / Excitable / Needs variety / Flirt / Emotionally sensitive / Desire to connect"
          ,"May become over-excited, emotions flare up / May become impulsive, make rash decisions / May become dramatic / Anxious / Overwhelm"
          ,"Overly open-heart / Rejection / Betrayal / Need to feel special / Spotlight vs. shy / Managing emotions / Ability to excite / Connection / Creativity / Love"
          ]
  }
]

export const STAR_POSITION = ["Primary", "Character", "Energetic"]
export const ARRAY_POSITION_MAP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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
