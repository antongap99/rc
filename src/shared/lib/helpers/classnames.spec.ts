import {classNames} from "./ClassNames";

describe('classnames', () => {
	test('with only one param', () => {
	  expect(classNames('sameClass')).toBe('sameClass');
	});

	test('with additional classes', () => {
		const expected = 'sameClass 123 string'
		expect(classNames('sameClass', {}, ['123', 'string'])).toBe(expected);
	});

	test('with mods true/false', () => {
		const expected = 'sameClass hover focus'
		expect(classNames('sameClass', {hover: true, focus: true, blur: false})).toBe(expected);
	});

	test('with mods only true', () => {
		const expected = 'sameClass hover focus blur'
		expect(classNames('sameClass', {hover: true, focus: true, blur: true})).toBe(expected);
	});

	test('with mods and additional', () => {
		const expected = 'sameClass hover focus blur 123 string'
		expect(classNames('sameClass', {hover: true, focus: true, blur: true}, ['123', 'string'])).toBe(expected);
	});
});