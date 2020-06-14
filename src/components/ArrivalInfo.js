import React from 'react';
import { Card, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Label, Button, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));


function PaymentForm(){ 
    return(
        <div className="col-12 col-md-5 m-1">
            <LocalForm >
                <Row className="form-group">
                    <Label htmlFor="name" md={4}>Name on card</Label>
                    <Col md={8}>
                    
                        <Control.text model=".name" id="name" name="name" placeholder="Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                            />
                        <Errors
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                required: 'Required. ',
                                minLength: 'Must be greater than 2 characters. ',
                                maxLength: 'Must be 15 characters or less. '
                            }}
                            />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="zipcode" md={4}>Postal code</Label>
                    <Col md={4}>
                    
                        <Control.text model=".zipcode" id="zipcode" name="zipcode" placeholder="12345"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(5), maxLength: maxLength(5), isNumber
                            }}
                            />
                        <Errors
                            className="text-danger"
                            model=".zipcode"
                            show="touched"
                            messages={{
                                required: 'Required. ',
                                minLength: 'Must be a 5 digit number. ',
                                maxLength: 'Must be a 5 digit number. ',
                                isNumber: 'Must be a number. '
                            }}
                            />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="cardNum" md={4}>Card number</Label>
                    <Col md={8}>
                        <Control.text model=".cardNum" id="cardNum" name="cardNum" placeholder="Card number"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(16), maxLength: maxLength(16), isNumber
                            }}
                            />
                        <Errors
                            className="text-danger"
                            model=".cardNum"
                            show="touched"
                            messages={{
                                required: 'Required. ',
                                minLength: 'Must be a 16 digit number. ',
                                maxLength: 'Must be a 16 digit number. ',
                                isNumber: 'Must be a number. '
                            }}                          
                            />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="expiration" md={4}>Expiration</Label>
                    <Col md={3}>
                    
                        <Control.text model=".expiration" id="expiration" name="expiration" placeholder="MM"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(2), maxLength: maxLength(2), isNumber
                            }}
                            />
                        <Errors
                            className="text-danger"
                            model=".expiration"
                            show="touched"
                            messages={{
                                required: 'Required. ',
                                minLength: 'Must be a 2 digit number. ',
                                maxLength: 'Must be a 2 digit number. ',
                                isNumber: 'Must be a number. '
                            }}                           
                            />
                    </Col>
                    <p> / </p>
                    <Col md={3}>
                    
                        <Control.text model=".expiration2" id="expiration2" name="expiration2" placeholder="YY"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(2), maxLength: maxLength(2), isNumber
                            }}
                            />
                            <Errors
                            className="text-danger"
                            model=".expiration2"
                            show="touched"
                            messages={{
                                required: 'Required. ',
                                minLength: 'Must be a 2 digit number. ',
                                maxLength: 'Must be a 2 digit number. ',
                                isNumber: 'Must be a number. '
                            }}
                            />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="cvv" md={4}>CVV</Label>
                    <Col md={3}>
                    
                        <Control.text model=".cvv" id="cvv" name="cvv" placeholder="123"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(3), isNumber
                            }}
                            />
                            <Errors
                            className="text-danger"
                            model=".cvv"
                            show="touched"
                            messages={{
                                required: 'Required. ',
                                minLength: 'Must be a 3 digit number. ',
                                maxLength: 'Must be a 3 digit number. ',
                                isNumber: 'Must be a number. '
                            }}
                            
                            />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="comment" md={4}>Notes</Label>
                    <Col md={8}>
                        <Control.textarea model=".comment" id="comment" name="comment" rows="4"
                            className="form-control"
                            />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={{size: 8, offset: 4}}>
                        <Button type="submit" value="submit" color="primary">Check In</Button>
                    </Col>
                </Row>
            </LocalForm>
        
        </div>
    );
}

function RenderInfo({reservation, id}){   
    return(
        <div className="col-12 col-md-6 m-1">
            <Card>
            <div class="table-responsive">
                <table class="table table-striped">
                    <tbody>                            
                    <tr>
                        <th>Full Name: {reservation.firstname} {reservation.lastname}</th>
                    </tr>
                    <tr>
                        <th>Phone: {reservation.phone} </th>
                    </tr>
                    <tr>
                        <th>Email: {reservation.email} </th>
                    </tr>
                    <tr>
                        <th>Date of Birth: {reservation.dob} </th>
                    </tr>
                    <tr>
                        <th>Check In Date: {reservation.checkInDate} - {reservation.checkOutDate}</th>
                    </tr>
                    <tr>
                        <th>Total Stay: {reservation.totalStay}</th>
                    </tr>
                    <tr>
                        <th>Total People: {reservation.totalPeople} </th>
                    </tr>
                    <tr>
                        <th>Roomtype: {reservation.roomtype} </th>
                    </tr>
                    <tr>
                        <th>Notes: {reservation.message}</th>
                    </tr>
                    </tbody>
                </table>
            </div>  
            </Card> 
        </div>
    );
}

const ArrivalInfo = (props) => {
    
    if(props.reservation != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/ViewArrival">ViewArrival</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.reservation.id}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.reservation.firstname} {props.reservation.lastname}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderInfo reservation={props.reservation} 
                    id={props.reservation.id}/>
                    <PaymentForm />
                </div>
            </div>
        );
    }
    else{
        return (
            <div></div>
        );
    }
}


export default ArrivalInfo;