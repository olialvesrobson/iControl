import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    
    return(
        <div className="">
            <NavLink to="/" className="w3-bar-item w3-button">HOME</NavLink>
            <div class="w3-dropdown-hover">
                <span class="w3-button">CONTROLS</span>
                <div class="w3-dropdown-content w3-bar-block w3-card-4">
                    <NavLink to="/products" className="w3-bar-item w3-button">PRODUCTS</NavLink>
                    <NavLink to="/clients" className="w3-bar-item w3-button">CLIENTS</NavLink>

                    <NavLink to="/groups" className="w3-bar-item w3-button">GROUPS</NavLink>
            
                </div>
            </div>
            <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
            <a href="#myMap" className="w3-bar-item w3-button">CONTACT</a>
            
            
        </div>
    ) 
}

const mapDispatchToProps=(dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect (null, mapDispatchToProps)(SignedInLinks)