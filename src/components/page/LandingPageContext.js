import React from 'react';
import ComunHeader from '../header/ComunHeader';
import LandingContent from '../content/LandingContent';
import LandingContactUs from '../content/LandingContactUs';
import LandingInfo from '../content/LandingInfo';
import LandingEnding from '../content/LandingEnding';
import ComunFooter from '../footer/ComunFooter';

import '../../styles/landingPage.scss';

const LandingPageContext = () => {
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
