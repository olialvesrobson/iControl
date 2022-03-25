export const createClient = (items) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('clients').add({
            ...items, 
            authorId: authorId,
            createdAt: new Date(),
            editedBy: authorId,
            editedAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATECLIENT_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'CREATECLIENT_ERROR', err});
        })
        
    }
};

export const deleteClient = (items) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        
        const firestore = getFirestore();
        firestore.collection('clients').doc(items).delete().then(() => {
            dispatch({type: 'EDITCLIENT_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'EDITCLIENT_ERROR', err});
        })
    }
}

export const editClient = (items, key) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('clients').doc(key).set({
            ...items,
            editedBy: authorId,
            editedAt: new Date()
            
        }).then(() => {
            dispatch({type: 'DELETECLIENT_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'DELETECLIENT_ERROR', err});
        })
        
    }
};