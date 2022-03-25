import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createClient } from '../../store/actions/clientActions'

export class CreateClient extends Component {
    state = {
        clientName: "",
        clientAddress: "",
        clientPhoneNumber: "",
        clientSuburb: "",
        clientEmail: "",
        clientVoucher: ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createClient(this.state)
        this.props.history.push('/clients');
    }
    
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />

        return (
            <div>
                
                <div className="w3-card-2 w3-margin w3-padding w3-center ">
                    <div className="w3-container">
                        <span className="w3-text">Create Client</span>
                    </div>
                    <form className="w3-white" onSubmit={this.handleSubmit} >
                        <div>
                            <label for="clientName" className="w3-left">Name</label>
                            <input type="text" id="clientName" name="clientName" onChange={this.handleChange} placeholder="client name.."/>
                        </div>
                        

                        <div>
                            <label for="clientPhoneNumber" className="w3-left">Phone Number</label>
                            <input type="text" id="clientPhoneNumber" name="clientPhoneNumber" onChange={this.handleChange} placeholder="Meat, rice, chicken..."/>
                        </div>
                        
                        <div>
                            <label for="clientAddress" className="w3-left">Address</label>
                            <input type="text" id="clientAddress" name="clientAddress" onChange={this.handleChange} placeholder=""/>
                        </div>

                        <div>
                            <label for="clientSuburb" className="w3-left">Suburb</label>
                            <input type="text" id="clientSuburb" name="clientSuburb" placeholder=""/>
                        </div>
                        
                        <div>
                            <label for="clientEmail" className="w3-left">Email</label>
                            <input type="text" id="clientEmail" name="clientEmail" placeholder=""/>
                        </div>

                        <div>
                            <label for="clientVoucher" className="w3-left">Voucher</label>
                            <input type="text" id="clientVoucher" name="clientVoucher" placeholder=""/>
                        </div>

                        <div className="w3-margin">
                            <input className="w3-button w3-teal w3-text-white" type="submit" value="Submit"/>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createClient: (items) => dispatch(createClient(items))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateClient)