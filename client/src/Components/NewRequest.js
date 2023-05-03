import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { Toast } from 'primereact/toast';
import fetchDataWithParams from '../hooks/UseGet';
import RequestContent from './RequestContent';


export default function NewRequest() {

  const [objSignUp, setObjSignUp] = useState([])
  const toast = useRef(null);

  const onChange = (key, selected) => {
    debugger
    console.log(objSignUp)
    setObjSignUp((prev) => ({ ...prev, [key]: selected }));
  }


  return (<>


    <div className="card fixed px-8 w-6 ml-8 mt-8  shadow-8  surface-card  p-7 border-round-sm h-400rem w-80rem flex justify-content-center">
      <div className="field">
        <Toast ref={toast}></Toast>

        <div className='appearance-none outline-none focus:border-primary w-full font-bold text-gray-900 flex-auto field col col-6'>
          <h2 style={{ textAlign: 'right' }}>
            טופס פנייה לשמורה
          </h2>
        </div>

        <div className="flex-auto field col ">
          <label htmlFor="alphanumeric">
            למי תרצי לפנות?
          </label>
          <InputText list="Roles" autocomplete="off" type="text" id="inp_business" onChange={(e) => onChange("userBusiness", e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></InputText>
          <datalist id="Roles">
            <option value="מזכירות"></option>
            <option value="הנהלה ראשית - לאה ראם"></option>
            <option value="מוקדנית ייעוץ"></option>
            <option value="מנהלת מועדון שותפות"></option>
            <option value="אחראית פרוייקטים"></option>
            <option value="הנהלת חשבונות"></option>
          </datalist>
        </div>

        <div className="flex-auto field col ">
          <RequestContent className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
        </div>

        <div className='appearance-none outline-none focus: w-full font-bold text-gray-900 flex-auto field col col-3'>
        <div >
          <Button /*onClick={handleSubmit}*/ label="שליחה" icon="pi pi-send" className=" bg-yellow-500 w-3 p-3 mt-6 appearance-none focus:border-primary border-yellow-500" style={{fontSize:'14px'}}></Button>
        </div>
      </div>

      </div>

    </div>

  </>);
}
