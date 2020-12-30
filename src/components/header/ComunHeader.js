import React, { useState } from 'react'
import logo from '../../assets/logo_full_color.svg'
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";

const ComunHeader = () => {
    const [margin, setMargin] = useState(false)
    return ( 
        <div className='header-wrapper'>
            <img src={logo} className='header-img'></img>
            <div className='header-container'>
                <FontAwesomeIcon
                    className='iconHeader' 
                    icon={faAlignJustify} 
                    onClick={() => setMargin(margin === false ? true : false)}
                />
                <div className={ !!margin ? 'header-container__content left0' : 'header-container__content left200'}>
                    {/* <Link className='header-content' smooth to='#home'>Inicio</Link> */}
                    <Link className='header-content' smooth to='#aboutUs'>Conocenos</Link>
                    <Link className='header-content' smooth to='#benefits'>Beneficios</Link>
                    <Link className='header-content'to='/register'><div className='header-login'>Registrate</div></Link>
                </div>
            </div>
        </div>
    )
}

export default ComunHeader