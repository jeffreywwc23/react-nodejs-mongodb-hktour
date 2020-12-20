import React, { Component } from 'react';

import ContactUs from '../../components/ContactUs/ContactUs';
import Services from '../../components/Services/Services';
import AboutUsCards from '../../components/AboutUsCards/AboutUsCards';
import Footer from '../../components/Footer/Footer';


export class AboutUs extends Component {
    render() {
        return (
            <>
                <AboutUsCards />
                <Services />
                <ContactUs />
                <Footer />
            </>
        )
    }
}

export default AboutUs;
