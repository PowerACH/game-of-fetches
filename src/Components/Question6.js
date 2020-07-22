import React from 'react';
import Axios from 'axios';

export default class QuestionSix extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
    }

    componentDidMount() {
        Axios.get("http://www.anapioficeandfire.com/api/houses/362")
        .then(response => {
            this.setState({ get: response.data.founder})
        })
        .then(res => {
            this.setState({ info: res.data.})
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        const { info } = this.state;
        return (
            <div>
                <h1>What is the name of the founder of House of Stark?</h1>
                <h3>Answer: { info } </h3>
            </div>
        )
    }
}
