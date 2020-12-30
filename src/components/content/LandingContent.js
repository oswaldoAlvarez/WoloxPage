import React from 'react';
import imgWolox from '../../assets/Img Hero/Ic_ilustra_Hero.png'

const LandingContent = () => {
    return (
        <div className='content-wrapper'>
            <div className='content-container'>
                <div className='content-container__title'>
                    <div className='title'>Bienvenido a tu <b>Entrevista Técnica</b> en <div className='wolox'><b>Wolox</b></div></div>
                </div>
                <div className='content-container__image'>
                    <img src={imgWolox}></img>
                </div>
            </div>
        </div>
    )
}

export default LandingContent
