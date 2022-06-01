import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HEADS_IMG_URL, headsCount: 0, tailsCount: 0}

  onTossChange = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {headsCount, tailsCount, tossResultImage} = this.state
    const totalCount = tailsCount + headsCount

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="descriptive">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="toss-image" />
          <button
            className="custom-button"
            type="button"
            onClick={this.onTossChange}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="result-display">Total:{totalCount}</p>
            <p className="result-display">Heads:{headsCount}</p>
            <p className="result-display">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
