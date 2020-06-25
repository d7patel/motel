import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
    return (
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/home"><img src='assets/images/logo.png' height="30" width="40" alt='The Blue Vivid Resort' /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/CreateReservation'><span className="fa fa-check-square-o fa-lg"></span> Create Reservation</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/ViewArrival'><span className="fa fa-users fa-lg"></span> View Arrival</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/stayover'><span className="fa fa-list fa-lg"></span> In House List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/checkout'><span className="fa fa-window-close-o fa-lg"></span> Checkout List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/help'><span className="fa fa-wrench fa-lg"></span> Help</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                    <div className="col-12 col-md-3"><img src='assets/images/logo.png' height="160" width="180" alt='The Blue Vivid Resort' /></div>

                        <div className="col-12 col-md-6">
                            <h1>The Blue Vivid Resort</h1>
                            <p>Our rooms were inspired by the downtown Indianapolis skyline boasting stylish 
                            décor, flexible work spaces and plush bedding. Expansive windows provide stunning 
                            views of the city and provide a plethora of natural light. </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input}  />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
    }
}

export default Header
