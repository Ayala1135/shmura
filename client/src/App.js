import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Screens/Home';
import Login_SignUp from './Components/Login&SignUp';
import ContentSideBarStaff from './Components/ContentSideBarStaff';
import ContentSideBarUser from './Components/ContentSideBarUser';
import SignUp from './Components/SignUp';
import RequestContent from './Components/RequestContent';
import Rejections from './Components/Rejections';
import BreadCrumbs from './Components/BreadCrumbs';
import MainTitle from './Components/MainTitle';
import SubMenu from './Components/SubMenu';
import SideBar from './Components/SideBar';
import LoadTable from './Components/LoadTable';
import SecretaryScreen from './Components/Screens/SecretaryScreen';
import TimeAttendance from './Components/TimeAttendance';
import LoginScreen from './Components/Screens/LoginScreen';
import SignUpScreen from './Components/Screens/SignUpScreen';
import RequestContentScreen from './Components/Screens/RequestContentScreen';
import PresentUserScreen from './Components/Screens/PresentUserScreen';
import AttendanceScreen from './Components/Screens/AttendanceScreen';
import PresentPaymentScreen from './Components/Screens/PresentPaymentScreen';
import AboutUsScreen from './Components/Screens/AboutUsScreen';

// import { Sidebar } from 'primereact/sidebar';


function App() {
  return (<>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          {/* <Route exact path='/LoadTable' element={< LoadTable />}></Route> */}
          <Route exact path='Login' element={<LoginScreen/>}></Route>
          <Route exact path='SignUp' element={<SignUpScreen/>}></Route>
          <Route exact path='RequestContent' element={<RequestContentScreen/>}></Route>
          <Route exact path='AboutUs' element={<AboutUsScreen/>}></Route>
          
          <Route exact path='SideBar' element={<SideBar/>}></Route>
          


          
          <Route exact path='Attendance' element={<AttendanceScreen/>}></Route>

          <Route exact path='Sign' element={<SignUpScreen/>}></Route>

          <Route exact path='PresentUsers' element={<PresentUserScreen/>}></Route>
          <Route exact path='PresentPayments' element={<PresentPaymentScreen/>}></Route>


          {/* <Route exact path='/EventPresent' element={< EventPresent />}></Route> */}
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;

{/* <div className="App">
      <Login_SignUp/>
      <Home />
      <ContentSideBarStaff />
      <ContentSideBarUser />
      <SignUp />
      <RrequestContent />
      <Rejections />
      <BreadCrumbs/>
      <MainTitle/>
      <SubMenu/>
      <SideBar/>
      <LoadTable/>
      <TimeAttendance/>
      {/* <SecretaryScreen/> */
      //   </div > * /// </>}
}
  