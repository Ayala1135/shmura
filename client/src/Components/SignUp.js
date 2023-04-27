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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
        <div >
          <label>עיר</label><br />
          <input className="font-bold block mb-2" list="city" autocomplete="off" type="text" name="fields[עיר]" size="22" id="city_name" style={{ height: "45px", margin: "10px" }} onChange={(e) => onChange("userCity", e.target.value)}></input>
          <datalist id="city">
            <option value="אחר">
            </option><option value="אופקים">
            </option><option value="אלעד">
            </option><option value="אשדוד">
            </option><option value="באר שבע">
            </option><option value="בית חלקיה">
            </option><option value="בית שמש">
            </option><option value="ביתר">
            </option><option value="בני ברק">
            </option><option value="בני ראם">
            </option><option value="גבע בנימין">
            </option><option value="גבעת זאב">
            </option><option value="הר שמואל">
            </option><option value="חדרה">
            </option><option value="חיפה">
            </option><option value="יסודות">
            </option><option value="ירושלים">
            </option><option value="כוכב יעקב">
            </option><option value="מודיעין עילית">
            </option><option value="מתתיהו">
            </option><option value="נתיבות">
            </option><option value="נתניה">
            </option><option value="עמנואל">
            </option><option value="עפולה">
            </option><option value="פתח תקוה">
            </option><option value="צפת">
            </option><option value="קרית גת">
            </option><option value="קרית יערים">
            </option><option value="ראשון לציון">
            </option><option value="רחובות">
            </option><option value="רכסים">
            </option><option value="רמלה">
            </option><option value="רמת גן">
            </option><option value="תל אביב">
            </option></datalist>
        </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div >
        <label>מקום לימודים</label><br />
        <input className="font-bold block mb-2" list="school" autocomplete="off" type="text" name="fields[מקום לימודים]" size="22" id="inp_schoolName" style={{ height: "45px", margin: "10px" }} onChange={(e) => onChange("userStudyPlace", e.target.value)}></input>
        <datalist id="school">
          <option value="אחר"></option>
          <option value="מאיר"></option>
          <option value="הלדסהיימר"></option>
          <option value="וולף"></option>
          <option value="אלקיים"></option>
          <option value="ישן"></option>
          <option value="חדש"></option>
          <option value="דרכי רחל' ירושלים"></option>
          <option value="כהנא"></option>
          <option value="מעלות"></option>
          <option value="עלי באר"></option>
          <option value="אופקים"></option>
          <option value="אור החיים"></option>
          <option value="אפיקי דעת"></option>
          <option value="בית בינה"></option>
          <option value="אוהל רחל"></option>
          <option value="בית המורה 'גור'"></option>
          <option value="בית יעקב נתניה"></option>
          <option value="בית יעקב חיפה"></option>
          <option value="בית מלכה"></option>
          <option value="בית מרגלית"></option>
          <option value="בנות אלישבע"></option>
          <option value="בנות אסתר"></option>
          <option value="בנות ירושלים"></option>
          <option value="גיטסהד"></option>
          <option value="הרב מאיר"></option>
          <option value="הרב פוירשטיין"></option>
          <option value="אלקיים"></option>
          <option value="חו''ל"></option>
          <option value="ישן"></option>
          <option value="לוסטיג"></option>
          <option value="מורשת בית יעקב"></option>
          <option value="מכון בית יעקב"></option>
          <option value="מרכז בית יעקב, ירושלים"></option>
          <option value="משמרת מאיר"></option>
          <option value="נתיבות הדסה"></option>
          <option value="איילת השחר"></option>
          <option value="שצרנסקי"></option>
          <option value="בית ברכה"></option>
          <option value="וינגרטן"></option>
          <option value="בית רבקה"></option>
          <option value="ואת עלית"></option>
          <option value="ויזניץ"></option>
          <option value="עוז והדר"></option>
          <option value="נאות אסתר"></option>
          <option value="הילדסהיימר"></option>
        </datalist>
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
      <div >
        <label>תחום עיסוק</label><br />
        <input className="font-bold block mb-2" list="business" autocomplete="off" type="text" name="fields[תחום עיסוק]" size="22" id="inp_business" style={{ height: "45px", margin: "10px" }} onChange={(e) => onChange("userBusiness", e.target.value)}></input>
        <datalist id="business">
          <option value="מזכירות"></option>
          <option value="אדריכלות ועיצוב פנים"></option>
          <option value="ביטוח"></option>
          <option value="בנקאות"></option>
          <option value="חשבונאות"></option>
          <option value="הייטק"></option>
          <option value="חינוך"></option>
          <option value="עיצוב וגרפיקה"></option>
          <option value="שיווק, פרסום ומכירות"></option>
          <option value="משאבי אנוש"></option>
          <option value="ייעוץ וטיפול"></option>
        </datalist>
      </div>
      </div>
      <br />

      <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
        <Button onClick={handleSubmit} label="הרשמה" icon="pi pi-user-plus" className="p-button-success"></Button>
      </div>
    </div>
  );
}
