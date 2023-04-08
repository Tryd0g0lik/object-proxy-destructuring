export default function distructions(objs) {
  const { ...datas } = objs;
  const heroes = [];
  for (const hero of datas.special) {
    if (!hero === false) {
      heroes.push(hero);
    } else if (!hero) {
      throw new Error(`Одно из св-в имеет значение "${hero}"`);
    }
  }
  return heroes;
}
