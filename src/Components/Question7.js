import React from 'react';
import Axios from 'axios';

export default class QuestionSeven extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
    }

    componentDidMount() {
        Axios.get("http://www.anapioficeandfire.com/api/characters/232")
        .then((response => {
           return ( Axios.get(response.data.povBooks));
            
        })).catch(error => {
            console.log(error);
        })
    }

    render() {
        const { info } = this.state;
        return (
            <div>
                <h1>What are the titles of Catelyn Starks three POV books?</h1>
                <h3>Answer: { info } </h3>
            </div>
        )
    }
}