import {createContext, useState, useEffect} from 'react';
import { onAuthStateListener} from '../../ultis/firebase/firebase.util'
//as the value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

useEffect(()=>{
   const unsubcribe = onAuthStateListener((user)=>{
    console.log(user)
    setCurrentUser(user);
   });

    return unsubcribe;
    }, [])

    return<UserContext.Provider value={value}>{children}</UserContext.Provider>
}

{/* <UserProvider>

<app/>
</UserProvider> */}
