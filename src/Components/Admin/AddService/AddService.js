import React from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    return (
        <section className="container">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4  dashboard-bg">
                    <div className="col-md-6">
                        <h4>add service</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;