import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingRegister = () => {
    const [info, setInfo] = useState({ name: '', lastName: '', email: '', terms: ''})
    const { techInfo } = useSelector((state) => state.front);

    const handleChange = (event) => {
        const {value, name} = event.target
        setInfo({...info, [name]: value })
    }

    console.log(info)

    return (
        <div className='register-wrapper'>
            <div className='register-container'>
                <div className='register-content'>
                    <div className='register-form'>
                        <span className='register-title'>Por favor ingresa los siguientes datos del Registro:</span>
                        <div className='label-container'>
                            <label className='label-content'>
                                <p className='label-title'>Ingresa tu nombre:</p>
                                <input
                                    className='input'
                                    name='nombre'
                                    type='text'
                                    placeholder='Ingresar nombre'
                                    required
                                />
                            </label>
                            <label className='label-content'>
                                <p className='label-title'>Ingresa tu apellido:</p>
                                <input
                                    className='input'
                                    name='apellido'
                                    type='text'
                                    placeholder='Ingresar apellido'
                                    required
                                    onChange={handleChange}
                                />
                            </label>
                            <label className='label-content'>
                                <p className='label-title'>Ingresa tu mail:</p>
                                <input
                                    className='input'
                                    name='email'
                                    type='text'
                                    placeholder='Ingresar mail'
                                    required
                                />
                            </label>
                            <label className='label-content'>
                                <p className='label-title'>En que posición te desempeñas?:</p>
                                <select className='input'>
                                    <option value="BackEnd">Back-End</option>
                                    <option value="FrontEnd">Front-End</option>
                                    <option selected value="Mobile">Mobile</option>
                                </select>
                            </label>
                            <label className='label-content'>
                                <p className='label-title'>Que lenguaje manejas?:</p>
                                <select className='input'>
                                    {techInfo ? 
                                        techInfo.map((el) => {
                                            return <option value={el.language}>{el.language}</option>
                                        })
                                        : 
                                        ''
                                    }
                                </select>
                            </label>
                            <label className='label-content'>
                                <p className='label-title'>Selecciona tu tecnología principal:</p>
                                <select className='input'>
                                    {techInfo ? 
                                        techInfo.map((el) => {
                                            return <option value={el.tech}>{el.tech}</option>
                                        })
                                        : 
                                        ''
                                    }
                                </select>
                            </label>
                            <label className='label-checkbox'>
                                <p>Leer <a href='https://www.wolox.com.ar/policies/Privacy_Policy.pdf' target="_blank">términos y condiciones</a></p>
                                <input
                                    className='input'
                                    name='checkbox'
                                    type='checkbox'
                                    required
                                />
                            </label>
                        </div>   
                        <input className='register-btn' type="submit" value="Submit" />
                    </div>
                </div>
                <Link className='register-return' to='/'>
                    <div className='registerToLanding'>
                        <FontAwesomeIcon className='iconReturn' icon={faArrowAltCircleLeft} />       
                        retornar al home
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default LandingRegister