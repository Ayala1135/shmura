import Toolbar from '../Toolbar';
import Login_SignUp from '../Login&SignUp';
import SideBar from '../SideBar';
import MainTitle from '../MainTitle';
import SubMenu from '../SubMenuAttendance';
import ContentSideBarStaff from '../ContentSideBarStaff' 

export default function PresentAttendanceScreen() {
    return(
        <>
        <Toolbar></Toolbar>
        <MainTitle title={"נוכחות יומית"} icon={"pi pi-list"}></MainTitle>
        <SideBar content={<ContentSideBarStaff />}></SideBar>
        <SubMenu label1={"טבלת נוכחות"}> </SubMenu>
        </>
    )
}