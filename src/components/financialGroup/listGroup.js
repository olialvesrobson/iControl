import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

export class GroupList extends Component {
    state ={ search: "" }
    
    handleSearch = (e) =>{
        this.setState({ search: e.target.value})
    }


    handleSummary = (item) => {
        const signal = item.groupType === "Incomes" ? <span className="w3-badge w3-pale-blue w3-text-teal">+</span> : <span className="w3-badge w3-pale-red w3-text-teal">-</span> 
        return (
            <div className="w3-container w3-white ">
                <div className=" w3-threequarter">
                    <span className="w3-text-teal">{signal} <strong>{item.groupName}</strong></span> -- <span className="w3-text-grey">{item.groupSubject}</span>
                    
                </div>
                <div className="w3-quarter w3-right-align">
                    <button className="w3-button w3-amber">Select</button> <button className="w3-button">
                            <Link to={'/group/' + item.id} className="w3-text-black">Edit</Link>
                        </button>
                </div>
                
            </div>
        ) 
    }

    
    render () {

        const filteredClient = (items) => {
            
            const found = ( items || [] ).filter( (item) => {
                const fullName = (item.groupName + " " + item.groupSubject + " " + item.groupType).toString()
                
                return fullName.toLowerCase().indexOf( this.state.search.toLowerCase() ) !== -1
            })

            return found
        } 

        const { items } = this.props
        return(
            <div className="w3-container">
                <h4 className="w3-center w3-text-teal">Clients</h4>
                <hr/>
                <span className="w3-tag w3-pink w3-text-white w3-padding"><Link className="w3-text-white" to="/createGroup">New</Link></span>
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
    const items = state.firestore.ordered.financialGroups
    
    return{
        items: items,
        auth: state.firebase.auth
    }
}

export default compose (
    connect(mapStateToProps), 
        firestoreConnect( [
            { collection: 'financialGroups', orderBy: ['groupName', 'asc'] }
        ]) )( GroupList )