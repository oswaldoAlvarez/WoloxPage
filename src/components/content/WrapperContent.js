import React from 'react'

const WrapperContentInformation = ({image, signs, description, change}) => {
    return (
        <div className={change === 'lista' ? 'information-wrapper widerDiv' : 'information-wrapper'}>
            <div className='information-content'>
                <div className='information-content__image'>
                    <img className='information-content__image-source' src={image}></img>
                </div>
                <div className='information-content__information'>
                    <div className='information-title'>{signs}</div>
                    <div className='information-description'>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default WrapperContentInformation;