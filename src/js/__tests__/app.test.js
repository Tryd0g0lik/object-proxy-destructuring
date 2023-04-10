import app from '../app';

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
		},
		{
			id: 10,
			icon: 'http://...',
		},
		{
			id: 11,
		},
		{
			name: 'Нокаутирующий удар',
			icon: 'http://...',
		},
  ],
};
describe('test', () => {
	test('id 8', () => {
		expect(app(character)[0]).toEqual({
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон',
		});
	});
	test('id 9', () => {
		expect(app(character)[1]).toEqual({
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...',
			description: 'Описание недоступно',
		});
	});
	test('id 10', () => {
		expect(app(character)[2]).toEqual({
			id: 10,
			name: null,
			icon: 'http://...',
			description: 'Описание недоступно',
		});
	});
	test('id 11', () => {
		expect(app(character)[3]).toEqual({
			id: 11,
			name: null,
			icon: null,
			description: 'Описание недоступно',
		});
	});
	test('id 99999', () => {
		expect(app(character)[4]).toEqual(
			{
				id: 99999,
				name: 'Нокаутирующий удар',
				icon: 'http://...',
				description: 'Описание недоступно',
			});
	});
});
// }
