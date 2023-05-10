import { TabMenu } from 'primereact/tabmenu';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom"
import LoadTable from './LoadTable';
import fetchData from '../hooks/UseGetData';
import LoadTableww from './LoadTable copy';
import yuseDataTable from './DataTable';
import AddNewRecordEvents from './AddNewRecordEvents';
import AddNewRecordRegister from './AddNewRecordRegister';
import { Toast } from 'primereact/toast';


export default function SubMenu(props) {
const toast = useRef(null);
    const columns1 = [
        {
            name: "idProject",
            label: "קוד אירוע / פרויקט",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "startProject",
            label: "תאריך התחלה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "endProject",
            label: "תאריך סיום",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "placeProject",
            label: "מקום",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "descriptionProject",
            label: "תיאור",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "startRegister",
            label: "תאריך תחילת הרשמה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "endRegister",
            label: "תאריך סוף הרשמה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "",
            label: "",
            options: {
                filter: false,
                sort: false,
            customBodyRender: (value, tableMeta)=>{
                return <><i className='pi pi-trash' onClick={()=>{console.log(data,"data delete"); 
                deletefunc(data[tableMeta.rowIndex]) }}></i></>
            }
            },
        },
    ];
    const columns2 = [
        {
            name: "idProject",
            label: "קוד אירוע / פרויקט",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "project.descriptionProject",
            label: "שם אירוע / פרויקט",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "idUser",
            label: "קוד נרשמת",
            options: {
                filter: true,
                sort: true,
            },
        },
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
            name: "statusRegister",
            label: "קוד סטטוס הרשמה",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "statusregister.descriptionStatusRegister",
            label: "סטטוס הרשמה",
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
    let perobj;
    const deletefunc=async(arr)=>{
      //  perobj= await deleteData(`??/${arr[0]}`)
        const err=perobj.message;
        toast.current.show({severity:'info',detail:err})
        //setData....
    }

    const loadMyData = async (num) => {
        try {
            if (num == 1) {
                const res = await fetchData('http://localhost:8000/project')
                setData(res)
            }
            if (num == 2) {
                const res = await fetchData('http://localhost:8000/register')
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
        <div >
            <TabMenu className='text-right mr-3rem' model={items} style={{ direction: 'rtl', marginRight:'4rem' ,marginLeft:'1rem' }}  activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            {press1 && <AddNewRecordEvents colu={columns1} />}
            {press1 && (yuseDataTable(data, columns1, options))}
            {press2 && <AddNewRecordRegister colu={columns2} />}
            {press2 && yuseDataTable(data, columns2, options)}
            {/* <LoadTable data={udata}></LoadTable> */}
            {/* <LoadTableww data={udata} /> */}
        </div>

    )
}