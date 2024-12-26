import React, { Component } from 'react';
import '../Sidebar.css';
import logo from '../assets/Logo.png'

class Sidebar extends Component{
    state = {clicked: false};
    handleClick =  () =>{
        this.setState({clicked : !this.state.clicked})
    }
    render() {
    return (
        <div id="sidebar" >
            <div className='menulogo' onClick={this.handleClick}>
                <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <div className='sub-side'>
                <nav>
                    <ul id='Navbar' className= {this.state.clicked ? "#Navbar active" : "#Navbar"}>
                        <li><a href='#'><img src={logo} className='logoimg'/></a></li>
                        <li className="active">Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Resume</li>
                        <li>Recent Work</li>
                        <li>Testimonial</li>
                        <li>Blog</li>
                    </ul>
                </nav>
                <div className="social-icons">
                    <a href='https://www.facebook.com/'><i className="fab fa-facebook-f"></i></a>
                    <a href='https://in.linkedin.com/'><i className="fab fa-linkedin-in"></i></a>
                    <a href='https://x.com/?lang=en'><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    );
};
};

export default Sidebar;
