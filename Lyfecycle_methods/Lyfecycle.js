import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
class Lyfecycle extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 90,
            num: 30
        }

        console.log("constructor")
    }

    static getDerivedStateFromProps(Pprops, Pstate) {
        console.log("getDerivedStateFromProps")
        return {
            // ...state,
            num: 20
        }

    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(p, s) {

        console.log("getSnapshotbeforupdate", p, s)
        return null
    }

    componentDidUpdate(pp, ps) {
        // this.setState({ count: this.state.count + 1 })
        console.log("componentDiUpdate", pp, ps)
        return ps.count
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {
        console.log("render")
        const { count, num } = this.state
        return (
            <View>
                <Text>Test lyfecycle methods</Text>
                <Text>{count}</Text>
                <Text>{num}</Text>
                <Button title="update" onPress={() => { this.setState({ count: this.state.count + 1 }) }} />
            </View>
        )
    }
}
export default Lyfecycle