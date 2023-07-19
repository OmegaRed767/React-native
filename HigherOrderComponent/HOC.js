import React, { Component } from 'react'
const HOC = (OldComponent) => {
    return class extends React.Component {
        constructor() {
            super()
            this.state = {
                details: {
                    name: "rocky",
                    age: 28,
                    number: 5559
                }
            }
        }
        render() {
            const { details } = this.state
            return (
                <OldComponent personalDetails={details} />
            )
        }
    }
}

export default HOC