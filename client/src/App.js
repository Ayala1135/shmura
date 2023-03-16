import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import EventPresent from './Components/EventsPresent';
import Home from './Components/Home';
import Login_SignUp from './Components/Login&SignUp';
import Secretary from './Components/Secretary';
import User from './Components/User';
import LoadTable from './Components/LoadTable';


function App() {
  return (<>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/LoadTable' element={< LoadTable />}></Route>
          <Route exact path='/EventPresent' element={< EventPresent />}></Route>
        </Routes>
      </div>
    </Router>
          
    </>
    // <div className="App">
    //   <Home/>
    //   <EventPresent/>
    //   {/* <Secretary/> */}
    //   {/* <User/>
      
    // </div>

  );
}

export default App;
