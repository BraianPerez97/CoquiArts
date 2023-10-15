//import logo from './logo_blk.png';
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Categories from './components/Categories';
import HDIW from './components/HDIW'
import Footer from './components/Footer';

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
