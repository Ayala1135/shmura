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


export default function PersonalEreaScreen() {

    //const {user} = useContext(UserContext);
    return(
        <>
        <Toolbar></Toolbar>
        <MainTitle title={"האיזור האישי שלי"} icon={"pi pi-id-card"}/>
        <h2 style={{textAlign:'right' ,marginRight:'35px'}}>שלום </h2>
        <SideBar content={<ContentSideBarUser/>}></SideBar>
        <PersonalMenue/>
        </>
    )
}