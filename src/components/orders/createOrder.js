import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { createOrder } from '../../store/actions/ordersActions'

export class CreateOrder extends Component {
    state = {
        orderClient: "",
        orderProduct: [],
        orderValue: "",
        orderDeliver: "",
        orderPayment: "",
        orderStatus: "Waiting",
        orderNotes: "",
        orderDate: "",
        preQuantity: "1",
        preProduct: ""
        
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmitProduct = (e) => {
        e.preventDefault();
        const list = {
            orderProduct: this.state.preProduct,
            orderQuantity: this.state.preQuantity,
            productName: this.props.findProduct[this.state.preProduct].productMenu,
            productValue: this.props.findProduct[this.state.preProduct].productValue
            }
        
        this.setState(state => ({
            orderProduct: [
                ...state.orderProduct, list
                ]
        }))
        console.log("Updating state", this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.createOrder(this.state)
        //this.props.history.push('/orders');
        console.log("Creating item")
    }
    
    render() {
        const { auth, clients, products } = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />

        return (
            <div>
                
                <div className="w3-card-2 w3-margin w3-padding w3-center ">
                    <div className="w3-container">
                        <span className="w3-text">Create Order</span>
                    </div>
                    <form className="w3-white" onSubmit={this.handleSubmit} >
                        <div className="w3-margin">
                            <label for="orderClient" className="w3-left">Client</label>
                            <select style={{display: "block"}} id="orderClient" name="orderClient" onChange={this.handleChange} >
                                {clients && clients.map(item =>{
                                    return(
                                        <option value={item.id}>{item.clientName}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="w3-container w3-margin">
                            <div>
                                <label for="preProduct" className="w3-left">Product</label>
                                <select style={{display: "block"}} id="preProduct" name="preProduct" onChange={this.handleChange} >
                                    {products && products.map(item =>{
                                        return(
                                            <option value={item.id}>{item.productMenu}</option>
                                        )
                                    })}
                                    
                                </select>

                                
                            </div>

                            <div>
                                <label for="preQuantity" className="w3-left">Quantity</label>
                                <input type="number" min="1" max="20" id="preQuantity" defaultValue="1" name="preQuantity" onChange={this.handleChange} placeholder=""/>
                            </div>
                            
                            <input type="button" onClick={this.handleSubmitProduct} className="w3-button w3-margin w3-pink w3-text-white" value="add to order"/>
                        
                            <div className="w3-card-3 w3-padding w3-margin">
                                {this.state.orderProduct && this.state.orderProduct.map(item => {
                                    return(
                                        <div className="w3-card-2 w3-padding w3-tag w3-white w3-margin-right">
                                            <span className="w3-padding w3-text-grey">{item.productName}: {item.orderQuantity}</span>
                                        </div> 
                                    )
                                })}
                            </div>
                        </div>
                        
                        <div className="w3-margin">
                            <label for="orderDeliver" className="w3-left">Delivery or Pick up</label>
                            <select style={{display: "block"}} id="orderDeliver" name="orderDeliver" onChange={this.handleChange} >
                                <option value="Delivery">Delivery</option>
                                <option value="Pick up">Pick up</option>
                            </select>
                        </div>

                        <div className="w3-margin">
                            <label for="orderPayment" className="w3-left">Product</label>
                            <select style={{display: "block"}} id="orderPayment" name="orderPayment" onChange={this.handleChange} >
                                <option value="Card">Card</option>
                                <option value="Cash">Cash</option>
                                <option value="Transfer">Transfer</option>
                                <option value="Voucher">Voucher</option>
                                <option value="Off">Off</option>
                            </select>
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
        auth: state.firebase.auth,
        clients: state.firestore.ordered.clients,
        products: state.firestore.ordered.products,
        findProduct: state.firestore.data.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createOrder: (items) => dispatch(createOrder(items))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
        firestoreConnect( [
    { collection: 'products', orderBy: ['productMenu', 'asc'] },
    { collection: 'clients', orderBy: ['clientName', 'asc'] }
]))(CreateOrder)
