import Toolbar from '../Toolbar';
import Login_SignUp from '../Login&SignUp';
import SideBar from '../SideBar';
import MainTitle from '../MainTitle';
import SubMenu from '../SubMenuEvents';
import ContentSideBarStaff from '../ContentSideBarStaff' 

export default function PresentEventsScreen() {
    return(
        <>
        <Toolbar></Toolbar>
        <MainTitle title={"אירועים ופרוייקטים"} icon={"pi pi-calendar"}></MainTitle>
        <SideBar content={<ContentSideBarStaff />}></SideBar>
        <SubMenu label1={"כל האירועים והפרוייקטים"} label2={"רשומות לפרוייקט"}> </SubMenu>
        </>
    )
}