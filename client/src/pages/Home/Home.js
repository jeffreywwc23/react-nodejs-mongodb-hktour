import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import BoxModel from '../../components/BoxModel/BoxModel';
import FeatureTours from '../../components/FeatureTours/FeatureTours';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Footer from '../../components/Footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <ImageGallery />
                <BoxModel />
                <FeatureTours />
                <Footer />
            </>
        );
    }
}

