import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createProduct } from '../../store/actions/productActions'

export class CreateProduct extends Component {
    state = {
        productMenu: "",
        productDescription: "",
        productValue: "",
        productStatus: "",
        productQuantity: ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProduct(this.state)
        this.props.history.push('/products');
    }
    
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />

        return (
            <div>
                
                <div className="w3-card-2 w3-margin w3-padding w3-center ">
                    <div className="w3-container">
                        <span className="w3-text">Create Product</span>
                    </div>
                    <form className="w3-white" onSubmit={this.handleSubmit} >
                        <div>
                            <label for="productMenu" className="w3-left">Menu</label>
                            <input type="text" id="productMenu" name="productMenu" onChange={this.handleChange} placeholder="Product name.."/>
                        </div>
                        

                        <div>
                            <label for="productDescription" className="w3-left">Description</label>
                            <input type="text" id="productDescription" name="productDescription" onChange={this.handleChange} placeholder="Meat, rice, chicken..."/>
                        </div>
                        
                        <div>
                            <label for="productValue" className="w3-left">Value</label>
                            <input type="text" id="productValue" name="productValue" onChange={this.handleChange} placeholder=""/>
                        </div>

                        <div>
                            <label for="productStatus" className="w3-left">Availability</label>
                            <select style={{display: "block"}} id="productStatus" name="productStatus" onChange={this.handleChange} >
                                <option value="available">Available</option>
                                <option value="unavailable">Unavailable</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="productQuantity" className="w3-left">Quantity</label>
                            <input type="text" id="productQuantity" name="productQuantity" placeholder=""/>
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
        createProduct: (product) => dispatch(createProduct(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)