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
            this.setState({ info: response.data})
        })
    }
}
