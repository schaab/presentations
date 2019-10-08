// A perfectly reasonable implementation for making sure everyone loves dogs

const people = [
  {
    name: "Jared",
    favoriteAnimals: ["dogs", "rhinos"]
  },
  {
    name: "Christoph",
    favoriteAnmials: ["cats"] // booooooo
  },
  {
    name: "Bobby four fingers",
    favoriteAnimals: [] // heartless
  }
];

const dogsAreBest = () => {
  for (let i = 0; i < people.length; i++) {
    if (!people[i].favoriteAnimals.includes("dogs")) {
      people[i].favoriteAnimals.push("dogs");
    }

    if (people[i].favoriteAnimals.includes("cats")) {
      const catIndex = people[i].favoriteAnimals.indexOf("cats");
      people[i].favoriteAnimals.splice(catIndex, 1);
    }
  }
};
