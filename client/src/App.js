import './App.css';
import EventPresent from './Components/EventsPresent';
import Home from './Components/Home';
import Secretary from './Components/Secretary';

import User from './Components/User';

function App() {
  return (
    <div className="App">
      <Home/>
      <EventPresent/>
      {/* <Secretary/> */}
      {/* <User/> */}
      
    </div>
  );
}

export default App;
