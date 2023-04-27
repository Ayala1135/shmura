import ContentSideBarUser from '../ContentSideBarUser';
import SideBar from '../SideBar';
import Toolbar from '../Toolbar';
import image from '../../Pictures-Video/Screenshot_1.png'


export default function UserPersonalAreaScreen() {
    return(
        <>
        <SideBar content={<ContentSideBarUser/>}></SideBar>
        <div style={{fontSize:"18px"}}>
        חברת שמורה יקרה
        <br/>
        ברוכה הבאה לאיזור האישי שלך בשמורה
        <br/>
        כאן תוכלי לצפות בתכנים חדשים, להירשם לכנסים ולפעילויות, לצפות בהיסטוריית 
        הפניות האישיות שלך, לשתף אותנו בכל שאלה שעולה לך, ולפנות אלינו ישירות
        </div><br/>
        <img src={image} style={{width:"70%"}}></img>
        </>
    )
}