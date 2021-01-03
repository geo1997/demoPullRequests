import React, {Component} from 'react';
import axios from 'axios'
import {API} from '../config'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AddEvents extends Component {
    //initialize state
    constructor(props) {
        super(props);

        this.state ={
           eventName:'',
            venue:'',
            time:'',
            date:new Date(),
            status:''

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.onDateChange = this.onDateChange.bind(this);

    }


    //on change update state
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})

    }

    //on date change set state
    onDateChange(date){
        this.setState({
            date:date
        })
    }
    //on status select update state
    onSelect = e =>{
        this.setState({status:e.target.value})
    }

    //on stime select update state
    onTimeSelect = e =>{
        this.setState({time:e.target.value})
    }

    //on submit
    onSubmit(e){
        e.preventDefault();

        const event={
           eventName:this.state.eventName,
            venue:this.state.venue,
            time:this.state.time,
            date:this.state.date,
            status:this.state.status
        }

        if(event.eventName==='' || event.venue=== ''|| event.time==='' ||event.date==='' ||event.status===''){
            toast.error("All fields are required", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            axios.post(`${API}/event/add`,event)
                .then(res => {

                        window.location= '/events'

                    console.log(res.data.content)

                })
        }

        this.setState({
           eventName:'',
            venue:'',
            time:'',
            date:new Date(),
            status:''
        })

    }


    render() {

        return (
            <div>
                <div className="container">
                    <h2>
                        <div className="row">
                            <div className="col-md-6 mt-3 mx-auto">
                                <form noValidate onSubmit={this.onSubmit} className='addEvent'>
                                    <h1 className="h3 mb-3 font-weight-normal">
                                        <p align="center">Add Event</p>
                                    </h1>
                                    <div className="form-group">
                                        <label htmlFor="eventName">Event Name</label>
                                        <input
                                            type="text"
                                            id="eventName"
                                            className="form-control"
                                            name="eventName"
                                            placeholder="Enter Event Name"
                                            value={this.state.eventName}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="venue">Event Venue</label>
                                        <input
                                            type="text"
                                            id="venue"
                                            className="form-control"
                                            name="venue"
                                            placeholder="Enter Event Venue"
                                            value={this.state.venue}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="time">Event Session </label>
                                        <select className="form-control" id="time"
                                                onChange={this.onTimeSelect}>
                                            <option>Select session</option>
                                            <option value="Morning Session">Morning Session</option>
                                            <option value="Afternoon Session">Afternoon Session</option>
                                            <option value="Evening Session">Evening Session</option>
                                            <option value="All Day">All Day</option>

                                        </select>
                                    </div>

                                    <div className="form-group" >
                                        <label htmlFor="date">Event Date </label>
                                      <div >
                                          <DatePicker
                                              selected={this.state.date}
                                              onChange={this.onDateChange}
                                              id="date"

                                              />
                                      </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="time">Event Status</label>
                                        <select className="form-control" id="status"
                                                onChange={this.onSelect} >
                                            <option value="Select Status">Select Status</option>
                                            <option value="Completed">Completed</option>
                                            <option value="In Progress">In Progress</option>
                                        </select>
                                    </div>


                                    <button className="btn btn-lg btn-success btn-block">
                                       Add Event
                                    </button>
                                </form>
                            </div>
                        </div>
                    </h2>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover/>
                </div>
            </div>
        );
    }
}

export default AddEvents;