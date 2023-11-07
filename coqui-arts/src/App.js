import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Sign from './pages/Sign-up';
import WelcomeCard from "./components/WelcomeCard";
import InfoCards from "./components/InfoCards";
import EditProfileView from "./pages/EditCard";
import Terms from "./pages/Policies/Terms";
import Conditions from "./pages/Policies/Conditions";
import Privacy from "./pages/Policies/Privacy";
import Home from "./pages/Home";
import axios from 'axios';


function App() {
  const [fetchData, setFetchedData] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:3000')
      .then(response => {
        setFetchedData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Nav></Nav>
      <main>

      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path='/sign-up' element={<Sign />}></Route>

        <Route path="/sign-up/welcome" element={<WelcomeCard />}></Route>

        <Route path="/sign-up/welcome/tips" element={<InfoCards />}></Route>
        <Route path="/edit-profile" element={<EditProfileView/>}></Route>

        <Route path="/terms" element={<Terms/>}></Route>
        
        <Route path="/conditions" element={<Conditions/>}></Route>
        
        <Route path="/privacy" element={<Privacy/>}></Route>
      </Routes>

      </main>
    </div>
  );
}

export default App;
