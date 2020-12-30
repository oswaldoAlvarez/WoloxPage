import React from 'react';
import hourWolox from '../../assets/Ic_Hour.svg'; 
import homeWolox from '../../assets/Ic_HomeOffice.svg'; 
import workshopsWolox from '../../assets/Ic_Workshops.svg';
import snacksWolox from '../../assets/Ic_DrinkSnacks.svg';
import laptopWolox from '../../assets/Ic_laptop.svg';
import brainWolox from '../../assets/Ic_brain.svg';

const LandingInfo = () => {
    return (
        <div className='info-wrapper' id='benefits'>
            <div className='info-container'>
                <div className='info-container__title'>Entre los beneficios que ofrecemos se encuentran <span className='wolox'>;)</span></div>
                <div className='info-container__image-wrapper'>
                    <div className='info-container__image-content'>
                        <img className='info-image' src={hourWolox}></img>
                        <div className='info-description'>Flexibilidad Horaria</div>
                    </div>
                    <div className='info-container__image-content'>
                        <img className='info-image' src={homeWolox}></img>
                        <div className='info-description'>Home Office</div>
                    </div>
                    <div className='info-container__image-content'>
                        <img className='info-image' src={workshopsWolox}></img>
                        <div className='info-description'>Capacitaciones y workshops</div>
                    </div>
                    <div className='info-container__image-content'>
                        <img className='info-image' src={snacksWolox}></img>
                        <div className='info-description'>Snacks, frutas y bebidas gratis</div>
                    </div>
                    <div className='info-container__image-content'>
                        <img className='info-image' src={laptopWolox}></img>
                        <div className='info-description'>Semana Remota</div>
                    </div>
                    <div className='info-container__image-content'>
                        <img className='info-image' src={brainWolox}></img>
                        <div className='info-description'>Trabajar en ultimas tecnologías</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingInfo
