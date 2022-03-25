export const createProduct = (items) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('products').add({
            ...items, 
            authorId: authorId,
            createdAt: new Date(),
            editedBy: authorId,
            editedAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATEPRODUCT_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'CREATEPRODUCT_ERROR', err});
        })
        
    }
};

export const deleteProduct = (items) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        
        const firestore = getFirestore();
        firestore.collection('products').doc(items).delete().then(() => {
            dispatch({type: 'EDITPRODUCT_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'EDITPRODUCT_ERROR', err});
        })
    }
}

export const editProduct = (items, key) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('products').doc(key).set({
            ...items,
            editedBy: authorId,
            editedAt: new Date()
            
        }).then(() => {
            dispatch({type: 'DELETEPRODUCT_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'DELETEPRODUCT_ERROR', err});
        })
        
    }
};