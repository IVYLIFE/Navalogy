import { ICONS } from '../../assets'
import { useState } from 'react'
import './publication.css'

const Publication = (props) => {

    const [show, setShow] = useState(false)
    const rotateStyle = show ? { transform: 'rotate(180deg)' } : {};
    const { icon, publicationTitle, publicationDescription } = props


    return (
        <>
            <div className='publication' onClick={() => setShow(!show)}>
                <div className="iconContainer">
                    <img src={icon} alt="icon" className='publicationIcon' />
                </div>

                <div className='content' >
                    <div className='publicationTop'>
                        <div className='publicationTitle'>{publicationTitle}</div>
                        <img src={ICONS.chevronUnFilled} alt="chevron" className='chevron' style={rotateStyle} />
                    </div>

                    {show && 
                        <div 
                            className='publicationDescription' 
                            style={{ maxHeight: show ? '500px' : '0' }} >
                                <p>{publicationDescription}</p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Publication