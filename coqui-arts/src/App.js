//import logo from './logo_blk.png';
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Categories from './components/Categories';
import HDIW from './components/HDIW'
import Footer from './components/Footer';
import ListCategory from './components/ListCategory';
import SearchBar from './components/SearchBar';

/*let products = [
  'apples', 'bananas', 'grapefruit', 'kiwi', 'avocados', 
  'lettuce', 'tomatoes', 'cheese', 'bread', 'yogurt', 
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
        <Hero></Hero>
        <Categories></Categories>
        <HDIW></HDIW>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
