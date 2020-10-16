import { faBox, faCartPlus, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [user, setUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/isAdmin/${user.email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if (data.length) {
                    setIsAdmin(data)
                }  
            });
    }, [user.email])

    // let history = useHistory();
    // let location = useLocation();

    // let { from } = location.state || { from: { pathname: "/serviceListAdmin" } };

    // const history = useHistory();
    // if (isAdmin) {
    //     history.push("/serviceListAdmin");
    //     // history.replace(from);

    // }
    // else {
    //     history.push("/order");
    // }

    

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-4" style={{ height: "100vh" }}>
            {
                isAdmin ?
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/serviceListAdmin" className="text-dark">
                                <FontAwesomeIcon icon={faBox} /> <span>Service list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-dark">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/makeAdmin" className="text-dark">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                    </ul>
                    :
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/order" className="text-dark">
                                <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/serviceList" className="text-dark">
                                <FontAwesomeIcon icon={faBox} /> <span>Service list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Review" className="text-dark">
                                <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                            </Link>
                        </li>
                    </ul>
            }
            <div>
            </div>
        </div>
    );
};

export default Sidebar;