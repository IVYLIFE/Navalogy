import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ICONS } from '../../../assets'

const Bubble = (props) => {

  const { style, id } = props

  return (
    <LazyLoadImage
      id={id}
      src={ICONS.bubble}
      alt="bubble"
      style={style}
    />

  )
}

export default Bubble