import Toolbar from '../Toolbar';
import Login_SignUp from '../Login&SignUp';
import SideBar from '../SideBar';
import MainTitle from '../MainTitle';
import SubMenu from '../SubMenuEvents';
import ContentSideBarStaff from '../ContentSideBarStaff';
import UserContext from '../userContext';
import React, { useState , useContext} from 'react'; 

export default function PresentEventsScreen() {
    const user = useContext(UserContext);
    return(
        <>
        <h2 className='text-right mr-3rem ' style={{backgroundColor:'var(--surface-ground)', margin:'auto'}}>{user.userFirstName} {user.userLastName}, {user['role.roleDescription']}</h2>
        <MainTitle title={"אירועים ופרוייקטים"} icon={"pi pi-calendar"}></MainTitle>
        <SideBar content={<ContentSideBarStaff />}></SideBar>
        <SubMenu label1={"כל האירועים והפרוייקטים"} label2={"רשומות לפרוייקט"}> </SubMenu>
        </>
    )
}