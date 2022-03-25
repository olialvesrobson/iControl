import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { editGroup } from '../../store/actions/groupActions'

export class EditGroup extends Component {
    componentDidMount(){
        this.uploadState()
    }

    state = {
        ...this.props.items
    }

    uploadState = (e) => {
        const { items , id } = this.props
        if (items)
        {
            if (!this.state.productMenu === ''){
                this.setState({
                    ...items,
                    myid: id
                })
            }
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editProduct(this.state, this.props.id)
        this.props.history.push('/groups');
    }
    
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />

        return (
            <div>
                
                <div className="w3-card-2 w3-margin w3-padding w3-center ">
                    <div className="w3-container">
                        <span className="w3-text">Create Group</span>
                    </div>
                    <form className="w3-white" onSubmit={this.handleSubmit} >
                        <div>
                            <label for="groupName" className="w3-left">Name</label>
                            <input type="text" id="groupName" name="groupName" value={this.state.groupName} onChange={this.handleChange} placeholder="client name.."/>
                        </div>
                        
                        <div>
                            <label for="groupType" className="w3-left">Type</label>
                            <select style={{display: "block"}} id="groupType" name="groupType"  value={this.state.groupType} onChange={this.handleChange} >
                                <option value="Incomes" selected>Incomes</option>
                                <option value="Expenses">Expenses</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="groupSubject" className="w3-left">Subject</label>
                            <select style={{display: "block"}} id="groupSubject" name="groupSubject" value={this.state.groupSubject} onChange={this.handleChange} >
                                <option value="Business" selected>Business</option>
                                <option value="Employees">Employees</option>
                                <option value="Food">Food</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Legal">Legal</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Savings or Investments">Savings or Investments</option>
                                <option value="Taxes">Taxes</option>
                                <option value="Transport">Transport</option>
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

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const items = state.firestore.data.groups;
    const item = items ? items[id] : null
    return{
        auth: state.firebase.auth,
        id: id,
        items: item
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        editGroup: (item, key) => dispatch(editGroup(item, key))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(ownProps => [{ collection: 'groups' }])
)(EditGroup)