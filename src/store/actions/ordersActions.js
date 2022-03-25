export const createOrder = (items) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('orders').add({
            ...items, 
            authorId: authorId,
            createdAt: new Date(),
            editedBy: authorId,
            editedAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATEORDER_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'CREATEORDER_ERROR', err});
        })
        
    }
};

export const deleteOrder = (items) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        
        const firestore = getFirestore();
        firestore.collection('orders').doc(items).delete().then(() => {
            dispatch({type: 'EDITORDER_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'EDITORDER_ERROR', err});
        })
    }
}

export const editOrder = (items, key) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('orders').doc(key).set({
            ...items,
            editedBy: authorId,
            editedAt: new Date()
            
        }).then(() => {
            dispatch({type: 'DELETEORDER_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'DELETEORDER_ERROR', err});
        })
        
    }
};