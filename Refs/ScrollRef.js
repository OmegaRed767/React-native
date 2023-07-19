import React, { Component, useState, useEffect } from 'react'
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native'

const ScrollRef = () => {
    let myRef = React.useRef()
    const [pos, setPos] = useState(0)
    useEffect(() => {
        myRef.current.scrollTo({
            y: pos
        })
    }, [pos])
    return (
        <View>
            <ScrollView ref={myRef}>
                <View style={{ backgroundColor: "steelblue", width: "100%", height: 300 }} />
                <View style={{ backgroundColor: "skyblue", width: "100%", height: 300 }} />
                <View style={{ backgroundColor: "powderblue", width: "100%", height: 300 }} />
                <TouchableOpacity onPress={() => {
                    myRef.current.scrollTo({
                        x: 0
                    })
                }}>
                    <View onLayout={
                        (e) => {
                            const { width, height, x, y } = e.nativeEvent.layout
                            console.log(x, y)
                            setPos(y)
                        }
                    } style={{ backgroundColor: "orange", width: "100%", height: 300 }} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default ScrollRef