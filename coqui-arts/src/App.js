//Dependecies
import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//Components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import UserGallery from "./components/UserGallery";

import Sign from './pages/Sign-up';
import WelcomeCard from "./components/WelcomeCard";
import InfoCards from "./components/InfoCards";
import NameForm from "./pages/EditCard";
import UserProfile from "./components/UserProfile";

import Terms from "./pages/Policies/Terms";
import Usage from "./pages/Policies/Usage";
import Privacy from "./pages/Policies/Privacy";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]); 

 useEffect(() => {
    //Bring user by categories
    axios
      .get("http://localhost:5001/api/user")
      .then((response) => {
        setUsers([...response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Nav></Nav>
       <main>

      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/:category" element={<UserProfile users={users} />}></Route>

        <Route path="/user/:id" element={<UserProfile />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path='/sign-up' element={<Sign />}></Route>

        <Route path="/sign-up/welcome" element={<WelcomeCard />}></Route>

        <Route path="/sign-up/welcome/tips" element={<InfoCards />}></Route>

        <Route path="/edit-profile" element={<NameForm/>}></Route>

        <Route path='/about-us' element={<About />}></Route>

         <Route path='/faq' element={<FAQ />}></Route>

        <Route path="/terms" element={<Terms/>}></Route>
        
        <Route path="/usage" element={<Usage />}></Route>
        
        <Route path="/privacy" element={<Privacy/>}></Route>
      </Routes>

       </main>
    </div>
  );
}

export default App;
