import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const ServiceListAdmin = () => {
    const [allServiceList, setAllServiceList] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allService')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setAllServiceList(data);
        })
    },[])
    return (
        <section className="container">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4  dashboard-bg">
                    <div className="col-md-6">
                        <h4>all Service List ... admin</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceListAdmin;