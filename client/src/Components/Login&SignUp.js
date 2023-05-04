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
        <div className="card  mt-8  shadow-8  surface-card border-round-sm h-400rem w-30rem flex align-items-center justify-content-center m-auto" style={{ padding:'6px'}}>
            <div className="formgrid grid grid align-items-center">
                <div className="w-full flex flex-column justify-content-center gap-2 py-5">
                    
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2 ">
                        <label htmlFor="username" className="w-6rem">
                            מייל
                        </label>
                        <InputText id="username" type="text" placeholder='חשבון המייל איתו נרשמת' onChange={(e) => onChange("userEmail", e.target.value)} />
                    </div>
                    
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="password" className="w-6rem">
                            סיסמא
                        </label>
                        <InputText id="password" type="password" placeholder='הסיסמה שלך' onChange={(e) => onChange("userPassword", e.target.value)} /><br />
                    </div>

                    <Button onClick={handleSubmit} label="כניסה" icon="pi pi-user" className="w-10rem mx-auto bg-yellow-500 border-yellow-500"></Button>

                </div>


                <div className="justify-content-center m-auto">
                <Divider layout="horizontal" align="center" className='w-25rem justify-content-center '>
                    <div className="justify-content-center ">
                        <b>עדיין לא נרשמת?</b>
                    </div>
                </Divider>
                </div>


                <div className="w-full flex align-items-center justify-content-center m-1 ">
                    <Button label="הרשמה" icon="pi pi-user-plus" onClick={() => { navigate("/Sign") }} className='w-10rem mx-auto bg-cyan-700 border-cyan-700'></Button>
                </div>
            </div>
        </div>
    </>
    )
}