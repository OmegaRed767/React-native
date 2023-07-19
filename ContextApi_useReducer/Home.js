import React, { Component, createContext, useReducer } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import Function_Child from './Function_Child'
import Class_Child from './Class_Child'
export const User = createContext()
const initialState = {
    title: "tasks",
    arr: ["keep going"],
    done: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        case "del":
            return {
                ...state,
                arr: state.arr.filter(val => val !== action.payload),
                done: [...state.done, action.payload]
            }
        case "reset":
            return {
                ...state,
                arr: [],
                done: []
            }
        default:
            return state
    }
}
const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const obj = {
        info: state,
        addData: (data) => dispatch(data),
        delData: (data) => dispatch(data),
        resetData: (data) => dispatch(data)
    }


    return (
        <View>
            <User.Provider value={obj}>
                <Text>Main Component</Text>
                <Class_Child />
            </User.Provider>
        </View>
    )
}

export default Home 