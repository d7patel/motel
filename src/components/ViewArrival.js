import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function Reservation ({reservation, onClick}){
    return(
        <tr>
            <Link to ={`/ViewArrival/${reservation.id}`}><th>{reservation.id+1}</th> </Link>
            <td>{reservation.firstname}</td>
            <td>{reservation.lastname}</td>
            <td>{reservation.checkInDate}</td>
            <td>{reservation.checkOutDate}</td>
            <td>{reservation.roomtype}</td>
        </tr>
    );
}

const ViewArrival = (props) => {
    
    const rese = props.reservation.map((reservation) => {
        return(
            <Reservation reservation = {reservation} />
        );
    })
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>View Arrival</BreadcrumbItem>
                </Breadcrumb>    
                <div className="col-12">
                    <h3>View Arrival</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 m-1">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Check In Date</th>
                                    <th>Check Out Date</th>
                                    <th>Roomtype</th>
                                </tr>
                            </thead>
                            <tbody>                            
                                {rese}
                            </tbody>
                        </table>
                    </div>   
                </div>
            </div>
        </div>
    );
}

export default ViewArrival