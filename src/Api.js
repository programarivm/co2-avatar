class Api {
  static avatar(pctAverage) {
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

    return Api.avatars().find(item => item.id === idAvatar);
  }

  static avatars() {
    let pctRange = 100 / 5;
    return [
      {
        id: 1,
        name: 'Mutant',
        description: "A mutant has a low level of consciousness, most probably because they haven't been taught that human species will die off soon. Let's say they are reckless. Mutants live as if there was no tomorrow, which is a bad thing especially if you have kids and care about the well-being of your offspring. They need the urgent help of healers.",
        pct: pctRange,
        image: 'mutant.jpg'
      },
      {
        id: 2,
        name: 'Polluter',
        description: "Polluters: human beings that pollute the environment at alarming rates. Not as much as mutants, but they are still a menace to your offspring's future in this planet. Polluters must do much more so nature can guarantee a successful, evolutionary link to future non-CO2 earthlings. They need the help of healers.",
        pct: pctRange * 2,
        image: 'polluter.jpg'
      },
      {
        id: 3,
        name: 'Neutral',
        description: "As the name itself implies, neutral CO2 individuals don't contaminate too much which helps a little bit. They are not a direct threat to this world's ecosystem. By the end of the day it is better to be neutral than to be a mutant -- but remember, there's no time to waste anymore, we are talking about the end of the world as we know it.",
        pct: pctRange * 3,
        image: 'neutral.jpg'
      },
      {
        id: 4,
        name: 'Healer',
        description: "Congratulations! You are a healer. This is the first good one of all five avatars. Healers barely contaminate the environment and can teach the rest of avatars how decarbonise themselves.",
        pct: pctRange * 4,
        image: 'healer.jpg'
      },
      {
        id: 5,
        name: 'Hero',
        description: "Congratulations! You are a hero. If every human being was like you in terms of CO2 emissions we all would be in the right way towards towards a sustainable future.",
        pct: pctRange * 5,
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
    let points = {
      food: 0,
      residential: 0,
      transport: 0
    };
    data.forEach(item => {
      points[item.type] += item.values[0];
    });
    let pct = {
      food: Math.floor(points.food * 100 / 400),
      residential: Math.floor(points.residential * 100 / 400),
      transport: Math.floor(points.transport * 100 / 400)
    };
    let pctAverage = (pct.food + pct.residential + pct.transport) / 3;

    return {
      total: Math.floor(points.food + points.residential + points.transport),
      pct_food: pct.food,
      pct_residential: pct.residential,
      pct_transport: pct.transport,
      avatar: Api.avatar(pctAverage, points)
    }
  }
}

export default Api;
