import React, { Component } from 'react'

class Index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            DOB: '',
            phone: '',
            email: '',
            checkInDate: '',
            checkOutDate: '',
            totalStay: '',
            totalPeople: '',
            message: ''
        }
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleDOB = (event) => {
        this.setState({
            DOB: event.target.value
        })
    }

    handleCheckIn = event => {
        this.setState({
            message:`${this.state.name} is checked in successfully. ${this.state.DOB}`
        })
        //event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleCheckIn}>
                <h1>Quality inn</h1>
                <div>
                    {this.state.message}
                </div>
                <div>
                    
                    <div><label>Name: </label>
                    <input type="text" value= {this.state.name} onChange={this.handleName} /></div>
                    <div><label>DOB: </label>
                    <input type="text" value= {this.state.DOB} onChange={this.handleDOB} /></div>
                    <div><label>Phone: </label>
                    <input type="text" /></div>
                    <div><label>Email: </label>
                    <input type="text" /></div>
                    <div><label>Check in date: </label>
                    <input type="text" /></div>
                    <div><label>Check out date: </label>
                    <input type="text" /></div>
                    <div><label>Total stay: </label>
                    <input type="text" /></div>
                    <div><label>Total people: </label>
                    <input type="text" /></div>
                    <div>
                        <label>Room Type</label>
                        <select>
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

export default Index
