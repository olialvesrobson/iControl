const initState = {
    authError: null
}

const GroupReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATEGROUP_ERROR':
                console.log('create GROUP failed');    
            return {
                ...state,
                authError: 'create GROUP failed'
            }
        case 'CREATEGROUP_SUCCESS':
            console.log('create GROUP successful');
            return {
                ...state,
                authError: null
            }
        case 'EDITGROUP_ERROR':
                console.log('edit GROUP failed');    
            return {
                ...state,
                authError: 'edit GROUP failed'
            }
        case 'EDITGROUP_SUCCESS':
            console.log('edit GROUP successful');
            return {
                ...state,
                authError: null
            }
        case 'DELETEGROUP_ERROR':
                console.log('delete GROUP failed');    
            return {
                ...state,
                authError: 'delete GROUP failed'
            }
        case 'DELETEGROUP_SUCCESS':
            console.log('delete GROUP successful');
            return {
                ...state,
                authError: null
            }
        
        default:
            return state;
    }
}

export default GroupReducer