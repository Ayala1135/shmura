import Toolbar from '../Toolbar';
import Login_SignUp from '../Login&SignUp';
import SideBar from '../SideBar';
import MainTitle from '../MainTitle';
import SubMenu from '../SubMenuAttendance';
import PersonalMenue from '../PersonalMenue';
import ContentSideBarUser from '../ContentSideBarUser';
import { margin } from '@mui/system';
import UserContext from '../userContext';
import React, { useState , useContext} from 'react';
import SubNenu from '../SubMenuPersonalArea'


export default function PersonalAreaScreen() {
    const user = useContext(UserContext);
    return(
        <>
        {/* <Toolbar></Toolbar> */}
        <MainTitle title={"האיזור האישי שלי"} icon={"pi pi-id-card"}/>
        <h2 className='text-right mr-3rem' style={{backgroundColor:'var(--surface-ground)', margin:'auto', marginRight:'4rem'}}>שלום {user.userFirstName} {user.userLastName}</h2>
        <SideBar content={<ContentSideBarUser/>}></SideBar>
        <SubNenu label1={"היסטורית הרשמות לאירועים ופרוייקטים"} label2={"כל התשלומים והתרומות שלי"} label3={"הפניות שלי"}/>
        </>
    )
}