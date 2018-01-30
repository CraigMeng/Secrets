import React, { Component } from 'react';
import './Navbar.css';
import slogan from '../img/slogan.PNG'

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-item">
                    <div className="nav-inner">
                        <div style={{borderRight: "solid 1px #dbdbdb", paddingRight: "15px"}}>
                            <i className="fa fa-user-secret fa-3x" aria-hidden="true"></i>                            
                        </div>
                        <div style={{minWidth: "40px", paddingLeft: "15px"}} className="slogan">
                            <img src={slogan} style={{height: "25px", marginTop: "12px"}}></img>
                        </div>
                        <div style={{width: "400px"}}></div>
                        <div style={{paddingTop: "10px"}}>
                            <i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//Welcome to Secrets, Share your Secrets with others and make the world more open!
export default Navbar;
