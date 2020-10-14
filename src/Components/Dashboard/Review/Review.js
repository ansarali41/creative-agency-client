import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div className="container">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 dashboard-bg">
                    <div className="col-md-6">
                        Review list upcoming....
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;