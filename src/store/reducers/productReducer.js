const initState = {
    authError: null
}

const productReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATEPRODUCT_ERROR':
                console.log('create product failed');    
            return {
                ...state,
                authError: 'create product failed'
            }
        case 'CREATEPRODUCT_SUCCESS':
            console.log('create product successful');
            return {
                ...state,
                authError: null
            }
        case 'EDITPRODUCT_ERROR':
                console.log('edit product failed');    
            return {
                ...state,
                authError: 'edit product failed'
            }
        case 'EDITPRODUCT_SUCCESS':
            console.log('edit product successful');
            return {
                ...state,
                authError: null
            }
        case 'DELETEPRODUCT_ERROR':
                console.log('delete product failed');    
            return {
                ...state,
                authError: 'delete product failed'
            }
        case 'DELETEPRODUCT_SUCCESS':
            console.log('delete product successful');
            return {
                ...state,
                authError: null
            }
        
        default:
            return state;
    }
}

export default productReducer