import { classNames } from 'shared/lib/classNames/classNames';

describe('ClassNames', () => {
	test('Main class should be returned', () => {
		expect(classNames('mainClass')).toBe('mainClass');
	});

	test('Main and extra classes should be returned', () => {
		expect(classNames('mainClass', {}, ['extraClass1', 'extraClass2']))
			.toBe('mainClass extraClass1 extraClass2');
	});

	test('Main, extra and mods classes should be returned', () => {
		expect(classNames(
			'mainClass',
			{ hovered: true, selected: true },
			['extraClass1', 'extraClass2']
		))
			.toBe('mainClass extraClass1 extraClass2 hovered selected');
	});

	test('Mods false should return correctly', () => {
		expect(classNames(
			'mainClass',
			{ hovered: false, selected: true },
			['extraClass1', 'extraClass2']
		))
			.toBe('mainClass extraClass1 extraClass2 selected');
	});

	test('Mods undefined should return correctly', () => {
		expect(classNames(
			'mainClass',
			{ hovered: true, selected: undefined },
			['extraClass1', 'extraClass2']
		))
			.toBe('mainClass extraClass1 extraClass2 hovered');
	});
});
