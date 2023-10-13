//import logo from './logo_blk.png';
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import './burger'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
       <main>
        <Hero></Hero>
      </main>
    </div>
  );
}

export default App;
