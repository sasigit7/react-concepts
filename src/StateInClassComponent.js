import React, {Component} from "react";

class StateInClassComponent extends Component {
    // Two ways you can use state as 
    // 1. As an object
    // state = {
    //     name: "I am A State In Class Component!"    
    // };

    // 2. Using constructor - popular way 
    constructor(props) {
        super(props);
        this.state = {
            title: "I am a State in class component!"
        }
    }

    render() {
        return(
            <h2>{this.state.title}</h2>
        );
    }
}

export default StateInClassComponent;