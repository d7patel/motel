import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import {Control, LocalForm, Errors } from 'react-redux-form';


export default class CreateReservation extends Component {
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }
 
    
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h3>Create Reservation</h3>
                    <hr />
                </div>
                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={{size: 2, offset: 5}}>First Name: </Label>
                            <Col md={5}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={{size: 2, offset: 5}}>Last Name: </Label>
                            <Col md={5}>
                                <Control.text model=".lastname" id="lastname" name="lastname"
                                    placeholder="Last Name"
                                    className="form-control"
                                    />
                            </Col>                        
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="phone" md={{size: 2, offset: 5}}>Phone Number: </Label>
                            <Col md={5}>
                                <Control.text model=".phone" id="phone" name="phone"
                                    placeholder="Phone Number"
                                    className="form-control"
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={{size: 2, offset: 5}}>Email: </Label>
                            <Col md={5}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="dob" md={{size: 2, offset: 5}}>Date of Birth: </Label>
                            <Col md={5}>
                                <Control.custom type="date" model=".dob" id="dob" name="dob"
                                    placeholder="Date of Birth"
                                    className="form-control"
                                    
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="checkInDate" md={{size: 2, offset: 5}}>Check In Date: </Label>
                            <Col md={5}>
                                <Control.text model=".checkInDate" type="date" id="checkInDate" name="checkInDate"
                                    placeholder="Check In Date"
                                    className="form-control"
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="checkOutDate" md={{size: 2, offset: 5}}>Check Out Date: </Label>
                            <Col md={5}>
                                <Control.text model=".checkOutDate" type="date" id="checkOutDate" name="checkOutDate"
                                    placeholder="Check Out Date"
                                    className="form-control"
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="checkOutDate" md={{size: 2, offset: 5}}>Total Stay: </Label>
                            <Col md={5}>
                            <Control.text model=".totalStay" id="totalStay" name="totalStay"
                                    className="form-control"
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="checkOutDate" md={{size: 2, offset: 5}}>Total People: </Label>
                            <Col md={5}>
                                <Control.select model=".totalPeople" name="totalPeople"
                                        className="form-control"
                                        >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="checkOutDate" md={{size: 2, offset: 5}}>Room Type: </Label>
                            <Col md={5}>
                                <Control.select model=".roomtype" name="roomtype"
                                        className="form-control"
                                        >
                                    <option>Select room type</option>
                                    <option>King</option>
                                    <option>Double Queen</option>
                                    <option>Suite</option>
                                    <option>Handicap</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={{size: 2, offset: 5}}>Customer Request: </Label>
                            <Col md={5}>
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="6"
                                    className="form-control"
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 5, offset: 7}}>
                                <Button type="submit" color="primary">
                                    Reserved
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        )
    }
}