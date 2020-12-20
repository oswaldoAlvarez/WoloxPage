import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingContent = ({setChange, setValue, change, data, value, mappedList}) => {
    return (
        <div className='content-wrapper'>
            <div className='content-container'>
                <div className='content-title'>Visualiza tu Horóscopo Hoy!</div>
                {data ? 
                    <div className={change === 'lista' ? 'content-search widthList' : 'content-search'}>
                        <div className='content-search__wrapper-select'>
                            Ver como:
                            <select
                                className='content-search__select'
                                value={change}
                                onChange={e => setChange(e.target.value)}
                            >
                                <option className='content-search__select-option' value="grilla">Grilla</option>
                                <option className='content-search__select-option' value="lista">Lista</option>
                            </select>
                        </div>
                        <div className='content-search__wrapper-input'>
                            <FontAwesomeIcon className='content-search__img' icon={faSearch} />
                            <input
                                className='content-search__input'
                                type='text'
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                        </div>
                    </div>
                    : 
                    ''
                }
                <div className={change === 'lista' ? 'content-information listaStyle' : 'content-information'}>
                    {data ? 
                        mappedList
                        :
                        <h1>No existen datos que mostrar</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingContent
