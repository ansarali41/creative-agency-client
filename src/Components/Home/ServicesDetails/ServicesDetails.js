import React from 'react';

const ServicesDetails = ({service}) => {
    const {title, description, image}=service;
    return (
        <div className="col-md-4 text-center">
            <div className="shadow p-5 mb-5 bg-white rounded">
                <img className="w-50 p-2" src={image} alt="" />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServicesDetails;