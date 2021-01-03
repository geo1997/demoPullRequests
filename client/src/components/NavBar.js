import React, {Component} from 'react';
import {Link , withRouter} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../styles.css'


class NavBar extends Component {

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken');
        this.props.history.push(`/`)
    }


    render() {

        const RegLog =(
            <Navbar bg="dark" variant="dark" style={{height:65}}>

                <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/login"}>Login </Nav.Link>
                    <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                    <Nav.Link
                        as={Link} style={{color:'#fafafa' , marginLeft:450, textDecoration: 'none' }} className="nav abs-center-x  rainbow" to={"/"}>Buttercup Events<b><i></i></b>
                    </Nav.Link>
                </Nav>

            </Navbar>
        )

        const LoggedIn = (
            <Navbar bg="dark" variant="dark" style={{height:65}}>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/events"}>Events </Nav.Link>
                    <Nav.Link as={Link} to={"/add/event"}>Add Event</Nav.Link>

                    <Nav.Link
                        as={Link} style={{color:'#fafafa' , marginLeft:450, textDecoration: 'none' }} className="nav abs-center-x  rainbow"  to="/">Buttercup Events<b><i></i></b>
                    </Nav.Link>

                    <Nav.Link  style={{color:'#fafafa' , marginLeft:500, textDecoration: 'none' }} onClick={this.logOut.bind(this)}>Log Out</Nav.Link>
                </Nav>

            </Navbar>
        )
            //depending on jwt token show different nav bars
        return (
            <div>
                {localStorage.usertoken ? LoggedIn : RegLog}
            </div>
        );
    }
}

export default withRouter(NavBar);
