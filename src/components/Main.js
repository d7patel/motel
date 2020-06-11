import React, {Component} from 'react';
import CreateReservation from './CreateReservation';
import Header from './Header';
import CheckOut from './CheckOut';
import Help from './Help';
import Stay from './Stay';
import Home from './Home';
import Footer from './Footer';
import ViewArrival from './ViewArrival';
import {BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return{
        promotions: state.promotions
    }
}

class Main extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const HomePage = () => {
            return(
                <Home promotions = {this.props.promotions.filter((promo) => promo.featured)[0] }/>
            );
        }
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/CreateReservation" component={CreateReservation}/>
                        <Route path="/ViewArrival" component={ViewArrival}/>
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
