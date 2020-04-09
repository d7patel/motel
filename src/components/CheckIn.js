import React, { Component } from 'react'
import Stay from './Stay';

var data = [];

export default class CheckIn extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            firstname: '',
            lastname: '',
            DOB: '',
            phone: '',
            email: '',
            checkInDate: '',
            checkOutDate: '',
            totalStay: '',
            totalPeople: '',
            roomtype: '',
            message: ''
        }
    }

    handleName = e => {
        this.setState({
            //firstname: event.target.value
            [e.target.name]: e.target.value
        });
    };

    handleCheckIn = event => {
        event.preventDefault();
        console.log(this.state);
        data = this.state;
        console.log(data);
        //this.props.onSubmit(this.state);
        this.setState({
            firstname: '',
            lastname: '',
            DOB: '',
            phone: '',
            email: '',
            checkInDate: '',
            checkOutDate: '',
            totalStay: '',
            totalPeople: '',
            roomtype: '',
            message: ''
        });
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <form onSubmit={this.handleCheckIn}>
                <div>
                    {this.state.message}
                </div>
                <div className="form-class" >
                    
                    <div ><label>First Name: </label>
                    <input name="firstname" type="text" placeholder="Firest Name" ref={this.inputRef} value= {this.state.firstname} onChange={ e => this.handleName(e)} /></div>
                    <div ><label>Last Name: </label>
                    <input name="lastname" type="text" placeholder="Last Name" value= {this.state.lastname} onChange={ e => this.handleName(e)} /></div>
                    <div><label>DOB: </label>
                    <input name="DOB" type="text" value= {this.state.DOB} onChange={e=> this.handleName(e)} /></div>
                    <div><label>Phone: </label>
                    <input name="phone" type="text" value= {this.state.phone} onChange={e=> this.handleName(e)} /></div>
                    <div><label>Email: </label>
                    <input name="email" type="text" value= {this.state.email} onChange={e=> this.handleName(e)} /></div>
                    <div><label>Check in date: </label>
                    <input name="checkInDate" type="text" value= {this.state.checkInDate} onChange={e=> this.handleName(e)} /></div>
                    <div><label>Check out date: </label>
                    <input name="checkOutDate" type="text" value= {this.state.checkOutDate} onChange={e=> this.handleName(e)} /></div>
                    <div><label>Total stay: </label>
                    <input name="totalStay" type="text" value= {this.state.totalStay} onChange={e=> this.handleName(e)} /></div>
                    <div><label>Total people: </label>
                    <input name="totalPeople" type="text" value= {this.state.totalPeople} onChange={e=> this.handleName(e)} /></div>
                    <div>
                        <label>Room Type</label>
                        <select name="roomtype" value= {this.state.roomtype} onChange={e=> this.handleName(e)}>
                            <option value="none">Select room type</option>
                            <option value="King">King</option>
                            <option value="Double Queen">Double Queen</option>
                            <option value="Suite">Suite</option>
                            <option value="Handicap">Handicap</option>
                        </select>
                    </div>
                    <div><button type="submit" >Check in</button></div>
                 
                </div>
            </form>
        )
    }
}