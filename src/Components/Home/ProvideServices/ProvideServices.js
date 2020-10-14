import React from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
const servicesData = [
    {
        id: 1,
        title: 'Web & Mobile design',
        description: 'we craft stunning and amazing we UI, using a wee drafted UX to fit your product',
        image: 'https://i.ibb.co/QHTwKLg/service1.png'
    },
    {
        id: 2,
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out',
        image: 'https://i.ibb.co/PTbcQLq/service2.png'
    },
    {
        id: 3,
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        image: 'https://i.ibb.co/wCY0QPq/service3.png'
    }
]

const ProvideServices = () => {
    return (
        <section className="container mt-5 text-center">
            <h2>Provide awesome <span style={{ color: '#7AB259'}}>Services</span></h2>
            <div className="mt-5">
                <div className="row">
                    {
                        servicesData.map(service => <ServicesDetails service={service} key={service.id}></ServicesDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ProvideServices;