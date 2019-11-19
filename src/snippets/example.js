function getCanadianSuperHeros(superHeros) {
  let canadianSuperHeros = []

  // For illustration purposes, let us ignore the fact that we
  // would likely filter before sorting
  superHeros.sort((hero1, hero2) => {
    if (hero1.name > hero2.name) {
      return 1
    }

    if (hero1.name < hero2.name) {
      return -1
    }

    return 0
  })

  for (const hero of superHeros) {
    if (hero.isCanadian) {
      canadianSuperHeros.push(hero)
    }
  }

  return canadianSuperHeros
}

test("given superheros it should return a sorted list of Canadian superheros", () => {
  const superheros = [
    {
      name: "Wolverine",
      isCanadian: true,
    },
    {
      name: "Captain Canuck",
      isCanadian: true,
    },
    {
      name: "Superman",
      isCanadian: false,
    },
  ]

  const expected = [
    {
      name: "Captain Canuck",
      isCanadian: true,
    },
    {
      name: "Wolverine",
      isCanadian: true,
    },
  ]

  const actual = getCanadianSuperHeros(superheros)

  expect(actual).toEqual(expected)
})
