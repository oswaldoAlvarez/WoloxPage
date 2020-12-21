import React, {useState, useEffect} from 'react';
import WrapperContentInformation from './content/WrapperContent';
import ComunHeader from './header/ComunHeader';
import LandingContent from './content/LandingContent';
import db from '../db.json';
// import axios from 'axios'

import '../styles/landingPage.scss';

const LandingPageContext = () => {
    const [value, setValue] = useState('')
    const [change, setChange] = useState('')
    const [data, setData] = useState([])

    let OrderedDatabase = db.zodiac_signs.sort(((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }))

    useEffect(() => {
        setData(OrderedDatabase)
    }, [OrderedDatabase])

    const searchingValue = (value) => {
        return function(x){
            return x.name.toLowerCase().includes(value) || !value;
        } 
    }

    let mappedList = data.filter(searchingValue(value)).map( (obj) => {
        return  <WrapperContentInformation 
                    change={change} 
                    signs={obj.name} 
                    description={obj.prediction} 
                    image={obj.image}
                />
    })

    /* ---> He intentado conectarme con la API para traer la información pero me tira (Unauthorized) <--- */

    // const [info, setInfo] = useState('')
    // const apiFetchInfo = async() => {
    //     let setEndpoint = 'http://localhost:3001/zodiac_signs'
    //     await axios.get(setEndpoint)
    //     .then(res => {
    //         const personas = res.data;
    //         setInfo(personas);
    //     })
    //     .catch((err) => {
    //         console.warn(err, 'A habido un error al consumir esta API')
    //     })
    // }
    // apiFetchInfo()
    // console.log(info)

    return (
        <div>
            <ComunHeader />
            <LandingContent 
                setValue={setValue}
                setChange={setChange}
                change={change}
                value={value}
                data={data}
                mappedList={mappedList}
            />
        </div>
    )
}

export default LandingPageContext
