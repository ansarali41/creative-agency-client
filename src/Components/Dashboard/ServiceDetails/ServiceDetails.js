import React from 'react';

const ServiceDetails = ({ service}) => {
    const {title , description} = service;
    return (
        <div className="col-md-4 mb-3">
            <div className="shadow p-4 bg-white rounded">
                <div className="d-flex justify-content-between">
                    <div><img className="p-2" style={{ height: '80px', width: 'auto' }} src={`data:image/png;base64,${service.image.img}`} alt="" /></div>
                    <div>
                        <p style={{ background: '#C6FFE0'}} className="text-success p-1 round">Done</p>
                    </div>
                </div>
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </div>
        
    );
};

export default ServiceDetails;