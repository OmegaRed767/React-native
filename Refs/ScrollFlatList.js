import React, { Component, useState } from 'react'
import { Text, Button, View, FlatList, TouchableOpacity } from 'react-native'

const ScrollFlatList = () => {
    const myRef = React.useRef()

    const [data, setData] = useState(new Array(30).fill(0))

    const handleScroll = (i) => {
        myRef.current.scrollToIndex({
            index: i
        })
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => handleScroll(index)} style={{ fontSize: 20, margin: 5, width: "100%", height: 60, backgroundColor: "maroon" }}>
                <Text style={{ textAlign: "center" }}>{index}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <View style={{ flex: 1 }} />
            <FlatList
                ref={myRef}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}
export default ScrollFlatList