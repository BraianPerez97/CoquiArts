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


/*let products = [
  'apples', 'bananas', 'grapefruit', 'kiwi', 'avocados', 
  'lettuce', 'tomatimport { BrowserRouter, Route, Switch } from 'react-router-dom';oes', 'cheese', 'bread', 'yogurt', 
  'peas', 'carrots', 'broccoli', 'beans', 'pizza',
  'pasta', 'rice', 'cereal', 'butter', 'milk',
  'eggs', 'onions', 'garlic', 'honey', 'soup',
  'salt', 'pepper', 'oregano', 'basil', 'paprika'
<SearchBar  products={products} ></SearchBar>
<ListCategory></ListCategory>
];*/


function App() {
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
