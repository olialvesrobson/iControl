import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class MobileMenu extends Component {
    render (){
        
        return(
            
            <nav className="nav-wrapper transparent">
                
                <ul className="center ">
                    <li style={{width: "30%"}}>
                        <NavLink className="btn" to='/createShift'><ion-icon size="large" name="add-circle-outline"/></NavLink>
                    </li>
                    <li style={{width: "30%"}}><NavLink className="btn" to='/Clients'><ion-icon size="large" name="people-outline"/></NavLink></li>
                    <li style={{width: "30%"}}><NavLink className="btn" to='/createClient'><ion-icon size="large" name="person-add-outline"/></NavLink></li>
                    
                </ul>
            </nav>
        )
    }
}

export default MobileMenu