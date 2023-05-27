import './index.css'

const Navbar = props => {
  const {score, seconds} = props

  return (
    <>
      <div className="navbar-content">
        <div className="logo-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </div>
        <ul className="scores-container">
          <li>
            <p className="scores-para">
              Score: <span className="score-num-styles">{score}</span>
            </p>
          </li>

          <li className="timer-container">
            <img
              className="timer-logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="score-num-styles">{seconds} sec</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
