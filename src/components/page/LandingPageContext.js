import React, { useEffect } from 'react';
import ComunHeader from '../header/ComunHeader';
import LandingContent from '../content/LandingContent';
import LandingContactUs from '../content/LandingContactUs';
import LandingInfo from '../content/LandingInfo';
import LandingEnding from '../content/LandingEnding';
import ComunFooter from '../footer/ComunFooter';
import axios from 'axios';
import { useDispatch } from "react-redux";
import {urlAllTechs} from '../../endpoints/Endpoints'

import '../../styles/landingPage.scss';

const LandingPageContext = () => {
    const dispatch = useDispatch();

    const apiFetchInfo = async() => {
        let setEndpoint = urlAllTechs;
        await axios.get(setEndpoint)
        .then(res => {
            const personas = res.data;
            dispatch({ type: "SET_TECH_INFO", payload: personas });
        })
        .catch((err) => {
            console.warn(err, 'A habido un error al consumir esta API')
        })
    }

    useEffect(() => {
        apiFetchInfo()
    }, [])

    return (
        <div className='landingPage-wrapper'>
            <ComunHeader />
            <LandingContent />
            <LandingContactUs />
            <LandingInfo />
            <LandingEnding />
            <ComunFooter />
        </div>
    )
}

export default LandingPageContext
