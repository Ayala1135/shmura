import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import UserContext from './userContext';
import React, { useState, useContext, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import fetchDataWithParams from '../hooks/UseGet';


export default function AddNewRecordEvents(props) {
    const names = props.colu;
    const user = useContext(UserContext);
    const toast = useRef(null);
    const [objSignUp, setObjSignUp] = useState([])
    const [visible, setVisible] = useState(false);
    const save = () => {
        toast.current.show({ severity: 'success', summary: 'רשומה נוספה בהצלחה!', detail: 'הפרטים נקלטו במערכת' });
    };
    const handleSubmit = async () => {
        console.log(objSignUp);
        const res = fetchDataWithParams('http://localhost:8000/project', objSignUp);
        console.log(res);
        if (res.data==400) {
            alert("פרטים לא חוקיים. נסי שוב")
        }
        else {
            save();
        }
    }
    const onChange = (key, selected) => {
        console.log(objSignUp)
        setObjSignUp((prev) => ({ ...prev, [key]: selected }));
    }
    return (
        <div className="card flex justify-content-center">
            <Button label="הוספת רשומה חדשה" icon="pi pi-plus" onClick={() => setVisible(true)} />
            <Dialog header="מלאי את הפרטים הבאים על מנת להוסיף רשומה חדשה" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                    <div className="card mr-8 ml-8 mt-8  shadow-8  surface-card  p-7 border-round-sm h-400rem w-80rem flex justify-content-center">
                        <div className="formgrid grid grid">
                            <Toast ref={toast}></Toast>

                            <div className="flex-auto field col col-4">
                                <label htmlFor="calendar-24h" className="block mb-2">
                                    {names[1].label}
                                </label>
                                <Calendar style={{ borderColor: 'transparent', borderWidth: '0px', padding: '6.5' }} onChange={(e) => onChange(names[1].name, e.target.value)}
                                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></Calendar >
                            </div>

                            <div className="flex-auto field col col-4">
                                <label htmlFor="calendar-24h" className="block mb-2">
                                    {names[2].label}
                                </label>
                                <Calendar style={{ borderColor: 'transparent', borderWidth: '0px', padding: '6.5' }} onChange={(e) => onChange(names[2].name, e.target.value)}
                                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></Calendar >
                            </div>

                            <div className="flex-auto field col col-4" >
                                <label htmlFor="text" >
                                    {names[3].label}
                                </label>
                                <InputText onChange={(e) => onChange(names[3].name, e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>

                            <div className="flex-auto field col col-4">
                                <label htmlFor="alphabetic" >
                                    {names[4].label}
                                </label>
                                <InputText onChange={(e) => onChange(names[4].name, e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>

                            <div className="flex-auto field col col-4">
                                <label htmlFor="calendar-24h" className="block mb-2">
                                    {names[5].label}
                                </label>
                                <Calendar style={{ borderColor: 'transparent', borderWidth: '0px', padding: '6.5' }} onChange={(e) => onChange(names[5].name, e.target.value)}
                                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></Calendar >
                            </div>

                            <div className="flex-auto field col col-4">
                                <label htmlFor="calendar-24h" className="block mb-2">
                                    {names[6].label}
                                </label>
                                <Calendar style={{ borderColor: 'transparent', borderWidth: '0px', padding: '6.5' }} onChange={(e) => onChange(names[6].name, e.target.value)}
                                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></Calendar >
                            </div>

                            {/* <div className="flex-auto field col col-2">
                                <label htmlFor="integer" >
                                    {names[++index].label}
                                </label>
                                <InputText list="city" autoComplete="off" type="text" id="city_name" onChange={(e) => onChange(names[index].name, e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></InputText>
                                <datalist id="city">
                                    <option value="אחר">
                                    </option><option value="אופקים">
                                    </option><option value="תל אביב">
                                    </option></datalist>
                            </div> */}

                            <div className='appearance-none outline-none focus: w-full font-bold text-gray-900 flex-auto field col col-3'>
                                <div >
                                    <Button onClick={handleSubmit} label="לאישור והוספה" icon="pi pi-plus" className=" bg-cyan-700 w-5 p-3 mt-6 appearance-none focus:border-primary border-cyan-700" style={{ fontSize: '14px' }}></Button>
                                </div>
                            </div>

                        </div>

                    </div>
                </p>
            </Dialog>
        </div>
    )
}