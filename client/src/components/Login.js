import React, {Component} from 'react';
import axios from 'axios'
import {API} from '../config'
import '../styles.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
//initialize state
    constructor(props) {
        super(props);

        this.state ={
            email:'',
            password:'',

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    //on change update state
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }



    onSubmit(e){
        e.preventDefault()

        const user={
            email:this.state.email,
            password: this.state.password
        }

        axios.post(`${API}/user/login`,user)
            .then(res => {

                if(res.data === "User does not exist" || res.data ==="Please fill out all the fields"){
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

                if(res.data !== 'User does not exist' && res.data !== "Please fill out all the fields"){
                    localStorage.setItem('usertoken', res.data)
                    console.log(res.data)
                    this.props.history.push(`/events`)
                }

            })
            .catch(err =>{
                console.log(err);
            })

    }


    render() {
        return (
            <div className="container">
                <h2>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit} className='login'>
                                <h1 className="h3 mb-3 font-weight-normal">
                                    <h2 align="center">User Login</h2>
                                </h1>
                                <div className="form-group">
                                    <label htmlFor="email">Email </label>
                                    <input
                                        type="email"
                                        id="email"
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
                                        id="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={this.onChange}/>
                                </div>

                                <button className="btn btn-lg btn-info btn-block">
                                    Sign In
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

export default Login;