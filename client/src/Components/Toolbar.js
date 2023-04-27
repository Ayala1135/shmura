import { TabMenu } from 'primereact/tabmenu';
import {useNavigate} from "react-router-dom"
import logo_shmura from '../Pictures-Video/logo_shmura.png'

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
        <div className="top-bar"></div>
        <div className="header">
        <img src={logo_shmura} alt="logo" className="logo" style={{ width: '8%', height:'8%'  }} />
                <TabMenu model={items} style={{ marginBottom: 0 }} />
            </div>
        <div style={{ position: '-moz-initial',  marginTop: '17', top: '20', left: '0',  width:' 100%', height: '20px',
          background: 'linear-gradient(to right, #add8e6, #87cefa, #6495ed)', transition: 'background-color 0.5s ease-in-out'}}></div>
        </>

    
      
    )
}