import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';
import fetchDataWithParams from '../hooks/UseGet';
import { useNavigate } from "react-router-dom"
import SignUp from './SignUp';
import fetchData from '../hooks/UseGetData';
import UserContext from './userContext';
import React, { useContext } from 'react';
import Toolbar from './Toolbar';
import PersonalAreaScreen from './Screens/PersonalAreaScreen';

export default function Login_SignUp(props) {
    const [objLogin, setObjLogin] = useState([])
    const navigate = useNavigate();

    const handleSubmit = async () => {
        var res = await fetchDataWithParams('http://localhost:8000/auth/login', objLogin);
        console.log(res.data.userRole);
        props.setIdUser(res.data.idUser);
        if (res.data.userRole == "5" || res.data.userRole == "6")
            navigate("/UserPersonalArea")
        else
            navigate("/ShmuraManagement")
    }
    const onChange = (key, selected) => {
        console.log(objLogin)
        setObjLogin((prev) => ({ ...prev, [key]: selected }));
    }
    return (<>
        <Toolbar></Toolbar>
        <div className="card mr-8 ml-8 mt-8  shadow-8  surface-card  p-7 border-round-sm h-400rem w-80rem flex justify-content-center">
            <div className="formgrid grid grid"><br />
                <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5"><br />
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2"><br />
                        <label htmlFor="username" className="w-6rem">
                            מייל
                        </label><br />
                        <InputText id="username" type="text" placeholder='חשבון המייל איתו נרשמת' onChange={(e) => onChange("userEmail", e.target.value)} /><br />
                    </div><br />
                    
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="password" className="w-6rem">
                            סיסמא
                        </label><br />
                        <InputText id="password" type="password" placeholder='הסיסמה שלך' onChange={(e) => onChange("userPassword", e.target.value)} /><br />
                    </div><br />
                    <Button onClick={handleSubmit} label="כניסה" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                </div>

                <Divider layout="vertical" align="center">
                    <div className="inline-flex align-items-center">
                        <b>או</b>
                    </div>
                </Divider>


                <div className="w-full md:w-5 flex align-items-center justify-content-center ">
                    <Button label="הרשמה" icon="pi pi-user-plus" onClick={() => { navigate("/Sign") }} className="p-button-success"></Button>
                </div>
            </div>
        </div>
    </>
    )
}