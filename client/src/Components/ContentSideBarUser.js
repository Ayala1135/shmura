import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from "react-router-dom";
import UserContext from './userContext';
import React, { useState, useContext } from 'react';


export default function ContentSideBarUser() {
    const user = useContext(UserContext);
    // const toast = useRef<Toast>(null);
    const navigate = useNavigate();
    let items = [
        {
            template: (item, options) => {
                return (
                    <label className='align-items-center'>
                        <Avatar icon='pi pi-fw pi-user' className="align-items-center m-auto justify-content-center text-center block" shape="circle"  />
                        <div className="flex flex-column align direction-rtl">
                            <span className="font-bold text-center block">{user.userFirstName} {user.userLastName}</span><br></br>
                            <span className="text-sm text-center block">{user.roleDescription} שמורה</span>
                        </div>
                    </label>
                )
            }
        },
        { separator: true },
        { label: 'פרטים אישיים', icon: 'pi pi-fw pi-user' },
        { label: 'העדפות דיוורים', icon: 'pi pi-send', url: 'https://www.responder.co.il/' },
        { label: 'התנתקות', icon: 'pi pi-sign-out', command: () => { navigate("/") } }
    ];

    return (
        <div className="card flex justify-content-right" style={{ direction: 'rtl' }}>
            {/* <Toast ref={toast} /> */}
            <Menu model={items} style={{ backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: '0px', position: 'fixed', top: '250px', right: '0px', fontSize: '16px', width: '13rem' }} />
        </div>
    )
}
