import React, { useState } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function BreadCrumbs() {

    const items2 = [{ label: 'ניהול שותפות' }, { label: 'ניהול אירועים' }, { label: 'ניהול תשלומים' }];
    const home = { icon: 'pi pi-home', url: 'https:///primereact' }

    return (
        <div >
        <BreadCrumb model={items2} home={home} style={{ paddingRight: '30px' ,direction:'rtl', borderColor:'yellow'}}/>
        </div>
    )
}
