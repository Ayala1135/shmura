import { TabMenu } from 'primereact/tabmenu';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import LoadTable from './LoadTable';
import fetchData from '../hooks/UseGetData';
import LoadTableww from './LoadTable copy';
import yuseDataTable from './DataTable';


export default function SubMenu(props) {

    const columns1 = [
        {
            name: "userFirstName",
            label: "שם פרטי",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userLastName",
            label: "שם משפחה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userStreet",
            label: "רחוב",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userStreetNumber",
            label: "מס' בית ",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userCity",
            label: "עיר",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userBirthday",
            label: "תאריך לידה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userPhone",
            label: "טלפון",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userEmail",
            label: "כתובת מייל",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userPassword",
            label: "סיסמה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userStudyPlace",
            label: "מקום לימודים",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userGraduationYear",
            label: "שנת סיום לימודים",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userJob",
            label: "מקום עבודה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "userBusiness",
            label: "תחום עיסוק",
            options: {
                filter: true,
                sort: true,
            },
        },
    ];
    const columns2 = [
        {
            name: "startPartner",
            label: "תחילת שותפות",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "endPartner",
            label: "סיום שותפות",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "amountPerMonth",
            label: "סכום לתשלום לחודש",
            options: {
                filter: true,
                sort: true,
            },
        },
    ];
    const columns3=[{},{}]

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
                const res = await fetchData('http://localhost:8000/user')
                setData(res)
            }
            if (num == 2) {
                const res = await fetchData('http://localhost:8000/partner')
                console.log(res);
                setData(res)
            }
            if (num == 3) {
                const res = await fetchData('http://localhost:8000/???')
                console.log(res);
                setData(res)
            }

        }
        catch (error) { }
    }
    const items = [
        { label: label1, command: () => { setPress1(true); setPress2(false); loadMyData(1) } },
        { label: label2, command: () => { setPress2(true); setPress1(false); loadMyData(2) } },
        { label: label3, command: () => { setPress2(true); setPress1(false); loadMyData(3) } }
    ];

    return (
        <div className="card">
            <TabMenu model={items} style={{ direction: 'rtl' }} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            {press1 && yuseDataTable(data, columns1, options, "משתמשות")}
            {press2 && yuseDataTable(data, columns2, options, "שותפות")}
            {press3 && yuseDataTable(data, columns3, options, "זכאיות מגזין")}
            {/* <LoadTable data={udata}></LoadTable> */}
            {/* <LoadTableww data={udata} /> */}
        </div>

    )
}