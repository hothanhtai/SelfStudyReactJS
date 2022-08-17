
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <div className='app'>
        <Navbar/>
        <MainContent/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
