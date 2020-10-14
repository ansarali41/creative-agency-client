import React from 'react';

const DashboardHeader = () => {
    return (
        <div className="row p-4">
            <div className="col-md-4">
                <h6>Login</h6>
            </div>
            <div className="col-md-4">
                <h6>Dashboard</h6>
            </div>
            <div className="col-md-4 text-right">
                <h6>User Name</h6>
            </div>
        </div>
    );
};

export default DashboardHeader;