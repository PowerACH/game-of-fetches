import React from 'react';
import Axios from 'axios';

export default class QuestionFour extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        info: [],
      }
    }
  
    
    componentDidMount() {
      Axios.get("http://www.anapioficeandfire.com/api/houses/17")
      .then(response => {
        this.setState({ info: response.data.seats });
      })
      .catch(error => {
        console.log(error);
      });
  
    }
    render() {
      const { info } =this.state;
      return (
  
        <div>
          <h1> What is the second seat of House of Baratheon? </h1>
          <h3> Answer : {info[1]} </h3>
        </div>
      )
    }
  }