function getCanadianSuperHeros(superHeros) {
    let canadianSuperHeros = []
  
    for (const hero of superHeros) {
      if (hero.isCanadian) {
        canadianSuperHeros.push(hero)
      }
    }

    canadianSuperHeros.sort((hero1, hero2) => {
        if (hero1.name > hero2.name) {
          return 1
        }
    
        if (hero1.name < hero2.name) {
          return -1
        }
    
        return 0
      })

    return canadianSuperHeros
  }