import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {

    
    //w3-hide-small 
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <div class="w3-container">
            <div class="w3-bar w3-large w3-white w3-opacity w3-hover-opacity-off" id="myNavbar">
                
                { links }
                
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

export default connect (mapStateToProps)(Navbar)