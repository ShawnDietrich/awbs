
import './App.css';
import Header from './Sections/Header/header';
import Home from './pages/Home';
import Footer from './Sections/Footer/footer';

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Home/>
      </main>
      <footer>
        <Footer/>
      </footer>
    
    </>
  );
}

export default App;
