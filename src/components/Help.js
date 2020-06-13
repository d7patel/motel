import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

class Help extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Help</BreadcrumbItem>
                    </Breadcrumb>               
                </div>
                <hr />

            <div className="row">
                <h3>Help</h3>
            </div>
            </div>
        )
    }
}

export default Help
