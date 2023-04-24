import { TabMenu } from 'primereact/tabmenu';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import LoadTable from './LoadTable';
import fetchData from '../hooks/UseGetData';
import LoadTableww from './LoadTable copy';


export default function SubMenu(props) {
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
                const res = await fetchData('http://localhost:8000/user')
                setData(res)
                var keys = Object.keys(res[0])
                setCol(keys)
                console.log(col, "sdfghj");
            }
            if (num == 2) {
                const res = fetchData('http://localhost:8000/partner')
                console.log(res);
                setData(res.data)
            }
            console.log(data);
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
            <TabMenu model={items} style={{ direction: 'rtl' }} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            {press1 && <><LoadTableww data={data} col={col} /></>}
            {press2 && <><LoadTableww data={data} /></>}
            {/* <LoadTable data={udata}></LoadTable> */}
            {/* <LoadTableww data={udata} /> */}
        </div>

    )
}