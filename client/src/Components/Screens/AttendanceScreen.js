import SideBar from '../SideBar';
import TimeAttendance from '../TimeAttendance';
import ContentSideBarStaff from '../ContentSideBarStaff';

export default function PresentUserScreen() {
    return(
        <>
        <SideBar content={<ContentSideBarStaff/>}></SideBar>
        <TimeAttendance></TimeAttendance>
       
        </>
    )
}