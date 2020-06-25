import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import {Control, LocalForm, Errors } from 'react-redux-form';
import {Link} from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const dateformat = (val) => /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/i.test(val);

export default class CreateReservation extends Component {
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.addReservation(this.props.id, values.firstname, values.lastname, values.phone, values.email, values.dob, 
            values.checkInDate, values.checkOutDate, values.totalStay, values.totalPeople, values.roomtype, values.message)

        console.log('Current State is: ' + JSON.stringify(values));
    {/*alert('Current State is: ' + JSON.stringify(values));*/}
    }
 
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Create Reservation</BreadcrumbItem>
                    </Breadcrumb>               
                </div>
                <hr />

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
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 2 characters! ',
                                            maxLength: 'Must be 15 characters or less! '
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={{size: 2, offset: 5}}>Last Name: </Label>
                                <Col md={5}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 2 characters! ',
                                            maxLength: 'Must be 15 characters or less! '
                                        }}
                                        />
                                </Col>                        
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="phone" md={{size: 2, offset: 5}}>Phone Number: </Label>
                                <Col md={5}>
                                    <Control.text model=".phone" id="phone" name="phone"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".phone"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 2 numbers! ',
                                            maxLength: 'Must be 15 numbers or less! ',
                                            isNumber: 'Must be a number! '
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={{size: 2, offset: 5}}>Email: </Label>
                                <Col md={5}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            validEmail: 'Invalid Email Address! '
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="dob" md={{size: 2, offset: 5}}>Date of Birth: </Label>
                                <Col md={5}>
                                    <Control.text model=".dob" id="dob" name="dob"
                                        placeholder="mm/dd/yyyy"
                                        className="form-control"
                                        validators={{
                                            required, dateformat
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".dob"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            dateformat: 'Invalid Date'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="checkInDate" md={{size: 2, offset: 5}}>Check In Date: </Label>
                                <Col md={5}>
                                    <Control.text model=".checkInDate" id="checkInDate" name="checkInDate"
                                        placeholder="mm/dd/yyyy"
                                        className="form-control"
                                        validators={{
                                            required, dateformat
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".checkInDate"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            dateformat: 'Invalid Date'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="checkOutDate" md={{size: 2, offset: 5}}>Check Out Date: </Label>
                                <Col md={5}>
                                    <Control.text model=".checkOutDate" id="checkOutDate" name="checkOutDate"
                                        placeholder="mm/dd/yyyy"
                                        className="form-control"
                                        validators={{
                                            required, dateformat
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".checkOutDate"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            dateformat: 'Invalid Date'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="totalStay" md={{size: 2, offset: 5}}>Total Stay: </Label>
                                <Col md={5}>
                                    <Control.text model=".totalStay" id="totalStay" name="totalStay"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(3), isNumber
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".totalStay"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 0 numbers! ',
                                            maxLength: 'Must be 3 numbers or less! ',
                                            isNumber: 'Must be a number! '
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="totalPeople" md={{size: 2, offset: 5}}>Total People: </Label>
                                <Col md={5}>
                                    <Control.select model=".totalPeople" name="totalPeople"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                            >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".totalPeople"
                                        show="touched"
                                        messages={{
                                            required: 'Required! '
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="roomtype" md={{size: 2, offset: 5}}>Room Type: </Label>
                                <Col md={5}>
                                    <Control.select model=".roomtype" name="roomtype"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        >
                                    
                                        <option>King</option>
                                        <option>Double Queen</option>
                                        <option>Suite</option>
                                        <option>Handicap</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".roomtype"
                                        show="touched"
                                        messages={{
                                            required: 'Required! '
                                        }}
                                        />
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
            </div>
        )
    }
}