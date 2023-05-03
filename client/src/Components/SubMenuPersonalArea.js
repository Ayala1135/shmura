import { TabMenu } from 'primereact/tabmenu';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import LoadTable from './LoadTable';
import fetchData from '../hooks/UseGetData';
import LoadTableww from './LoadTable copy';
import yuseDataTable from './DataTable';
import UserContext from './userContext';



export default function SubMenu(props) {

    const user = useContext(UserContext);

    const columns1 = [
        {
            name: "project.descriptionProject",
            label: "תיאור פרוייקט",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userFirstName",
            label: "שם הנרשמת - פרטי",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userLastName",
            label: "שם הנרשמת - משפחה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "statusregister.descriptionStatusRegister",
            label: "סטטוס רישום",
            options: {
                filter: true,
                sort: true,
            },
        },
    ];

    const columns2 = [
        {
            name: "user.userFirstName",
            label: "שם פרטי",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userLastName",
            label: "שם משפחה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "startPayment",
            label: "תאריך תחילת תשלום",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "endPayment",
            label: "תאריך סוף תשלום",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "statuspayment.paymentDescription",
            label: "סטטוס תשלום",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "project.descriptionProject",
            label: "מטרת התשלום",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "amountPayment",
            label: "סכום לתשלום",
            options: {
                filter: true,
                sort: true,
            },
        },
    ];

    const columns3 = [
        {
            name: "user.userFirstName",
            label: "שם פרטי משתמשת פותחת פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userLastName",
            label: "שם משפחה משתמשת פותחת פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userFirstName",
            label: "שם פרטי משתמשת מקבלת פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userLastName",
            label: "שם משפחה משתמשת מקבלת פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "startTask",
            label: "תאריך התחלת פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "endTask",
            label: "תאריך סיום פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "statustask.descriptionStatustask",
            label: "סטטוס פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "typetask.descriptionTypetask",
            label: "סוג פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "content",
            label: "תוכן",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "response",
            label: "תגובה",
            options: {
                filter: true,
                sort: true,
            },
        },
    ];

    const options = {
        selectableRows: "none",
        filterType: "dropdown",
    };
    const [products, setProducts] = useState([]);

    const [press1, setPress1] = useState(false);
    const [press2, setPress2] = useState(false);
    const [press3, setPress3] = useState(false);


    const label1 = props.label1
    const label2 = props.label2
    const label3 = props.label3

    const [activeIndex, setActiveIndex] = useState(3);
    const [data, setData] = useState([]);
    const [col, setCol] = useState([]);

    const navigate = useNavigate();

    const loadMyData = async (num) => {
        try {
            if (num == 1) {
                const res = await fetchData(`http://localhost:8000/register/filter/${user.idUser}`)
                setData(res)
            }
            if (num == 2) {
                const res = await fetchData(`http://localhost:8000/payment/filter/${user.idUser}`)
                setData(res)
            }
            if (num == 3) {
                const res = await fetchData(`http://localhost:8000/task/filter/${user.idUser}`)
                setData(res)
            }
        }
        catch (error) { }
    }
    const items = [
        { label: label1, command: () => { setPress1(true); setPress2(false); setPress3(false); loadMyData(1) } },
        { label: label2, command: () => { setPress2(true); setPress1(false); setPress3(false); loadMyData(2) } },
        { label: label3, command: () => { setPress3(true); setPress1(false); setPress2(false); loadMyData(3) } },
    ];

    useEffect(() => { console.log({ col }); }, [col])

    useEffect(() => { console.log({ data }); }, [data])


    return (
        <div className="card">
            <TabMenu model={items} style={{ direction: 'rtl' }} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            {press1 && yuseDataTable(data, columns1, options)}
            {press2 && yuseDataTable(data, columns2, options)}
            {press3 && yuseDataTable(data, columns3, options)}
            {/* <LoadTable data={udata}></LoadTable> */}
            {/* <LoadTableww data={udata} /> */}
        </div>

    )
}