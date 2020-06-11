import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardImgOverlay } from 'reactstrap';

function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <div className="check">
            <CardImgOverlay>
                <CardTitle><h2>{item.name}</h2></CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
            </CardImgOverlay>
            </div>
        </Card>
    );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotions} />
                </div>
            </div>
        </div>
    );
}

export default Home
