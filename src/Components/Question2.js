
import React from 'react';
import Axios from 'axios';


export default class QuestionTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }

  
  componentDidMount() {
    Axios.get("http://www.anapioficeandfire.com/api/houses/378")
    .then(response => {
      this.setState({ info: response.data.region });
    })
    .catch(error => {
      console.log(error);
    });

  }
  render() {
    const { info } =this.state;
    return (

      <div>
        <h1>What region is House Targaryen in? </h1>
        <h3> Answer : {info} </h3>
      </div>
    )
  }
}