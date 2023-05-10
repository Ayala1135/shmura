import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toast } from "primereact/toast";
import fetchDataWithParams from "../hooks/UseGet";

export default function SignUp() {
  const navigate = useNavigate();
  const [objSignUp, setObjSignUp] = useState([]);
  const toast = useRef(null);
  const save = () => {
    toast.current.show({
      severity: "success",
      summary: "נרשמת בהצלחה!",
      detail: 'פרטי המשתמשת נוספו למערכת "שמורה במבול"',
    });
  };
  const handleSubmit = async () => {
    //try {
    // var res = await fetch('http://localhost:8000/auth/register',{
    //   Method: 'POST',
    //   // Headers: {
    //   //   Accept: 'application.json',
    //   //   'Content-Type': 'application/json'
    //   // },
    //   Body: objSignUp,
    // })
    const res = fetchDataWithParams(
      "http://localhost:8000/auth/register",
      objSignUp
    );
    console.log(res);
    if (res == "1") {
      alert("דואר אלקטרוני זה כבר קיים במערכת");
    } else {
      save();
    }
  };
  const onChange = (key, selected) => {
    //debugger
    console.log(objSignUp);
    setObjSignUp((prev) => ({ ...prev, [key]: selected }));
  };

  return (
    <>
      <div
        className="card m-auto mt-8  shadow-8  surface-card  p-7 border-round-sm h-400rem flex justify-content-center"
        style={{ width: "40%" }}
      >
        <div className="formgrid grid grid">
          <Toast ref={toast}></Toast>

          <div className="appearance-none outline-none focus:border-primary w-full font-bold text-gray-900 flex-auto field col col-6">
            <h2 style={{ textAlign: "right" }}>פרטים מזהים</h2>
          </div>

          <div className="flex-auto field col col-4">
            <label htmlFor="alphanumeric" className="block mb-2">
              דואר אלקטרוני
            </label>
            <InputText
              onChange={(e) => onChange("userEmail", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="flex-auto field col col-4">
            <label htmlFor="alphanumeric" className="block mb-2">
              סיסמה
            </label>
            <InputText
              onChange={(e) => onChange("userPassword", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="appearance-none outline-none focus:border-primary w-full font-bold text-gray-900 flex-auto field col col-6">
            <h2 style={{ textAlign: "right" }}>פרטים אישיים</h2>
          </div>

          <div className="flex-auto field col col-4">
            <label htmlFor="text">שם פרטי</label>
            <InputText
              onChange={(e) => onChange("userFirstName", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="flex-auto field col col-4">
            <label htmlFor="alphabetic">שם משפחה</label>
            <InputText
              onChange={(e) => onChange("userLastName", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="flex-auto field col col-4">
            <label htmlFor="number" className="block mb-2">
              טלפון נייד
            </label>
            <InputText
              onChange={(e) => onChange("userPhone", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="flex-auto field col col-2">
            <label htmlFor="integer">עיר</label>
            <InputText
              list="city"
              autocomplete="off"
              type="text"
              id="city_name"
              onChange={(e) => onChange("userCity", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            ></InputText>
            <datalist id="city">
              <option value="אחר"></option>
              <option value="אופקים"></option>
              <option value="אלעד"></option>
              <option value="אשדוד"></option>
              <option value="באר שבע"></option>
              <option value="בית חלקיה"></option>
              <option value="בית שמש"></option>
              <option value="ביתר"></option>
              <option value="בני ברק"></option>
              <option value="בני ראם"></option>
              <option value="גבע בנימין"></option>
              <option value="גבעת זאב"></option>
              <option value="הר שמואל"></option>
              <option value="חדרה"></option>
              <option value="חיפה"></option>
              <option value="יסודות"></option>
              <option value="ירושלים"></option>
              <option value="כוכב יעקב"></option>
              <option value="מודיעין עילית"></option>
              <option value="מתתיהו"></option>
              <option value="נתיבות"></option>
              <option value="נתניה"></option>
              <option value="עמנואל"></option>
              <option value="עפולה"></option>
              <option value="פתח תקוה"></option>
              <option value="צפת"></option>
              <option value="קרית גת"></option>
              <option value="קרית יערים"></option>
              <option value="ראשון לציון"></option>
              <option value="רחובות"></option>
              <option value="רכסים"></option>
              <option value="רמלה"></option>
              <option value="רמת גן"></option>
              <option value="תל אביב"></option>
            </datalist>
          </div>

          <div className="flex-auto field col col-2">
            <label htmlFor="alphabetic">רחוב</label>
            <InputText
              onChange={(e) => onChange("userStreet", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="flex-auto field col col-2">
            <label htmlFor="integer">מספר בית</label>
            <InputText
              onChange={(e) => onChange("userStreetNumber", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="flex-auto field col col-4">
            <label htmlFor="calendar-24h" className="block mb-2">
              תאריך לידה
            </label>
            <Calendar
              style={{
                borderColor: "transparent",
                borderWidth: "0px",
                padding: "6.5",
              }}
              onChange={(e) => onChange("userBirthday", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            ></Calendar>
          </div>

          <div className="flex-auto field col col-3">
            <label htmlFor="alphanumeric" className="block mb-2">
              מקום לימודים
            </label>
            <InputText
              list="school"
              autocomplete="off"
              type="text"
              id="inp_schoolName"
              onChange={(e) => onChange("userStudyPlace", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            ></InputText>
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

          <div className="flex-auto field col col-3">
            <label htmlFor="integer">שנת סיום לימודים</label>
            <InputText
              onChange={(e) => onChange("userGraduationYear", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="flex-auto field col col-3">
            <label htmlFor="alphanumeric">מקום עבודה</label>
            <InputText
              onChange={(e) => onChange("userJob", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>

          <div className="flex-auto field col col-3">
            <label htmlFor="alphanumeric">תחום עיסוק</label>
            <InputText
              list="business"
              autocomplete="off"
              type="text"
              id="inp_business"
              onChange={(e) => onChange("userBusiness", e.target.value)}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            ></InputText>
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

          <div className="appearance-none outline-none focus: w-full font-bold text-gray-900 flex-auto field col col-3">
            <div className="w-full flex align-items-center justify-content-center m-1">
              <Button
                onClick={handleSubmit}
                label="הרשמה"
                icon="pi pi-user-plus"
                className="bg-cyan-700 p-3 mt-6 appearance-none focus:border-primary border-cyan-700"
                style={{ fontSize: "14px" }}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
