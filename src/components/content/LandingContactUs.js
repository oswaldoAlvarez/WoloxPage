import React from 'react';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingContactUs = () => {
    return (
        <div className='contactUs-wrapper' id='aboutUs'>
            <div className='contactUs-container'>
                <div className='contactUs-container__titleOne'>
                    <div className='contactUs-titleOne'>
                        <span className='wolox-green'>
                            <b>350 +</b>
                        </span>
                        <span className='wolox-blue'>
                            <b>Woloxers</b>
                        </span>
                    </div>
                    <div className='contactUs-Wolox'>
                        <FontAwesomeIcon className='iconTwitter' icon={faTwitter} />
                        <span>@Wolox</span>
                    </div>
                    <a target="_blank" href='https://twitter.com/Wolox'><div className='contactUs-btn'>Siguenos</div></a>
                </div>
                <div className='contactUs-container__titleTwo'>
                    <div className='contactUs-titleTwo'>
                        Trabajamos para  
                        <span className='wolox-blue'>
                            <b> convertir </b>
                        </span>
                        <span className='wolox-green'>
                            <b>ideas </b>
                        </span>
                         en productos
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingContactUs