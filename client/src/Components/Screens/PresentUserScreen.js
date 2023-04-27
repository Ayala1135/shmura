import Toolbar from '../Toolbar';
import Login_SignUp from '../Login&SignUp';
import SideBar from '../SideBar';
import MainTitle from '../MainTitle';
import SubMenu from '../SubMenuUsers';
import ContentSideBarStaff from '../ContentSideBarStaff' 

export default function PresentUserScreen() {
    return(
        <>
        <Toolbar></Toolbar>
        <MainTitle title={"משתמשות"} icon={"pi pi-users"}></MainTitle>
        <SideBar content={<ContentSideBarStaff />}></SideBar>
        <SubMenu label1={"נתוני כל המשתמשות"} label2={"נתוני כל השותפות"} label3={"זכאיות למגזין"}> </SubMenu>
        {/* <SubMenu label1={"נתוני כל המשתמשות"} label2={"נתוני כל השותפות"} nav1={"/loadTable"} nav2={"/loadTable"}></SubMenu> */}
        </>
    )
}