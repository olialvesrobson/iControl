const initState = {
    authError: null
}

const clientReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATECLIENT_ERROR':
                console.log('create CLIENT failed');    
            return {
                ...state,
                authError: 'create CLIENT failed'
            }
        case 'CREATECLIENT_SUCCESS':
            console.log('create CLIENT successful');
            return {
                ...state,
                authError: null
            }
        case 'EDITCLIENT_ERROR':
                console.log('edit CLIENT failed');    
            return {
                ...state,
                authError: 'edit CLIENT failed'
            }
        case 'EDITCLIENT_SUCCESS':
            console.log('edit CLIENT successful');
            return {
                ...state,
                authError: null
            }
        case 'DELETECLIENT_ERROR':
                console.log('delete CLIENT failed');    
            return {
                ...state,
                authError: 'delete CLIENT failed'
            }
        case 'DELETECLIENT_SUCCESS':
            console.log('delete CLIENT successful');
            return {
                ...state,
                authError: null
            }
        
        default:
            return state;
    }
}

export default clientReducer