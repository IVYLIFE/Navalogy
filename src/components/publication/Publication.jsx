import { ICONS } from '../../assets'
import { useState } from 'react'
import './publication.css'

const Publication = ({ icon, publicationTitle, publicationSubTitle, publicationDescription, publicationLink, publicationDate }) => {

    const [show, setShow] = useState(false)
    const [winWidth, setWinWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWinWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const rotateStyle = show ? { transform: 'rotate(180deg)' } : {};


    return (
        <>
            <div className='publication' onClick={() => setShow(!show)}>

                {
                    winWidth >= 480 &&
                    <div className="iconContainer">
                        <img src={icon} alt="icon" className='publicationIcon' />
                    </div>
                }

                <div className='content' >
                    <div className='publicationTop'>
                        <div className="publicationDetails">
                            <div className='publicationTitle'>{publicationTitle}</div>
                            <div className="publicationSubTitle">
                                <span>{publicationSubTitle}</span>
                                {winWidth >= 480 && <span> | </span>}
                                <span>{publicationDate}</span>
                            </div>
                        </div>

                        <img src={ICONS.chevronUnFilled} alt="chevron" className='chevron' style={rotateStyle} />
                    </div>

                    {show &&
                        <div
                            className='publicationDescription'
                            style={{ maxHeight: show ? '500px' : '0' }} >
                            <p>
                                {publicationDescription}
                                <a href={publicationLink} target='_blank' rel="noreferrer">Read More</a>
                            </p>

                        </div>
                    }
                </div>

            </div>
        </>
    )
}

export default Publication