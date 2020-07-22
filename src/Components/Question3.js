import React from 'react';
import Axios from 'axios';


export default class QuestionThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }

  
  componentDidMount() {
    Axios.get("http://www.anapioficeandfire.com/api/houses/229")
    .then(response => {
      this.setState({ info: response.data });
    })
    .catch(error => {
      console.log(error);
    });

  }
  render() {
    const { info } =this.state;
    return (

      <div>
        <h1> What's the coat of arms of House Lannister? </h1>
        <h3> Answer : {info.coatOfArms} </h3>
      </div>
    )
  }
}