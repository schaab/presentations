function getCanadianSuperHeros(superHeros) {
  return superHeros
    .filter(hero => hero.isCanadian)
    .sort((hero1, hero2) => {
      if (hero1.name > hero2.name) {
        return 1
      }

      if (hero1.name < hero2.name) {
        return -1
      }

      return 0
    })
}
