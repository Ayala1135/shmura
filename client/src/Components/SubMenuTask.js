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
            name: "idOpenUser",
            label: "קוד משתמשת פותחת משימה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userFirstName",
            label: "שם פרטי משתמשת פותחת",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userLastName",
            label: "שם משפחה משתמשת פותחת",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "idDestinationUser",
            label: "קוד משתמשת מקבלת משימה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userFirstName",
            label: "שם פרטי משתמשת מקבלת",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userLastName",
            label: "שם משפחה משתמשת מקבלת",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "startTask",
            label: "תאריך התחלת משימה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "endTask",
            label: "תאריך סיום משימה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "statustask.descriptionStatustask",
            label: "סטטוס משימה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "typetask.descriptionTypetask",
            label: "סוג משימה",
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

    const columns2 = [
        {
            name: "idOpenUser",
            label: "קוד משתמשת פותחת פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userFirstName",
            label: "שם פרטי משתמשת פותחת",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userLastName",
            label: "שם משפחה משתמשת פותחת",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "idDestinationUser",
            label: "קוד משתמשת מקבלת פנייה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userFirstName",
            label: "שם פרטי משתמשת מקבלת",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "user.userLastName",
            label: "שם משפחה משתמשת מקבלת",
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



    const label1 = props.label1
    const nav1 = props.nav1
    const label2 = props.label2
    const nav2 = props.nav2

    const [activeIndex, setActiveIndex] = useState(3);
    const [data, setData] = useState([]);
    const [col, setCol] = useState([]);

    const navigate = useNavigate();

    const loadMyData = async (num) => {
        try {
            if (num == 1) {
                const res = await fetchData(`http://localhost:8000/task/filter/${user.idUser}`)
                setData(res)
            }
            if (num == 2) {
                const res = await fetchData('http://localhost:8000/task/contact')
                setData(res)
            }
        }
        catch (error) { }
    }
    const items = [
        { label: label1, command: () => { setPress1(true); setPress2(false); loadMyData(1) } },
        { label: label2, command: () => { setPress2(true); setPress1(false); loadMyData(2) } }
    ];

    useEffect(() => { console.log({ col }); }, [col])

    useEffect(() => { console.log({ data }); }, [data])


    return (
        <div className="card">
            <TabMenu model={items} className='text-right mr-3rem' style={{ direction: 'rtl', marginRight:'4rem' ,marginLeft:'1rem' }} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            {press1 && yuseDataTable(data, columns1, options)}
            {press2 && yuseDataTable(data, columns2, options)}
            {/* <LoadTable data={udata}></LoadTable> */}
            {/* <LoadTableww data={udata} /> */}
        </div>
    )
}