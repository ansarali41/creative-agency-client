import React from 'react';

const ServiceDetails = ({ service}) => {
    const {title , description,status} = service;

    let bgColor = '';
    let textColor = '';
    if(status === 'pending'){
        bgColor= '#FFE3E3';
        textColor = 'red'
    }
    else if(status === 'done'){
        bgColor = '#C6FFE0';
        textColor = 'green';
    }
    else if(status === 'on going'){
        bgColor = '#e7bb68';
        textColor = '#FFBD3E';
    }
    
    return (
        <div className="col-md-4 mb-3">
            <div className="shadow p-4 bg-white rounded">
                <div className="d-flex justify-content-between">
                    <div><img className="p-2" style={{ height: '80px', width: 'auto' }} src={`data:image/png;base64,${service.image.img}`} alt="" /></div>
                    <div>
                        <p style={{ background: `${bgColor}`, color: `${textColor}`}} className="px-3 py-1 round">{status}</p>
                    </div>
                </div>
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </div>
        
    );
};

export default ServiceDetails;