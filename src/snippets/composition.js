const someValue = someFunction()
const someOtherValue = someOtherFunction(someValue)

const animals = [
  {
    name: "komodo dragon",
  },
  {
    name: "eagle",
  },
  {
    name: "cat",
  },
]

const superAnimal = animals
  .filter(({name}) => name.length > 3)
  .map(({name}) => ({
    name,
    canFly: name === "eagle",
  }))
  .reduce(
    (acc, cur) => ({
      name: `${acc.name} ${cur.name}`,
      canFly: acc.canFly || cur.canFly,
    }),
    {name: ""}
  )

console.log(superAnimal)
//{ "name": " komodo dragon eagle", "canFly": true }

// using a functional library like Ramda or lodash/fp
// you can use pipe or flow, respectively, you can 
// 'pipe' the result of one function into the next

const animals = [
  {
    name: "komodo dragon",
  },
  {
    name: "eagle",
  },
  {
    name: "cat",
  },
]

const smallNames = ({name}) => name.length > 3
const toFlyingAnimals = ({name}) => ({
  name,
  canFly: name === "eagle",
})
const superAnimalFactory = (superiorAnimal, animal) => ({
  name: `${superiorAnimal.name} ${animal.name}`,
  canFly: superiorAnimal.canFly || animal.canFly,
})
const superAnimal = R.pipe(
  R.filter(smallNames),
  R.map(toFlyingAnimals),
  R.reduce(superAnimalFactory, {name: ""})
)(animals)

console.log(superAnimal)
//{ "name": " komodo dragon eagle", "canFly": true }
