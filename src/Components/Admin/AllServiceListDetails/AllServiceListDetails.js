import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'pending', 'done', 'on going'
];

const AllServiceListDetails = ({ serviceList}) => {
    const{name, title, description,email,status,_id} = serviceList;

    const handleStatus = (status) =>{
        const serviceStatus = status.value;
        const statusValue = {serviceStatus};

        fetch(`https://fathomless-tundra-06496.herokuapp.com/updateStatus/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(statusValue)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(result);
                }
            })
    }

    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td><Dropdown options={options} onChange={handleStatus} value={`${status}`} placeholder={`${status}`} /></td>    
        </tr>
    );
};

export default AllServiceListDetails;