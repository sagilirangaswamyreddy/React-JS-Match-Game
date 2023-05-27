import {Component} from 'react'
import TabItem from '../TabItem'
import ImageItems from '../ImageItems'
import EndGameScoreCard from '../EndGameScoreCard'
import Navbar from '../Navbar'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    activeTabId: '',
    imagesList: [],
    imgURL: '',
    imgId: '',
    isGameEnded: false,
    seconds: 60,
  }

  componentDidMount() {
    const {tabsList, imagesList} = this.props
    const {isGameEnded} = this.state

    if (isGameEnded === true) {
      clearInterval(this.timerID)
    } else {
      this.timerID = setInterval(this.tick, 1000)
    }

    this.setState({activeTabId: tabsList[0].tabId})
    this.setState({imgURL: imagesList[0].imageUrl})
    this.setState({imgId: imagesList[0].id})
    this.setState({imagesList: [...imagesList]})
  }

  tick = () => {
    const {seconds, isGameEnded} = this.state
    if (seconds > 0) {
      this.setState({seconds: seconds - 1})
    } else {
      clearInterval(this.timerID)
      this.setState({isGameEnded: true})
    }
    if (isGameEnded === true) {
      clearInterval(this.timerID)
    }
    console.log(seconds)
  }

  getFilteredImages = () => {
    const {activeTabId, imagesList} = this.state
    const filteredProjects = imagesList.filter(
      eachProjectDetails => eachProjectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  onClickedOnThumbnailImage = id => {
    const {imgId, imagesList} = this.state
    if (id === imgId) {
      const randomImageDetails =
        imagesList[Math.floor(Math.random() * imagesList.length)]
      this.setState({imgURL: randomImageDetails.imageUrl})
      this.setState({imgId: randomImageDetails.id})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({isGameEnded: true})
    }
  }

  onResetGame = () => {
    this.setState({score: 0})
    this.setState({seconds: 60})
    this.setState({isGameEnded: false})
    this.timerID = setInterval(this.tick, 1000)
  }

  render() {
    const filteredImages = this.getFilteredImages()
    const {score, activeTabId, imgURL, imgId, isGameEnded, seconds} = this.state
    const {tabsList} = this.props
    console.log(imgId)
    console.log(isGameEnded)
    const returnedValue = isGameEnded ? (
      <EndGameScoreCard score={score} onResetGame={this.onResetGame} />
    ) : (
      <div className="images-and-tabs-and-thumbnails-container">
        <div className="img-display-container">
          <img className="match-img-styles" src={imgURL} alt="match" />
        </div>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              updateActiveTabId={this.updateActiveTabId}
              tabDetails={tabDetails}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="images-list-container">
          {filteredImages.map(imageDetails => (
            <ImageItems
              key={imageDetails.id}
              imageDetails={imageDetails}
              onClickedOnThumbnailImage={this.onClickedOnThumbnailImage}
            />
          ))}
        </ul>
      </div>
    )
    return (
      <div className="bg-container">
        <Navbar score={score} seconds={seconds} />

        {returnedValue}
      </div>
    )
  }
}
export default MatchGame
