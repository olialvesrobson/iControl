import React, { Component } from 'react'
import UserSummary from './Summary'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { signOut } from '../../store/actions/authActions'

export class UserDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
            ...props.users
        }

        this.submitLogout = this.submitLogout.bind(this);
    }

    submitLogout = (e) => {
        //this.props.signOut()
        //this.props.history.push('/');
    }

    render (){
        const {users} = this.props
        console.log(this.props)
        return(
            <div className="dashboard container">
                <div className="col s8 m8">
                    
                    <div className="project-list section">
                        <div className="card grey darken-4 white-text center">
                            <span>
                                {users && users.map(user => {
                                    console.log(user)
                                    return (
                                        <span className="card-title center ">{user.firstName}</span>
                                    )
                                })}
                                
                                <button className="btn-floating right" to='/createjob'><i className="material-icons" onClick={this.submitLogout()}>logout</i></button>
                            </span>
                        </div>
                        <div>
                            {users && users.map(user => {
                                
                                return (
                                    <UserSummary users={user} key={user.id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    const users = state.firestore.ordered.users
    const auth = state.firebase.auth
    
    return{
        users: users,
        auth: auth
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps), 
        firestoreConnect(
            props => {
                
                return [
                    { collection: 'users', where: ['id', '==', props.auth.uid] }
                ]
            }
         ) )(UserDetail) 