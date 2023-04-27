import { useState, useEffect } from "react";
import UserContext from './UserContext';
//import { getUser } from '../../services/user';


const UserProvider = ({ children, userId }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        if(userId){
            //TO SERVER BY ID
            const res = await fetchData(`http://localhost:8000/user/${userId}`)
                setData(res)
            
        }
    }, [userId]);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;