
import React from 'react';
import axios from 'axios';
const BASE_URL = "http://anapioficeandfire.com/api/characters/16";


class QuestionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }
  componentDidMount() {
    axios.get(BASE_URL)
      .then(res => this.setState({ info: res.data.results }))
      .catch(e => console.error(e.message));
  }
  render() {
    return (
      <div>
        <h1>1. Where was Margaery Tyrell born?</h1>
        {
          this.state.info.map(born => {
            console.log(born);
            return (
              <div className="answerOne">
                <h1>{ born.born }</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default QuestionOne;