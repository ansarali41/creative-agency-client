import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import DemoWorksCarousel from '../DemoWorksCarousel/DemoWorksCarousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderBottomContents from '../HeaderBottomContents/HeaderBottomContents';
import ProvideServices from '../ProvideServices/ProvideServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderBottomContents></HeaderBottomContents>
            <ProvideServices></ProvideServices>
            <DemoWorksCarousel></DemoWorksCarousel>
            <ClientsFeedback></ClientsFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;