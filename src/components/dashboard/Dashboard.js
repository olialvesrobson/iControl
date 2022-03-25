import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import ProductList from '../products/listProducts'
import ClientList from '../clients/listClients'

class Dashboard extends Component {
    render(){
        const { auth, user } = this.props
        
        if (!auth.uid) return <Redirect to='/signIn' />
        return(
            <div className=" w3-container">
                
                <div className=" row">
                    <span>Welcome <b>{user.firstName}</b></span>
                    <br/>
                    <div className="w3-half">
                        <ProductList />
                        
                    </div>
                    <div className="w3-half">
                        <ClientList /> 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return{
        orders: state.firestore.ordered.orders,
        auth: state.firebase.auth,
        user: state.firebase.profile
    }
}

export default compose (
    connect(mapStateToProps), 
    firestoreConnect(props => [
        { collection: 'orders', orderBy: ['dateOrder', 'asc'] },
        { collection: "users", doc: props.auth.uid}
        ]) )(Dashboard)
