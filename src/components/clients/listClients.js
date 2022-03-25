import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

export class ProductList extends Component {
    state ={ search: "" }
    
    handleSearch = (e) =>{
        this.setState({ search: e.target.value})
    }


    handleSummary = (item) => {
        return (
            <div className="w3-container w3-row w3-padding w3-white ">
                <div className=" w3-threequarter">
                    <span className="w3-text-teal"><strong>{item.clientName}</strong></span>  <span className="w3-text-grey">{item.clientPhoneNumber}</span><br/>
                    <span className="w3-text-grey">{item.clientAddress}, {item.clientSuburb}</span>
                    
                </div>
                <div className="w3-quarter w3-right-align">
                    <button className="w3-button w3-amber">Select</button>
                    <button className="w3-button">
                            <Link to={'/client/' + item.id} className="w3-text-black">Edit</Link>
                        </button>
                </div>
                <hr/>
            </div>
        ) 
    }

    
    render () {

        const filteredClient = (items) => {
            
            const found = ( items || [] ).filter( (item) => {
                const fullName = (item.clientName + " " + item.clientPhoneNumber + " " + item.clientAddress + " " + item.clientSuburb).toString()
                
                return fullName.toLowerCase().indexOf( this.state.search.toLowerCase() ) !== -1
            })

            return found
        } 

        const { items } = this.props
        return(
            <div className="w3-container">
                <h4 className="w3-center w3-text-teal">Clients</h4>
                <hr/>
                <span className="w3-tag w3-pink w3-text-white w3-padding"><Link className="w3-text-white" to="/createClient">New</Link></span>
                <div className="">
                    <span className="center">
                        <input placeholder="Search" type="text" style={{width: "80%"}} onChange={this.handleSearch}/>
                    </span>
                </div>
                <div>
                    {filteredClient(items).map(item => {
                        return (
                            <div>
                                {this.handleSummary(item)}
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } 
}


const mapStateToProps = (state) => {
    const items = state.firestore.ordered.clients
    console.log(items)
    return{
        items: items,
        auth: state.firebase.auth
    }
}

export default compose (
    connect(mapStateToProps), 
        firestoreConnect( [
            { collection: 'clients', orderBy: ['clientName', 'asc'] }
        ]) )( ProductList )