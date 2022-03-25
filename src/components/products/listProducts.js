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
            <div className="w3-card-2 w3-margin w3-padding w3-white ">
                <div>
                    <div className="w3-threequarter">
                        <span className="w3-text-teal"><strong>{item.productMenu}</strong> </span> 
                        <br/><span>{item.productDescription}</span>
                    </div>
                    <div className="w3-quarter w3-right-align">
                    <span className=" w3-tag w3-light-grey w3-text-deep-orange ">${parseFloat(item.productValue || 0).toFixed(2)}</span>
                    </div>
                </div>
                <p><button className="w3-button w3-amber"><Link to={'/createOrder/' + item.id} className="w3-text-black">Select</Link></button> <button className="w3-button">
                        <Link to={'/product/' + item.id} className="w3-text-black">Edit</Link>
                    </button></p>
            </div>
        ) 
    }

    
    render () {

        const filteredClient = (items) => {
            
            const found = ( items || [] ).filter( (item) => {
                const fullName = (item.productMenu + " " + item.productDescription).toString()
                
                return fullName.toLowerCase().indexOf( this.state.search.toLowerCase() ) !== -1
            })

            return found
        } 

        const { items } = this.props
        return(
            <div className="w3-container">
                <h4 className="w3-center w3-text-teal">Product</h4>
                <hr/>
                <span className="w3-tag w3-pink w3-text-white w3-padding"><Link className="w3-text-white" to="/createProduct">New</Link></span>
                <div className="">
                    <span className="center">
                        <input placeholder="Search" type="text" style={{width: "80%"}} onChange={this.handleSearch}/>
                    </span>
                </div>
                <div>
                    {filteredClient(items).map(item => {
                        return (
                            this.handleSummary(item)
                        )
                    })}
                </div>
            </div>
        )
    } 
}


const mapStateToProps = (state) => {
    const items = state.firestore.ordered.products
    
    return{
        items: items,
        auth: state.firebase.auth
    }
}

export default compose (
    connect(mapStateToProps), 
        firestoreConnect( [
            { collection: 'products', orderBy: ['productMenu', 'asc'] }
        ]) )( ProductList )