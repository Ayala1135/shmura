import React from 'react';
//import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import TimeAttendance from './TimeAttendance';
import { useNavigate } from "react-router-dom"



const ContentSideBarStaff = () => {
    //const toast = useRef(null);
    //const router = useRouter();
    const navigate = useNavigate();

    const items = [
        {
            label: 'נתוני שמורה',
            items: [
                {
                    label: 'משתמשות',
                    icon: 'pi pi-users',
                    command: () => { navigate("/PresentUsers") }

                },
                {
                    label: 'תשלומים',
                    icon: 'pi pi-credit-card',
                    command: () => { navigate("/PresentPayments") }
                },
                {
                    label: 'אירועים ופרוייקטים',
                    icon: 'pi pi-calendar',
                    command: () => { navigate("/PresentEvents") }
                }
            ]
        },
        {
            label: 'נוכחות',
            items: [
                {
                    label: 'סימון נוכחות',
                    icon: 'pi pi-check-square',
                    command: () => { navigate("/Attendance") }
                },
                {
                    label: 'מעקב נוכחות',
                    icon: 'pi pi-list',
                    command: () => { navigate("/PresentAttendance") }
                }
            ]
        },
        {
            label: 'משימות',
            items: [

                {
                    label: 'ניהול משימות',
                    icon: 'pi pi-microsoft',
                    command: () => { navigate("/PresentTask") }
                }
            ]
        },
        {
            label: 'התנתקות',
            items: [
                {
                    label: 'יציאה מהחשבון',
                    icon: 'pi pi-sign-out',
                    command: () => { navigate("/") }
                }
            ]
        }
    ];

    return (
        <><div style={{ direction: 'rtl', width: '20rem' }}>
            {/* <Toast ref={toast} /> */}
            <Menu model={items} style={{ backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: '0px', position: 'fixed', top: '250px', right: '0px', fontSize: '16px', width: '13rem' }} />
        </div></>
    )
}

export default ContentSideBarStaff