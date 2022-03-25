import React from 'react'
import { NavLink } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export function MyMenu () {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        this.props.signOut();
    }
    
    return(
        <div>
            
            <Button style={{height:"50px"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <i className="material-icons">menu</i>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><NavLink to='/'><i className="material-icons">home</i></NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to='/shifts'>Shifts</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to='/Clients'>Clients</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to='/shiftDoneList'>Shift done</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to='/shiftHistoricalList'>Client Last visit</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to='/shiftCashFlowList'>Cash flow</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to='/services'>Services</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to={`/MyAccount`}><i class='material-icons' >account_box</i>Account</NavLink></MenuItem>
                <MenuItem onClick={handleSignOut}>Log Out</MenuItem>
                <MenuItem onClick={handleClose}><NavLink to='/' className='btn center btn-floating amber accent-3 cyan-text text-darken-3'>
                        <b></b>
                    </NavLink></MenuItem>
                
            </Menu>

        </div>
    )
    
}



const mapDispatchToProps=(dispatch) =>{
    return {
        signOut: () => dispatch(signOut())

    }
}

export default connect ( mapDispatchToProps)(MyMenu)