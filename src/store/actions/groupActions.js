export const createGroup = (items) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('financialGroups').add({
            ...items, 
            authorId: authorId,
            createdAt: new Date(),
            editedBy: authorId,
            editedAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATEGROUP_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'CREATEGROUP_ERROR', err});
        })
        
    }
};

export const deleteGroup = (items) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        
        const firestore = getFirestore();
        firestore.collection('financialGroups').doc(items).delete().then(() => {
            dispatch({type: 'EDITGROUP_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'EDITGROUP_ERROR', err});
        })
    }
}

export const editGroup = (items, key) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('financialGroups').doc(key).set({
            ...items,
            editedBy: authorId,
            editedAt: new Date()
            
        }).then(() => {
            dispatch({type: 'DELETEGROUP_SUCCESS', items});
        }).catch((err) => {
            dispatch({type: 'DELETEGROUP_ERROR', err});
        })
        
    }
};