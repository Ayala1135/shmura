import Toolbar from '../Toolbar';
import Login_SignUp from '../Login&SignUp';
import SideBar from '../SideBar';
import MainTitle from '../MainTitle';
import SubMenu from '../SubMenuTask';
import ContentSideBarStaff from '../ContentSideBarStaff' 

export default function PresentTaskScreen() {
    return(
        <>
        <Toolbar></Toolbar>
        <MainTitle title={"משימות ופניות"} icon={"pi pi-microsoft"}></MainTitle>
        <SideBar content={<ContentSideBarStaff />}></SideBar>
        <SubMenu label1={"כל המשימות"} label2={"כל הפניות"}> </SubMenu>
        </>
    )
}