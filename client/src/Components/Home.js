import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   
import 'primereact/resources/primereact.css';                       
import 'primeicons/primeicons.css'; 
//import 'primeflex/primeflex.css';

const Home = () => {

    const items = [
        { label: 'דף הבית', icon: 'pi pi-fw pi-home' },
        { label: 'כניסה', icon: 'pi pi-fw pi-sign-in' },
        { label: 'הרשמה', icon: 'pi pi-fw pi-user-plus' },
        { label: 'קצת עלינו', icon: 'pi pi-fw pi-book' },
        { label: 'צרי קשר', icon: 'pi pi-fw pi-comments'}
    ];


    return (
        <>
            <div className="card">
                <TabMenu model={items} />
            </div>
        </>
    )
}

export default Home