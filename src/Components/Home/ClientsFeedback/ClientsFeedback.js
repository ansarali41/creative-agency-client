import React from 'react';
import ClientsFeedbackCard from '../ClientsFeedbackCard/ClientsFeedbackCard';
const clientsFeedbackData = [
    {
        name: 'Nash Patrik',
        image: 'https://i.ibb.co/nRDPSmz/customer-1.png',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eum sed architecto.'
    },
    {
        name: 'Miriam Barron',
        image: 'https://i.ibb.co/mcbRK3Y/customer-2.png',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eum sed architecto.'
    },
    {
        name: 'Bria Malone',
        image: 'https://i.ibb.co/nDh8VYP/customer-3.png',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eum sed architecto.'
    }
]

const ClientsFeedback = () => {
    return (
        <div className="container my-5">
            <h3 className="py-5 text-center">Clients <span className="text-light-green">Feedback</span></h3>
            <div className="m-2">
                <div className="row">
                    {
                        clientsFeedbackData.map((feedback, i) => <ClientsFeedbackCard feedback={feedback} key={i}></ClientsFeedbackCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ClientsFeedback;