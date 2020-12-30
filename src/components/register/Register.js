import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const LandingRegister = () => {
    const { techInfo } = useSelector((state) => state.front);
    console.log(techInfo)

    return (
        <div className='register-wrapper'>
            <div className='register-container'>
                <div className='register-content'>
                    <form className='register-form'>
                        <span>Por favor ingresa los siguientes datos del Registro:</span>
                        <label>
                            Ingresa tu nombre:
                            <input
                                name='nombre'
                                type='text'
                                placeholder='Ingresar nombre'
                                required
                            />
                        </label>
                        <label>
                            Ingresa tu apellido:
                            <input
                                name='apellido'
                                type='text'
                                placeholder='Ingresar apellido'
                                required
                            />
                        </label>
                        <label>
                            Ingresa tu mail:
                            <input
                                name='email'
                                type='text'
                                placeholder='Ingresar mail'
                                required
                            />
                        </label>
                        <label>
                            En que posición te desempeñas?:
                            <select>
                                {techInfo ? 
                                    techInfo.map((el) => {
                                        return <option value={el.type}>{el.type}</option>
                                    })
                                    : 
                                    ''
                                }
                            </select>
                        </label>
                        <label>
                            Que lenguaje manejas?:
                            <select>
                                {techInfo ? 
                                    techInfo.map((el) => {
                                        return <option value={el.language}>{el.language}</option>
                                    })
                                    : 
                                    ''
                                }
                            </select>
                        </label>
                        <label>
                            Selecciona tu tecnología principal:
                            <select>
                                {techInfo ? 
                                    techInfo.map((el) => {
                                        return <option value={el.tech}>{el.tech}</option>
                                    })
                                    : 
                                    ''
                                }
                            </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <Link className='header-content' to='/'>retornar al home</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingRegister