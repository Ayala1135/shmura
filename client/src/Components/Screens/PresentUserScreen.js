import Toolbar from '../Toolbar';
import Login_SignUp from '../Login&SignUp';
import SideBar from '../SideBar';
import MainTitle from '../MainTitle';
import SubMenu from '../SubMenu';

export default function PresentUserScreen() {
    return(
        <>
        <Toolbar></Toolbar>
        <MainTitle title={"משתמשות"} icon={"pi pi-users"}></MainTitle>
        <SideBar></SideBar>
        <SubMenu label1={"נתוני כל המשתמשות"} label2={"נתוני כל השותפות"}> </SubMenu>
        {/* <SubMenu label1={"נתוני כל המשתמשות"} label2={"נתוני כל השותפות"} nav1={"/loadTable"} nav2={"/loadTable"}></SubMenu> */}
        </>
    )
}