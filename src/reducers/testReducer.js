import testActionTypes from '../constants/testActionTypes';

const tips = {
  food: [
    "Try a veganish diet",
    "Don't eat fast food in at least one year time"
  ],
  residential: [
    "Learn how to keep your house warmer in winter and cooler in summer",
    "Use more second-hand things",
  ],
  transport: [
    "Walk more instead of driving",
    "Don't take a flight in at least two years time",
  ]
};

const avatars = [
  {
    name: 'Mutant',
    description: "Mutants have a low level of consciousness because they haven't been taught that human species may die off soon. They live as if there was no tomorrow which is a bad thing, especially if you care about the well-being of your kids. If you're a mutant, you probably need the urgent help of a healer.",
    pct: 100 / 5,
    image: 'mutant.jpg'
  },
  {
    name: 'Polluter',
    description: "Polluters: human beings that pollute the environment at alarming rates. Not as much as mutants, but they don't care about future generations on this planet. Polluters must do more to guarantee a successful, evolutionary link to future non-CO2 earthlings. They need the help of healers.",
    pct: (100 / 5)  * 2,
    image: 'polluter.jpg'
  },
  {
    name: 'Neutral',
    description: "As its name implies, neutral CO2 individuals don't contaminate too much which helps a little bit. They are not a direct threat to this world's ecosystem. After all it is better to be neutral than to be a mutant, but remember: There's no time to waste anymore. This is the end of the world as we know it.",
    pct: (100 / 5) * 3,
    image: 'neutral.jpg'
  },
  {
    name: 'Healer',
    description: "Congratulations! You are a healer. This is the first good one of all five avatars. Healers barely contaminate the environment and can teach the rest of avatars how to decarbonise themselves.",
    pct: (100 / 5) * 4,
    image: 'healer.jpg'
  },
  {
    name: 'Hero',
    description: "Congratulations! You are a hero. If every human being was like you in terms of CO2 emissions we all would be in the right way towards a sustainable future.",
    pct: (100 / 5) * 5,
    image: 'hero.jpg'
  }
];

const avatar = (avgPct) => {
  if (20 > avgPct) {
    return avatars[0];
  } else if (40 > avgPct) {
    return avatars[1];
  } else if (60 > avgPct) {
    return avatars[2];
  } else if (80 > avgPct) {
    return avatars[3];
  }

  return avatars[4];
}

const result = (data) => {
  let points = {
    food: 0,
    residential: 0,
    transport: 0
  };
  data.forEach(item => {
    points[item.type] += item.values[0];
  });
  const pct = {
    food: Math.floor(points.food * 100 / 400),
    residential: Math.floor(points.residential * 100 / 400),
    transport: Math.floor(points.transport * 100 / 400)
  };
  const avgPct = (pct.food + pct.residential + pct.transport) / 3;

  return {
    total: Math.floor(points.food + points.residential + points.transport),
    pct_food: pct.food,
    pct_residential: pct.residential,
    pct_transport: pct.transport,
    avatar: avatar(avgPct, points),
    tip: randTip(avgPct, pct)
  }
}

const randTip = (avgPct, pct) => {
  if (avgPct < 80) {
    let items = [];
    if (pct.food < 80) {
      items.push(tips.food[Math.floor(Math.random()*tips.food.length)]);
    }
    if (pct.residential < 80) {
      items.push(tips.residential[Math.floor(Math.random()*tips.residential.length)]);
    }
    if (pct.transport < 80) {
      items.push(tips.transport[Math.floor(Math.random()*tips.transport.length)]);
    }
    return items[Math.floor(Math.random()*items.length)];
  }

  return "Your mission is to teach the rest of avatars how to save the planet";
}

const initialState = {
  result: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case testActionTypes.RESULTS:
      return {
        result: result(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
