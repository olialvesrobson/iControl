const initState = {
    authError: null
}

const orderReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATEORDER_ERROR':
                console.log('create ORDER failed');    
            return {
                ...state,
                authError: 'create ORDER failed'
            }
        case 'CREATEORDER_SUCCESS':
            console.log('create ORDER successful');
            return {
                ...state,
                authError: null
            }
        case 'EDITORDER_ERROR':
                console.log('edit ORDER failed');    
            return {
                ...state,
                authError: 'edit ORDER failed'
            }
        case 'EDITORDER_SUCCESS':
            console.log('edit ORDER successful');
            return {
                ...state,
                authError: null
            }
        case 'DELETEORDER_ERROR':
                console.log('delete ORDER failed');    
            return {
                ...state,
                authError: 'delete ORDER failed'
            }
        case 'DELETEORDER_SUCCESS':
            console.log('delete ORDER successful');
            return {
                ...state,
                authError: null
            }
        
        default:
            return state;
    }
}

export default orderReducer