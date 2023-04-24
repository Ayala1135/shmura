import { TabMenu } from 'primereact/tabmenu';
import {useNavigate} from "react-router-dom"


export default function Toolbar() {
    const navigate = useNavigate();
    const items = [
        { label: 'דף הבית', icon: 'pi pi-fw pi-home', command:()=>{navigate("/")}},
        { label: 'כניסה', icon: 'pi pi-fw pi-sign-in', command:()=>{navigate("/Login")}},
        { label: 'הרשמה', icon: 'pi pi-fw pi-user-plus', command:()=>{navigate("/SignUp")}},
        { label: 'קצת עלינו', icon: 'pi pi-fw pi-book' , command:()=>{navigate("/AboutUs")}},
        { label: 'צרי קשר', icon: 'pi pi-fw pi-comments', command:()=>{navigate("/RequestContent")} }
    ];

    return (
        <>
            <div className="card" style={{ direction: 'rtl' }}>
                <TabMenu model={items} />
            </div>
        </>
    )
}