import React from 'react'

const UserSummary = ({users}) =>{
   
    return(    
        <div className="grey darken-3 card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title amber-text text-accent-3">{users.firstName} {users.lastName}</span>
                <div className="cyan-text text-darken-2">
                    <p><span className="brown-text text-lighten-4">Initial</span> <strong>{users.initials}</strong></p>
                    
                </div>
            </div>
        </div>
    )
}

export default UserSummary