import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

export default function TimeAttendance() {
  const [datetime24h, setDateTime24h] = useState(null);
  const [datetime, setDateTime] = useState(null);


  const AddMyAttendance = async () => {
//     var res = await fetchDataWithParams('http://localhost:8000/auth/login', objLogin);
//     console.log(res.data.userRole);
//     props.setIdUser(res.data.idUser);
//     if (res.data.userRole == "5" || res.data.userRole == "6")
//         navigate("/UserPersonalArea")
//     else
//         navigate("/ShmuraManagement")
// }
// const onChange = (key, selected) => {
//     console.log(objLogin)
//     setObjLogin((prev) => ({ ...prev, [key]: selected }));
}

  return (
    <> 
        <div className="w-full flex flex-column justify-content-center gap-2 py-5">
          <div className="flex  justify-content-center align-items-center gap-2 ">
            <label htmlFor="calendar-24h" className="w-6rem" style={{ fontWeight: 'bold' }}>
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

          <div className="flex flex-wrap justify-content-center align-items-center gap-2 ">
            <label htmlFor="calendar" className="w-6rem" style={{ fontWeight: 'bold' }}>
              שעת יציאה
            </label>
            <Calendar
              id="calendar"
              value1={datetime}
              onChange={(e) => setDateTime(e.value1)}
              showTime
              p-datepicker-today
              hourFormat="24"
            />
          </div>


          <Button onClick={AddMyAttendance} label="סימון נוכחות" icon="pi pi-user" className="w-10rem mx-auto bg-yellow-500 border-yellow-500"></Button>

        </div>

    </>
  );
}
