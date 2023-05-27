import './index.css'

const EndGameScoreCard = props => {
  const {score, onResetGame} = props

  const onReset = () => {
    onResetGame()
  }

  return (
    <>
      <div className="scorecard-item-container">
        <div className="card-container">
          <img
            className="scorecard-image-item"
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
          />
          <p className="score-para">YOUR SCORE</p>
          <h1 className="score-para">{score}</h1>
          <button className="score-btn-img" type="button" onClick={onReset}>
            <img
              className="reset-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />{' '}
            PLAY AGAIN
          </button>
        </div>
      </div>
    </>
  )
}

export default EndGameScoreCard
