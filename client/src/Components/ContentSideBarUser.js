import React from 'react'; 
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from "react-router-dom"


export default function ContentSideBarUser() {
    // const toast = useRef<Toast>(null);
    const navigate = useNavigate();
    let items = [
        { template: (item, options) => {
            return (
                <label stile={{borderColor:'white'}} className=' align-items-center'>
                    <Avatar icon='pi pi-fw pi-user' className="align-items-center"  shape="circle" />
                    <div  className="flex flex-column align direction-rtl">
                        <span className="font-bold ">אילה בא-גד</span><br></br>
                        <span className="text-sm">חברת שמורה</span>
                    </div>
                </label>
            )}},  
            { separator: true},
        { label: 'פרטים אישיים' , icon: 'pi pi-fw pi-user' },
        { label: 'הרשמה לאירוע', icon: 'pi pi-calendar-plus' },
        { label: 'העדפות דיוורים', icon: 'pi pi-send', url: 'https://www.responder.co.il/'},
        { label: 'פניות', icon: 'pi pi-comment' },
        { label: 'התנתקות' , icon: 'pi pi-sign-out', command:()=>{navigate("/")}}
    ];

    return (
        <div className="card flex justify-content-right" style={{direction:'rtl'}}>
            {/* <Toast ref={toast} /> */}
            <Menu model={items } style={{direction:'rtl',borderColor:'white'}}/>
        </div>
    )
}
        