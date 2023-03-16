import React from 'react';
//import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
         



const Secretary = () => {
    //const toast = useRef(null);
    //const router = useRouter();
    const items = [
        {
            label: 'נתוני שמורה',
            items: [
                {
                    label: 'משתמשות',
                    icon: 'pi pi-users',

                },
                {
                    label: 'תשלומים',
                    icon: 'pi pi-credit-card',

                },
                {
                    label: 'אירועים ופרוייקטים',
                    icon: 'pi pi-calendar',

                }
            ]
        },
        {
            label: 'נוכחות',
            items: [
                {
                    label: 'סימון נוכחות',
                    icon: 'pi pi-check-square',

                },
                {
                    label: 'מעקב נוכחות',
                    icon: 'pi pi-list',

                }
            ]
        },
        {
            label: 'משימות',
            items: [

                {
                    label: 'ניהול משימות',
                    icon: 'pi pi-microsoft',
                    // command () => {
                    //     //router.push('/fileupload');
                    // }
                }
            ]
        }
    ];

    return (
        <><div style={{direction:'rtl'}}>
            {/* <Toast ref={toast} /> */}
            <Menu model={items} style={{borderColor:'white'}}/>
        </div></>
    )
}

export default Secretary