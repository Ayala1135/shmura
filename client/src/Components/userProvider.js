import { useState, useEffect } from "react";
import UserContext from './userContext';
import fetchData from '../hooks/UseGetData';



const UserProvider = ({ children, idUser }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        if (idUser) {
            console.log(idUser);
            fetchData(`http://localhost:8000/user/filter/${idUser}`).then(user => {
                console.log(user);
                setUser(user[0])
                localStorage.setItem("user", JSON.stringify(user[0]))
            }
            );
            //const res = await fetchData(`http://localhost:8000/user/${user.idUser}`)
            //setUser(idUser)           
        }
    }, [idUser]);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;