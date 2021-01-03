import React, {Component} from 'react';
import axios from 'axios'
import {API} from '../config'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {
//state intialize
    constructor(props) {
        super(props);

        this.state ={
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    /*
    on Submit pass the state variable values to the backend using axios
     */

    onSubmit(e){
        e.preventDefault()

        const user={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email:this.state.email,
            password: this.state.password
        }

        axios.post(`${API}/user/register`,user)
            .then(res => {

                if(res.data === "Invalid Data" || res.data === "User already registered"){
                    toast.error(res.data, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else{
                    toast.success("Registered successfully, Please Log In", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

                console.log(res.data.content)
            })


        this.setState({
            firstName:'',
            lastName:'',
            email:'',
            password:''
        })


    }


    render() {
        return (
            <div className="container">
                <h2>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal">
                                    <h3 align="center">User Registration</h3>
                                </h1>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        placeholder="Enter First Name"
                                        value={this.state.firstName}
                                        onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="LastName">Last Name </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        value={this.state.lastName}
                                        onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={this.onChange}/>
                                </div>

                                <button className="btn btn-lg btn-info btn-block">
                                    Register
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
        );
    }
}

export default Register;