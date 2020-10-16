import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDetails.css'

const ServicesDetails = ({service}) => {
    const {title, description }=service;
    
    return (
        <div className="col-md-4 text-center">
            <Link to='/dashboard' className="service-link">
                <div className="shadow p-5 mb-5 bg-white rounded">
                    <img className="w-50 p-2" src={`data:image/png;base64,${service.image.img}`} alt="" />
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServicesDetails;