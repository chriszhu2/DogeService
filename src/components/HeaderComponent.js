import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,

    Button, Modal, ModalHeader, ModalBody,

    Form, FormGroup, Input, Label } from 'reactstrap';

import { NavLink } from 'react-router-dom';

import React, {Component} from "react";

import { Link } from 'react-router-dom'



class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false,
          isModalOpen:false
        };

        this.toggleModal=this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

     

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        
                    <nav id="navbar" class="nav">
                        <ul class="nav-list">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'> Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to='/faceapi'> How are you feeling?</NavLink>
                                </NavItem>
                            </Nav>
                        </ul>
                    </nav>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;