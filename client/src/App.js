import './App.css';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router ,Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import Home from './Components/Screens/Home';
import Login_SignUp from './Components/Login&SignUp';
import ContentSideBarStaff from './Components/ContentSideBarStaff';
import ContentSideBarUser from './Components/ContentSideBarUser';
import SignUp from './Components/SignUp';
import RequestContent from './Components/RequestContent';
import Rejections from './Components/Rejections';
import BreadCrumbs from './Components/BreadCrumbs';
import MainTitle from './Components/MainTitle';
import SubMenu from './Components/SubMenuUsers';
import SideBar from './Components/SideBar';
import LoadTable from './Components/LoadTable';
import SecretaryScreen from './Components/Screens/SecretaryScreen';
import TimeAttendance from './Components/TimeAttendance';
import SignUpScreen from './Components/Screens/SignUpScreen';
import ContactUsScreen from './Components/Screens/ContactUsScreen';
import PresentUserScreen from './Components/Screens/PresentUserScreen';
import AttendanceScreen from './Components/Screens/AttendanceScreen';
import PresentPaymentScreen from './Components/Screens/PresentPaymentScreen';
import AboutUsScreen from './Components/Screens/AboutUsScreen';
import PresentEventsScreen from './Components/Screens/PresentEventsScreen';
import PresentAttendanceScreen from './Components/Screens/PresentAttendanceScreen';
import PresentTaskScreen from './Components/Screens/PresentTaskScreen';
import PersonalAreaScreen from './Components/Screens/PersonalAreaScreen';
import UserProvider from './Components/userProvider';
import ShmuraManagement from './Components/Screens/ShmuraManagement';
import NewRequest from './Components/NewRequest';




// import { Sidebar } from 'primereact/sidebar';


function App() {
  const [idUser, setIdUser] = useState('');

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user")
    console.log("++++++++++",userFromLocalStorage);
    if (!userFromLocalStorage) return;
    const parsedUser = JSON.parse(userFromLocalStorage)
    console.log({ parsedUser });
    setIdUser(parsedUser.idUser)
  }, []);

  const setUserIdCallback = (id) => {
    setIdUser(id);
  }
  return (<>
    <UserProvider idUser={idUser}>
        <div className="App">
          {/* <Home></Home> */}
        {/* {idUser === '' ? <Login_SignUp setIdUser={setUserIdCallback}></Login_SignUp> : */}
        <Routes>
        {/* <Router>        */}
           <Route exact path='/' element={< Home />}></Route>
            <Route exact path='Login' element={<Login_SignUp setIdUser={setUserIdCallback}/>}></Route>
            <Route exact path='SignUp' element={<SignUpScreen/>}></Route>
            <Route exact path='RequestContent' element={<ContactUsScreen/>}></Route>
            <Route exact path='AboutUs' element={<AboutUsScreen/>}></Route>
            
            <Route exact path='SideBar' element={<SideBar/>}></Route>
            <Route exact path='Attendance' element={<AttendanceScreen/>}></Route>
  
            <Route exact path='Sign' element={<SignUpScreen/>}></Route>
  
            <Route exact path='ShmuraManagement' element={<ShmuraManagement/>}></Route>
            <Route exact path='PresentUsers' element={<PresentUserScreen/>}></Route>
            <Route exact path='PresentPayments' element={<PresentPaymentScreen/>}></Route>
            <Route exact path='PresentEvents' element={<PresentEventsScreen/>}></Route>
            <Route exact path='PresentAttendance' element={<PresentAttendanceScreen/>}></Route>
            <Route exact path='PresentTask' element={<PresentTaskScreen/>}></Route>
  
            <Route exact path='UserPersonalArea' element={<PersonalAreaScreen/>}></Route>
  
            <Route exact path='nr' element={<NewRequest/>}></Route>
            
            {/* </Router>   */}
            </Routes>
                </div>
      </UserProvider>
    </>
    );
}

export default App;

  