import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { Toast } from 'primereact/toast';
import fetchDataWithParams from '../hooks/UseGet';


export default function SignUp() {
  const navigate = useNavigate();
  const [objSignUp, setObjSignUp] = useState([])
  const toast = useRef(null);
  const save = () => {
    toast.current.show({ severity: 'success', summary: 'נרשמת בהצלחה!', detail: 'פרטי המשתמשת נוספו למערכת "שמורה במבול"' });
  };
  const handleSubmit = async () => {
    //try {
      fetchDataWithParams('http://localhost:8000/auth/register', objSignUp);
      save();
    //}
    // catch (error) {
    //   console.log(reportError(error));
    //   alert(error)
    // }

  }
  const onChange = (key, selected) => {
    debugger
    console.log(objSignUp)
    setObjSignUp((prev) => ({ ...prev, [key]: selected }));
  }
  return (
    <div className="card">
      <Toast ref={toast}></Toast>
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex-auto">
          <label htmlFor="text" className="font-bold block mb-2">
            שם פרטי
          </label><br />
          <InputText onChange={(e) => onChange("userFirstName", e.target.value)} />
        </div>
        <div className="flex-auto">
          <label htmlFor="alphabetic" className="font-bold block mb-2">
            שם משפחה
          </label><br />
          <InputText onChange={(e) => onChange("userLastName", e.target.value)} />
        </div>
        <div className="flex-auto">
          <label htmlFor="alphabetic" className="font-bold block mb-2">
            רחוב
          </label><br />
          <InputText onChange={(e) => onChange("userStreet", e.target.value)} />
        </div>
        <div className="flex-auto">
          <label htmlFor="integer" className="font-bold block mb-2">
            מספר בית
          </label><br />
          <InputText onChange={(e) => onChange("userStreetNumber", e.target.value)} />
        </div>
        <div className="flex-auto">
          <label htmlFor="alphabetic" className="font-bold block mb-2">
            עיר
          </label><br />
          <InputText onChange={(e) => onChange("userCity", e.target.value)} />
        </div>
        <div className="flex-auto">
          <label htmlFor="calendar-24h" className="font-bold block mb-2">
            תאריך לידה
          </label><br />
          <Calendar onChange={(e) => onChange("userBirthday", e.target.value)}></Calendar >
        </div>
        <div className="flex-auto">
          <label htmlFor="number" className="font-bold block mb-2">
            טלפון נייד
          </label><br />
          <InputText onChange={(e) => onChange("userPhone", e.target.value)} />
        </div>
      </div>
      <div className="flex-auto">
        <label htmlFor="alphanumeric" className="font-bold block mb-2">
          דואר אלקטרוני
        </label><br />
        <InputText onChange={(e) => onChange("userEmail", e.target.value)} />
      </div>
      <div className="flex-auto">
        <label htmlFor="alphanumeric" className="font-bold block mb-2">
          סיסמה
        </label><br />
        <InputText onChange={(e) => onChange("userPassword", e.target.value)} />
      </div>
      <div className="flex-auto">
        <label htmlFor="alphanumeric" className="font-bold block mb-2">
          מקום לימודים
        </label><br />
        <InputText onChange={(e) => onChange("userStudyPlace", e.target.value)} />
      </div>
      <div className="flex-auto">
        <label htmlFor="integer" className="font-bold block mb-2">
          שנת סיום לימודים
        </label><br />
        <InputText onChange={(e) => onChange("userGraduationYear", e.target.value)} />
      </div>
      <div className="flex-auto">
        <label htmlFor="alphanumeric" className="font-bold block mb-2">
          מקום עבודה
        </label><br />
        <InputText onChange={(e) => onChange("userJob", e.target.value)} />
      </div>
      <div className="flex-auto">
        <label htmlFor="alphanumeric" className="font-bold block mb-2">
          תחום עיסוק
        </label><br />
        <InputText onChange={(e) => onChange("userBusiness", e.target.value)} />

      </div><br />

      <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
        <Button onClick={handleSubmit} label="הרשמה" icon="pi pi-user-plus" className="p-button-success"></Button>
      </div>
    </div>
  );
}
