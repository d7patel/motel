import React, {Component} from 'react';
import CreateReservation from './CreateReservation';
import Header from './Header';
import CheckOut from './CheckOut';
import Help from './Help';
import Stay from './Stay';
import Home from './Home';
import Footer from './Footer';
import ViewArrival from './ViewArrival';
import ArrivalInfo from './ArrivalInfo';
import {BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return{
        promotions: state.promotions,
        reservation: state.reservation
    }
}

{/*const mapDispatchToProps = (dispatch) => ({
    addReservation: (reseId, firstname, lastname, phone, email, dob, checkInDate, checkOutDate, totalStay, totalPeople, roomtype, message) => dispatch(addReservation(reseId, firstname, lastname, phone, email, dob, checkInDate, checkOutDate, totalStay, totalPeople, roomtype, message))
});*/}

class Main extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const HomePage = () => {
            return(
                <Home promotions = {this.props.promotions.filter((promo) => promo.featured)[0] }
                    />
            );
        }

        const Reservation = () => {
            return(
                <CreateReservation
                    />
            );
        }

        const Arrival = (match) => {
            return(
                <ArrivalInfo 
                reservation={this.props.reservation.filter((reservation) => reservation.id)[1]}/>
            );
        }

        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/CreateReservation" component={Reservation}/>
                        <Route exact path="/ViewArrival" component={() => <ViewArrival reservation= {this.props.reservation} />} />
                        <Route path="/ViewArrival/:id" component={Arrival}/>
                        <Route path="/stayover" component={Stay}/>
                        <Route path="/checkout" component={CheckOut}/>
                        <Route path="/help" component={Help}/>
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
