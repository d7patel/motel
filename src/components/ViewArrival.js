import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function Reservation ({reservation, onClick}){
    return(
        <tr>
            <th>{reservation.id+1}</th> 
            <Link to ={`/ViewArrival/${reservation.id}`}><td>{reservation.firstname} {reservation.lastname}</td></Link>
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
                                    <th>Full Name</th>
                                    
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