import React from 'react';

const AllServiceListDetails = ({ serviceList}) => {
    const{name, title, description,email,status} = serviceList;
    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{status}</td>
        </tr>
    );
};

export default AllServiceListDetails;