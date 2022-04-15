import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Home from './pages/Home';
import Footer from './Footer/footer';

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
