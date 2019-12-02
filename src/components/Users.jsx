import React from 'react';
import "../scss/users.scss";
import userAvtar from "../images/user-noah-2x.jpg";
import api from '../utills/api';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            loader: true,
            users: [],
            nextLink: "",
            count: 1,
            disableBtn: false

        }
    }

    componentDidMount() {
        this.showMoreHandle(this.state)
    }

    //FIX state-argument!
    //############################################################

    showMoreHandle(state){
        api.get('/users?page=' + state.count + '&count=6')
            .then(response => {
                let newUsers = state.users.concat(response.data.users)
                this.setState({
                    loader: false,
                    users: newUsers,
                    count: ++state.count
                })
                if (response.data.links.next_url === null){
                    this.setState({ disableBtn: true })         
                }
            })
    }
    /*showMoreHandle = () => {
        if(state.nextLink !== null){
            api.get('/users?page=' + state.count + '&count=6')
                .then(response => {
                    let newUsers = state.users.concat(response.data.users)
                    this.setState({
                        loader: false,
                        users: newUsers,
                        nextLink: response.data.links.next_url,
                        count: ++state.count
                    })
                    console.log(response)
                })
        }else{console.log("FINISHED")}
        ///this.state can be used
    }*/

    formatTel(number){
        let digits = number.split('');

        digits.splice(3, "", " (");
        digits.splice(7, "", ") ");
        digits.splice(11, "", " ");
        digits.splice(14, "", " ");
        return digits.join("")
    }

    render() {
        let {users, disableBtn} = this.state;

        return (
            <section id="users">
                <div className="container">
                    <h2>Our cheerful users</h2>
                    <h5>Attention! Sorting users by registration date</h5>
                    <div className="users-block">

                        {users.map(user => {
                            return(
                                <div className="user-item">
                                    <div className="user-item-photo">
                                        <img src={user.photo} alt="" />
                                    </div>
                                    <div className="user-item-info">
                                        <h4 className="user-info-name tooltip">{user.name}</h4>
                                        <div className="user-info-sub">
                                            <div className="user-info-position">{user.position}</div>
                                            <div className="user-info-email tooltip">{user.email}</div>
                                            <div className="user-info-number">{this.formatTel(user.phone)}</div>
                                        </div>
                                    </div>
                                </div>)
                        })}

                    </div>

                    {!disableBtn && 
                    <button className="cta btn-secondary"
                        onClick={() => { this.showMoreHandle(this.state) }}
                    >
                            Show more
                    </button>
                    }
                </div>
            </section>
        );
    }
}

export default Users;