const character = {
	name: 'Лучник',
	type: 'Bowman',
	health: 50,
	level: 3,
	attack: 40,
	defence: 10,
	special: [
		{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон',
		},
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...',
			// <- обратите внимание, описание "засекречено"
		},
	],
};

// const attack = {
// 	id: 9,
// 	name: 'Нокаутирующий удар',
// 	icon: 'http://...',
// };

function distructions(objs) {
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

console.log(distructions(character));
