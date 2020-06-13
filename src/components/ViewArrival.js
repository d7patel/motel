import React, { Component } from 'react';
import {Card, CardTitle, CardSubtitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function Reservation ({reservation, onClick}){
    return(
        <Card>
            <Link to ={`/ViewArrival/${reservation.id}`}>
                <p>  ({reservation.id})  {reservation.firstname} {reservation.lastname}</p>
                
            </Link>
        </Card>
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
                <div className="col-12">
                    {rese}
                </div>
            </div>
        </div>
    )
    
}

export default ViewArrival