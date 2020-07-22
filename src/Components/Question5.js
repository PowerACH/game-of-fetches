import React from 'react';
import Axios from 'axios';


export default class QuestionFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }

  
  componentDidMount() {
    Axios.get("http://www.anapioficeandfire.com/api/characters/901")
    .then(response => {
      this.setState({ info: response.data.aliases });
    })
    .catch(error => {
      console.log(error);
    });

  }
  render() {
    const { info } =this.state;
    return (

      <div>
        <h1> What is Robert Baratheon's second alias? </h1>
        <h3> Answer : {info[1]} </h3>
      </div>
    )
  }
}