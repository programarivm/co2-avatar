class Api {
  static avatars() {
    let pctRange = 100 / 5;
    let ranges = {
      mutant: pctRange,
      polluter: pctRange * 2,
      neutral: pctRange * 3,
      healer: pctRange * 4,
      hero: pctRange * 5
    };
    return [
      {
        id: 1,
        name: 'Mutant',
        description: "A mutant has a low level of consciousness, most probably because they haven't been taught that human species will die off soon. Let's say they are reckless. Mutants live as if there was no tomorrow, which is a bad thing especially if you have kids and care about the well-being of your offspring. They need the urgent help of healers.",
        pct: ranges.mutant,
        image: 'mutant.jpg'
      },
      {
        id: 2,
        name: 'Polluter',
        description: "Polluters: human beings that pollute the environment at alarming rates. Not as much as mutants, but they are still a menace to your offspring's future in this planet. Polluters must do much more so nature can guarantee a successful, evolutionary link to future non-CO2 earthlings. They need the help of healers.",
        pct: ranges.polluter,
        image: 'polluter.jpg'
      },
      {
        id: 3,
        name: 'Neutral',
        description: "As the name itself implies, neutral CO2 individuals don't contaminate too much which helps a little bit. They are not a direct threat to this world's ecosystem. By the end of the day it is better to be neutral than to be a mutant -- but remember, there's no time to waste anymore, we are talking about the end of the world as we know it.",
        pct: ranges.neutral,
        image: 'neutral.jpg'
      },
      {
        id: 4,
        name: 'Healer',
        description: "TODO: description.",
        pct: ranges.healer,
        image: 'healer.jpg'
      },
      {
        id: 5,
        name: 'Hero',
        description: "TODO: description.",
        pct: ranges.hero,
        image: 'hero.jpg'
      }
    ];
  }

  static questions() {
    let questions = [
      {
        "type": "food",
        "text": "Junk food is rubbish.",
        "values": [50]
      },
      {
        "type": "food",
        "text": "Your diet is mostly vegan.",
        "values": [50]
      },
      {
        "type": "food",
        "text": "You never throw away the food you buy.",
        "values": [50]
      },
      {
        "type": "food",
        "text": "You are usually aware about the calories in the foods you eat.",
        "values": [50]
      },
      {
        "type": "transport",
        "text": "When the weather allows it, you prefer to walk instead of drive to work.",
        "values": [50]
      },
      {
        "type": "transport",
        "text": "Walking and cycling are great for your mind and body.",
        "values": [50]
      },
      {
        "type": "transport",
        "text": "You don't have a car.",
        "values": [50]
      },
      {
        "type": "transport",
        "text": "You avoid taking a plane because you know it produces a lot of carbon emissions.",
        "values": [50]
      },
      {
        "type": "residential",
        "text": "You know a few handy tricks to keep your house warm in winter.",
        "values": [50]
      },
      {
        "type": "residential",
        "text": "Second-hand clothes are your cup of tea.",
        "values": [50]
      },
      {
        "type": "residential",
        "text": "Most of your furniture is second-hand.",
        "values": [50]
      },
      {
        "type": "residential",
        "text": "Lights are turned off if they don't have to be on.",
        "values": [50]
      }
    ];
    questions.sort(function() {
      return 0.5 - Math.random();
    });

    return questions;
  }

  static results(data) {
    let results = {
      food: 0,
      residential: 0,
      transport: 0
    };
    data.forEach(item => {
      results[item.type] += item.values[0];
    });
    let pct = {
      food: Math.floor(results.food * 100 / 400),
      residential: Math.floor(results.residential * 100 / 400),
      transport: Math.floor(results.transport * 100 / 400)
    };
    let pctAverage = (pct.food + pct.residential + pct.transport) / 3;
    let idAvatar;
    if (20 > pctAverage) {
      idAvatar = 1;
    } else if (40 > pctAverage) {
      idAvatar = 2;
    } else if (60 > pctAverage) {
      idAvatar = 3;
    } else if (80 > pctAverage) {
      idAvatar = 4;
    } else {
      idAvatar = 5;
    }
    return {
      total: Math.floor(results.food + results.residential + results.transport),
      pct_food: pct.food,
      pct_residential: pct.residential,
      pct_transport: pct.transport,
      id_avatar: idAvatar
    }
  }
}

export default Api;
