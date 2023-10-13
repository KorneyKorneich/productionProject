import { classNames } from './classNames'

describe('classNames', () => {
    test('main class only', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with additional class', () => {
        expect(classNames('someClass', {}, ['additional'])).toBe('someClass additional')
    })
    test('with mods', () => {
        expect(classNames('someClass', { red: true, green: true })).toBe('someClass red green')
    })
    test('with modes undefined', () => {
        expect(classNames('someClass', { red: true, green: undefined })).toBe('someClass red')
    })
})
