export default function distructions(objs) {
  const { ...datas } = objs;
  const heroes = [];
	for (const hero of datas.special) {
		const { id, name, icon, description } = hero;
		const newId = (!id === false) ? id : 99999;
		const newName = (!name === false) ? name : null;
		const newIcon = (!icon === false) ? icon : null;
		const newDescription = (!description === false) ? description : 'Описание недоступно';

		heroes.push({
			id: newId,
			name: newName,
			icon: newIcon,
			description: newDescription,
		});
	}

	return heroes;
}

// const character = {
// 	name: 'Лучник',
// 	type: 'Bowman',
// 	health: 50,
// 	level: 3,
// 	attack: 40,
// 	defence: 10,
// 	special: [
// 		{
// 			id: 8,
// 			name: 'Двойной выстрел',
// 			icon: 'http://...',
// 			description: 'Двойной выстрел наносит двойной урон',
// 		},
// 		{
// 			id: 9,
// 			name: 'Нокаутирующий удар',
// 			icon: 'http://...',
// 		},
// 		{
// 			id: 10,
// 			icon: 'http://...',
// 		},
// 		{
// 			id: 11,
// 		},
// 		{
// 			name: 'Нокаутирующий удар',
// 			icon: 'http://...',
// 		},
// 	],
// };

// console.log(distructions(character));
