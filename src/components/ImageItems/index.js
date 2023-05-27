import './index.css'

const ImageItems = props => {
  const {imageDetails, onClickedOnThumbnailImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onImageClicked = () => {
    onClickedOnThumbnailImage(id)
  }
  return (
    <>
      <li className="image-item-container">
        <button className="btn-img" type="button" onClick={onImageClicked}>
          <img className="image-item" src={thumbnailUrl} alt="thumbnail" />
        </button>
      </li>
    </>
  )
}

export default ImageItems
