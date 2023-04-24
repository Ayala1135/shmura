import Toolbar from '../Toolbar';
import Login_SignUp from '../Login&SignUp';
import SideBar from '../SideBar';
import MainTitle from '../MainTitle';
import SubMenu from '../SubMenu';

export default function PresentPaymentScreen() {
    return(
        <>
        <Toolbar></Toolbar>
        <SideBar></SideBar>
        <MainTitle title={"תשלומים"} icon={"pi pi-credit-card"}></MainTitle>
        {/* <SubMenu label1={"נתוני כל המשתמשות"} label2={"נתוני כל השותפות"} nav1={"/loadTable"} nav2={"/loadTable"}></SubMenu> */}
        </>
    )
}