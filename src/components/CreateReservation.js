import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

var data = [];

export default class CreateReservation extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            dob: '',
            checkInDate: '',
            checkOutDate: '',
            totalStay: '',
            totalPeople: '',
            roomtype: '',
            message: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
 
    
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h3>Create Reservation</h3>
                    <hr />
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={{size: 2, offset: 5}}>First Name: </Label>
                            <Col md={5}>
                                <Input type="text" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    value={this.state.firstname}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={{size: 2, offset: 5}}>Last Name: </Label>
                            <Col md={5}>
                                <Input type="text" id="lastname" name="lastname"
                                    placeholder="Last Name"
                                    value={this.state.lastname}
                                    onChange={this.handleInputChange} />
                            </Col>                        
                        </FormGroup>
                        <FormGroup row>
                        <Label htmlFor="phone" md={{size: 2, offset: 5}}>Phone Number: </Label>
                            <Col md={5}>
                                <Input type="phone" id="phone" name="phone"
                                    placeholder="Phone Number"
                                    value={this.state.phone}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={{size: 2, offset: 5}}>Email: </Label>
                            <Col md={5}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="dob" md={{size: 2, offset: 5}}>Date of Birth: </Label>
                            <Col md={5}>
                                <Input type="date" id="dob" name="dob"
                                    placeholder="Date of Birth"
                                    value={this.state.dob}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="checkInDate" md={{size: 2, offset: 5}}>Check In Date: </Label>
                            <Col md={5}>
                                <Input type="date" id="checkInDate" name="checkInDate"
                                    placeholder="Check In Date"
                                    value={this.state.checkInDate}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup><FormGroup row>
                            <Label htmlFor="checkOutDate" md={{size: 2, offset: 5}}>Check Out Date: </Label>
                            <Col md={5}>
                                <Input type="date" id="checkOutDate" name="checkOutDate"
                                    placeholder="Check Out Date"
                                    value={this.state.checkOutDate}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="checkOutDate" md={{size: 2, offset: 5}}>Total Stay: </Label>
                            <Col md={5}>
                            <Input type="number" id="totalStay" name="totalStay"
                                    value={this.state.totalStay}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="checkOutDate" md={{size: 2, offset: 5}}>Total People: </Label>
                            <Col md={5}>
                                <Input type="select" name="totalPeople"
                                        value={this.state.totalPeople}
                                        onChange={this.handleInputChange}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="checkOutDate" md={{size: 2, offset: 5}}>Room Type: </Label>
                            <Col md={5}>
                                <Input type="select" name="roomtype"
                                        value={this.state.roomtype}
                                        onChange={this.handleInputChange}>
                                    <option>Select room type</option>
                                    <option>King</option>
                                    <option>Double Queen</option>
                                    <option>Suite</option>
                                    <option>Handicap</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={{size: 2, offset: 5}}>Customer Request: </Label>
                            <Col md={5}>
                                <Input type="textarea" id="message" name="message"
                                    rows="6"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 5, offset: 7}}>
                                <Button type="submit" color="primary">
                                    Reserved
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}