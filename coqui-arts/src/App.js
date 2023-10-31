import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import HDIW from "./components/HDIW";
import Footer from "./components/Footer";
//import ListCategory from './components/ListCategory';
//import SearchBar from './components/SearchBar';

import Login from "./pages/Login";
import Sign from './pages/Sign-up';
import WelcomeCard from "./components/WelcomeCard";
import InfoCards from "./components/InfoCards";


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

        <InfoCards></InfoCards>
    

       </main>
        <Footer></Footer>

    </div>
  );
}

export default App;
