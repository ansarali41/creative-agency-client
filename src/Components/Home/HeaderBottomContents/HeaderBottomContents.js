import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const HeaderBottomContents = () => {
    return (
        <section className="d-flex container text-center mb-5 pb-5">
            <div>
                <img className="w-50 " src={slack} alt=""/>
            </div>
            <div>
                <img className="w-50 " src={google} alt="" />
            </div>
            <div>
                <img className="w-50 " src={uber} alt="" />
            </div>
            <div>
                <img className="w-50 " src={netflix} alt="" />
            </div>
            <div>
                <img className="w-50 " src={airbnb} alt="" />
            </div>
        </section>
    );
};

export default HeaderBottomContents;