import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateNumber = () => {
    const number = Math.ceil(Math.random() * 101)
    this.setState(() => ({randomNumber: number}))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="main-bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="number-counter">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
