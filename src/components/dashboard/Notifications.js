import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


const Notifications = (props) => {
    const { notifications } = props
    return (
        
        <div className="section ">
            <div className="card z-depth-0 ">
                <div className="card-content grey darken-4">
                    <span className="card-title yellow-text text-darken-3">Notifications</span>
                    <ul className="notifications">
                        { notifications && notifications.map(item =>{
                            console.log(item)
                            return(
                                
                                <li className='grey darken-4' key={item.id}>
                                    <p>
                                        <span className='cyan-text text-darken-3'><b>{item.user} </b></span>
                                        <span className='yellow-text text-accent-4'>{item.content}</span>
                                        <div className='yellow-text text-accent-4 note-date'>
                                            {moment(item.time.toDate()).fromNow()}
                                        </div>
                                    </p>
                                    <hr/>
                                </li>
                            )
                        })}
                    </ul>
                
                </div>
            </div>
        </div>
    )
}

export class MenuNotifications extends Component {
    componentDidMount(){

        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {constrainWidth: false});
        
    }
    

    render (){
        const { notifications } = this.props
        return(
            <div>
                <button className='dropdown-trigger btn' data-target='dropdownNotification'><i className="material-icons">bookmarks</i></button>

                <ul id='dropdownNotification' className='dropdown-content blue-grey darken-4' >
                    { notifications && notifications.map(item =>{
                        
                        return(
                            
                            <li className='blue-grey darken-4' key={item.id}>
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className=' yellow-text text-accent-3'><b>{item.user} </b></span>
                                        <span className='grey-text text-darken-4'>{item.content}</span>
                                        <div className='grey-text text-darken-4 note-date'>
                                            {moment(item.time.toDate()).fromNow()}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const notifications = state.firestore.ordered.notification
    
    return{
        notifications: notifications,
        auth: state.firebase.auth
    }
}

export default compose (
    connect(mapStateToProps), 
        firestoreConnect( [
            { collection: 'notification' }
        ]) )(MenuNotifications, Notifications)
