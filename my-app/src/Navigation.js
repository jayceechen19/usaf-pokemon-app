import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
 
const Navigation = () => {
    return (
       <div>
            <NavLink to="/home">
                <Button variant = "primary">Home</Button>
            </NavLink>
            <NavLink to="/viewall">
                <Button variant = "primary"> View All</Button>
            </NavLink>
            <NavLink to="/mycollection">
                <Button variant = "primary">My Collection</Button>
            </NavLink>
            <NavLink to="/battle">
                <Button variant = "primary">Battle</Button>
            </NavLink>
            <NavLink to="/groceries">
                <Button variant = "primary">Groceries</Button>
            </NavLink>
           
       </div>
    );
}

export default Navigation; 