import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter, Route,Router,Routes,Switch } from 'react-router-dom';

import OrgChart from './OrgChart';
function App() {
  return (
    <div className="App container-fluid" >
  <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chart" element={<OrgChart />} />
      
      </Routes>
   
    </BrowserRouter>
    </div>
  );
}

export default App;
