function sortByHeroNameAsc(hero1, hero2) {
  if (hero1.name > hero2.name) {
    return 1
  }

  if (hero1.name < hero2.name) {
    return -1
  }

  return 0
}

function isCanadian(hero) {
  return hero.isCanadian
}

function getCanadianSuperHeros(superHeros) {
  return superHeros.sort(sortByHeroNameAsc).filter(onlyCanadians)
}


test('given two heros it should return 1 when hero 1 is before hero 2', () => {
    const expected = 1;

    const hero1 = { name: 'a'};
    const hero2 = { name: 'b'}
    const actual = sortByHeroNameAsc(hero1, hero2);

    expect(actual).toEqual(expected);
})

test('given a hero it should return if they are Canadian or not', () => {
    const expected = true;

    const hero = { isCanadian: true };
    const actual = isCanadian(hero);

    expect(actual).toEqual(true);
});