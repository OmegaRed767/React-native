import React, { Component, useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

const Debounce = () => {
    const [data, setData] = useState("")

    const Deb = (func) => {
        let timer

        return () => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                func()
            }, 800)
        }
    }

    const fetchApi = React.useCallback(
        Deb(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => console.log(json))
        }), [])

    const handleData = (txt) => {
        setData(txt)
        fetchApi()
    }

    return (
        <View>
            <Text>search</Text><TextInput value={data} onChangeText={handleData} />
        </View>
    )
}
export default Debounce

//refd