import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]


beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    //если по годам сортировать
    // expect(newState[0]._id).toBe(0)
    // expect(newState[0].name).toBe('Кот')
    // expect(newState[0].age).toBe(3)
    // expect(newState[5]._id).toBe(1)
    // expect(newState[5].name).toBe('Александр')
    // expect(newState[5].age).toBe(66)

    const result = [1,3,4,5,2,0].filter((el,i)=> el===newState[i]._id)

    expect(result.length).toBe(newState.length)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    //если по годам сортировать
    // expect(newState[0]._id).toBe(1)
    // expect(newState[0].name).toBe('Александр')
    // expect(newState[0].age).toBe(66)
    // expect(newState[5]._id).toBe(0)
    // expect(newState[5].name).toBe('Кот')
    // expect(newState[5].age).toBe(3)

    const result = [0,2,5,4,3,1].filter((el,i)=> el===newState[i]._id)

    expect(result.length).toBe(newState.length)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    // expect(newState.length).toBe(4)
    // expect(newState[0]._id).toBe(1)
    // expect(newState[0].name).toBe('Александр')
    // expect(newState[0].age).toBe(66)
    // expect(newState[3]._id).toBe(5)
    // expect(newState[3].name).toBe('Ирина')
    // expect(newState[3].age).toBe(55)

    const result = [1,3,4,5].filter((el,i)=> el===newState[i]._id)

    expect(result.length).toBe(newState.length)

})
