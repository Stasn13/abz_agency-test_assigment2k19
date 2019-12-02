import React from 'react';
import "../scss/header.scss";
import logo from "../images/logo/logo.svg";
import ReactSVG from "react-svg";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import api from '../utills/api';

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            loader: true,
            mobileMenu: false,
            user: null,
        }
    }

    componentDidMount(){
        api.get('/users/1')
            .then(response => {
                this.setState({ loader: false, 
                                user: response.data.user }) 
            })
    }


    render() {

    const { mobileMenu, loader, user } = this.state;

    if(loader){
        return false
    } 

        return (
            <header id="header">
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <nav>
                        <li>About me</li>
                        <li>Relationships</li>
                        <li>Requirements</li>
                        <li>Users</li>
                        <li>Sign Up</li>
                    </nav>
                    <div className="user-info">
                        <div className="user-info-text">
                            <div className="user-name">{user.name}</div>
                            <div className="user-email">{user.email}</div>
                        </div>
                        <div className="user-info-photo">
                            <a href="/" className="avatar">
                                <img
                                    src={user.photo}
                                    alt="avatar"
                                    className="avatar-photo"
                                />
                            </a>
                        </div>
                        <div className="user-info-logout">
                            <ReactSVG 
                                src={require("../images/icons/sign-out.svg")} 
                                className="icon" />
                        </div>
                    </div> 
                    <div className="drawer-btn">
                        <ReactSVG 
                            src={require("../images/icons/line-menu.svg")} 
                            className="icon"
                            onClick={() => this.setState({mobileMenu: !mobileMenu})}/>
                    </div>
                </div>
                <Drawer open={mobileMenu} onClick={() => this.setState({mobileMenu: !mobileMenu})}>
                    <div
                      className="mobile-menu"
                      role="presentation"
                    >
                        avatar
                        NAME
                        email
                        <Divider/>
                        <List>
                            <ListItem><ListItemText primary="About me" /></ListItem>
                            <ListItem><ListItemText primary="Relationships" /></ListItem>
                            <ListItem><ListItemText primary="Requirements" /></ListItem>
                            <ListItem><ListItemText primary="Users" /></ListItem>
                            <ListItem><ListItemText primary="Sign Up" /></ListItem>
                            <ListItem><ListItemText primary="Sign Out" /></ListItem>
                        </List>
                    </div>
                </Drawer>
            </header>
        );
    }
}

export default Header;