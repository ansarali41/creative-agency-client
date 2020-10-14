import React from 'react';
import { useForm } from "react-hook-form";
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="container">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4  dashboard-bg">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" className="form-control" placeholder="Your name/company's name" name="name" ref={register({ required: true })} />
                            {errors.name && <span className="text-danger">Name is required</span>} <br />

                            <input type="text" className="form-control" placeholder="Your email address" name="email" ref={register({ required: true })} />
                            {errors.email && <span className="text-danger">Email address is required</span>} <br />

                            <input type="text" className="form-control" placeholder="Project title" name="title" ref={register({ required: true })} />
                            {errors.title && <span className="text-danger">Project title is required</span>} <br />

                            <textarea className="form-control" placeholder="Project details" name="description" id="description" rows="3" />
                            {errors.description && <span className="text-danger">Project description is required</span>} <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Price" name="price" ref={register({ required: true })} />
                                    {errors.email && <span className="text-danger">price is required</span>} <br />
                                </div>
                                <div className="col-md-6 custom-file">
                                    <input type="file" className="custom-file-input" placeholder="upload project file" name="file" id="file" />
                                    <label className="custom-file-label" htmlFor="file">Choose file</label>
                                    <br />
                                </div>
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;