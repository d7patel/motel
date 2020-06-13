import React from 'react';
import { Card, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderInfo({reservation, id}){   
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardBody>
                        <CardTitle >{reservation.firstname}</CardTitle>
                        <CardText> {reservation.lastname}</CardText>
                    </CardBody>
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
                            <h3>{props.reservation.firstname}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <RenderInfo reservation={props.reservation} 
                        id={props.reservation.id}/>
                        
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