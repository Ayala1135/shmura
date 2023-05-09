import UserContext from "./userContext";
import React, { useState, useContext, useRef } from "react";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import fetchDataWithParams from "../hooks/UseGet";

export default function TimeAttendance() {
  const toast = useRef(null);
  const user = useContext(UserContext);

  const [datetime24h, setDateTime24h] = useState(null);
  const [datetime, setDateTime] = useState(null);
  const [objSignUp, setObjSignUp] = useState([]);

  const save = () => {
    toast.current.show({
      severity: "success",
      summary: "נוכחות נרשמה",
      detail: "יום טוב!",
    });
  };

  const onChange = (key, selected) => {
    console.log(objSignUp);
    setObjSignUp((prev) => ({ ...prev, [key]: selected }));
  };

  const AddMyAttendance1 = async () => {
    localStorage.setItem("enter", datetime24h);
    save();
  };

  const AddMyAttendance2 = async () => {
    const enter = localStorage.getItem("enter");
    console.log("❤❤❤", datetime);
    // setObjSignUp(enter,datetime)
    //setObjSignUp({ ["idUser"]: user.idUser, ["startAttendance"]: enter, ["endAttendance"]: datetime });
    onChange("idUser", user.idUser)
    onChange("startAttendance", enter)
    onChange("endAttendance", datetime)

    fetchDataWithParams("http://localhost:8000/attendance", objSignUp);

    save();
  };



  return (
    <>
      <Toast ref={toast}></Toast>
      <div className="w-full flex flex-column justify-content-center gap-2 py-5">
        <div className="flex  justify-content-center align-items-center gap-2 ">
          <label
            htmlFor="calendar-24h"
            className="w-6rem"
            style={{ fontWeight: "bold" }}
          >
            שעת כניסה
          </label>
          <Calendar
            id="calendar-24h"
            value={datetime24h}
            onChange={(e1) => setDateTime24h(e1.value)}
            showTime
            p-datepicker-today
            hourFormat="24"
          />
        </div>

        <Button
          onClick={AddMyAttendance1}
          label="סימון שעת כניסה"
          icon="pi pi-user"
          className="w-10rem mx-auto bg-yellow-500 border-yellow-500"
        ></Button>

        <div className="flex flex-wrap justify-content-center align-items-center gap-2 ">
          <label
            htmlFor="calendar"
            className="w-6rem"
            style={{ fontWeight: "bold"}}
          >
            שעת יציאה
          </label>
          <Calendar
            id="calendar"
            value={datetime}
            onChange={(e) => setDateTime(e.value)}
            showTime
            p-datepicker-today
            hourFormat="24"
          />
        </div>

        <Button
          onClick={AddMyAttendance2}
          label="סימון שעת יציאה"
          icon="pi pi-user"
          className="w-10rem mx-auto bg-yellow-500 border-yellow-500"
        ></Button>
      </div>
    </>
  );
}
