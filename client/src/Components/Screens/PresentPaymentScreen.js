import Toolbar from '../Toolbar';
import Login_SignUp from '../Login&SignUp';
import SideBar from '../SideBar';
import MainTitle from '../MainTitle';
import SubMenu from '../SubMenuUsers';
import ContentSideBarStaff from '../ContentSideBarStaff';
import UserContext from '../userContext';
import React, { useState , useContext} from 'react';

export default function PresentPaymentScreen() {
    const user = useContext(UserContext);
    return(
        <>
        <Toolbar></Toolbar>  
        <h2 style={{textAlign:'right' ,marginRight:'35px'}}>{user.userFirstName} {user.userLastName}, {user['role.roleDescription']}</h2>  
        <MainTitle title={"תשלומים"} icon={"pi pi-credit-card"}></MainTitle>
        <SideBar content={<ContentSideBarStaff/>}></SideBar>
        <SubMenu label1={"כל התשלומים"} label2={""}> </SubMenu>
        </>
    )
}