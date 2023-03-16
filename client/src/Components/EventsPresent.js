
// import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { BreadCrumb } from 'primereact/breadcrumb';

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import LoadTable from './LoadTable';
//  import { ProductService } from './service/ProductService';

export default function EventPresent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {label: 'כל האירועים והפרוייקטים'},
        {label: 'רשומות לפרוייקטים'}
      
    ];

    const items2 = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home = { icon: 'pi pi-home', url: 'https:///primereact' }

    return (
        <div className="card">
            <BreadCrumb model={items2} home={home} style={{ paddingRight: '30px' ,direction:'rtl', borderColor:'white'}}/>
            <Divider align="right" style={{ fontSize: '20px' , direction:'ltr'}}>
                <div className="inline-flex align-items-center" style={{ fontSize: '20px' ,direction:'rtl'}}>
                    <i className="pi pi-calendar mr-2 " style={{ fontSize: '20px' ,direction:'rtl'}}></i>
                    <b style={{ fontSize: '20px' , direction:'ltr'}}>אירועים ופרוייקטים</b>
                </div>
            </Divider>
            {/* <h3 style={{ paddingRight: '30px' }}>רשימת אירועים</h3> */}
            {/* <Divider /> */}
            <div className="card">
                {/* <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" /> */}
                <TabMenu model={items} style={{direction:'rtl'}} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}  />
            </div>
             {/* קריאה לקומפוננטת טבלה */}
             <LoadTable/>
        </div>
    )
}