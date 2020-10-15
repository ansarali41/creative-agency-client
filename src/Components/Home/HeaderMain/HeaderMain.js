import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{ height: '550px' }} className="row d-flex align-items-center w-100 mb-4">
            <div className="col-md-4 offset-md-1">
                <h1 className="brand-text font-weight-bold">Let's Grow Your <br/> Brand To The Next Level</h1>
                <p className="brand-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et, inventore veritatis aut aperiam deleniti!</p>
                <Link to="/order"><button className="btn btn-dark p-2 w-50">Hire us</button></Link>
            </div>
            <div className="col-md-6">
                <img src="https://i.ibb.co/dkwfYrs/Frame.png" alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;