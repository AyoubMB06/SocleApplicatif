import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> User Id: </label>
                            <div> { this.state.user.id }</div>
                        </div>
                        <div className = "row">
                            <label> User Nom: </label>
                            <div> { this.state.user.nom }</div>
                        </div>
                        <div className = "row">
                            <label> User Prénom: </label>
                            <div> { this.state.user.prenom }</div>
                        </div>
                        <div className = "row">
                            <label> User Job: </label>
                            <div> { this.state.user.job }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
