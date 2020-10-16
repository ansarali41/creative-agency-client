import React, { useEffect, useState } from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const ProvideServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/loadServices')
        .then(response => response.json())
        .then(result => {
            setAllServices(result);
        })
    },[])

    return (
        <section className="container mt-5 text-center">
            <h2>Provide awesome <span style={{ color: '#7AB259'}}>Services</span></h2>
            <div className="mt-5">
                <div className="row">
                    {
                        allServices.map(service => <ServicesDetails service={service} key={service._id}></ServicesDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ProvideServices;