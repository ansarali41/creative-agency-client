import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    return (
        <div className="container">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 dashboard-bg">
                    <div className="col-md-6">
                        this is service list upcoming....
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;