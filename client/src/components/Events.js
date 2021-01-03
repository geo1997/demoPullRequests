import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {API} from "../config";


const SingleEvent = props =>(
    <tr className="table-dark">

        <td>
            {props.event.eventName}
        </td>
        <td>
            {props.event.venue}
        </td>
        <td>
            {props.event.time}
        </td>
        <td>
            {props.event.date.substring(0,10)}
        </td>
        <td>
            {props.event.status}
        </td>
        <td>

            <Link to={"/edit/"+props.event._id}>
                <button  type="button" className="btn btn-warning" style={{height:40}} >
                Edit
                </button>
            </Link> |
            <button type="button" className="btn btn-danger" style={{height:40}} onClick={() => {props.deleteEvent(props.event._id)}}>Delete</button>

        </td>

    </tr>
)




class Events extends Component {
    constructor(props) {
        super(props);

        this.deleteEvent = this.deleteEvent.bind(this);


        this.state = {events :[]}
    }

    //load events when page renders
    componentDidMount() {

        axios.get(`${API}/events`)
            .then(res =>{
                this.setState({events:res.data})
            })
            .catch((err) =>{
                console.log(err)
            })


    }

    //delete an event by passing the event id
    deleteEvent(id){
        axios.delete(`${API}/delete/event/`+id)
            .then(res => console.log(res.data));
        this.setState({
            events: this.state.events.filter(el=> el._id !== id)
        })
    }

    eventList(){
        return this.state.events.map(eachEvent =>{
            return <SingleEvent event={eachEvent} deleteEvent={this.deleteEvent} key={eachEvent._id}/>
        })
    }



    render() {
        return (
            <div>
                <div className="container">
                    <h1 align="center"  style={{marginTop:20}}>Event List</h1>
                    <h4>
                        <table className="table  table-hover"  style={{marginTop:60}}>
                            <thead  >
                            <tr>
                                <th scope="col">Event Name</th>
                                <th scope="col">Event Venue</th>
                                <th scope="col">Event Time</th>
                                <th scope="col">Event Date</th>
                                <th scope="col">Event Progress</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.eventList()}
                            </tbody>
                        </table>
                    </h4>
                </div>

            </div>

        );
    }
}

export default Events;