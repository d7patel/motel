import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

class CheckOut extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Check Out List</BreadcrumbItem>
                    </Breadcrumb>               
                </div>
                <hr />

            <div className="row">
                <h3>Check Out</h3>
            </div>
            </div>
        )
    }
}

export default CheckOut
