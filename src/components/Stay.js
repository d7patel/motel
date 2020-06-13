import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

class Stay extends Component {
  

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>In House List</BreadcrumbItem>
                    </Breadcrumb>               
                </div>
                <hr />

            <div className="row">
                <h3>Stay over</h3>
            </div>
            </div>
        )
    }
}

export default Stay
