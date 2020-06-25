import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function Reservation ({reservation, onClick}){
    return(
        <tr>
            <th><Button type="submit" value="submit" color="primary" >Check In</Button></th>
            <td>{reservation.id+1}</td> 
            <Link to ={`/ViewArrival/${reservation.id}`} ><td>{reservation.firstname} {reservation.lastname}</td></Link>
            <td>{reservation.checkInDate}</td>
            <td>{reservation.checkOutDate}</td>
            <td>{reservation.roomtype}</td>
        </tr>
    );
}

class ViewArrival extends Component {
    constructor(props){
        super(props);
    }
   
    render() {
    
    const rese = this.props.reservation.map((reservation) => {
        return(
            <Reservation reservation = {reservation}
            key={reservation.id}/>
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
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Status</th>
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
}

export default ViewArrival