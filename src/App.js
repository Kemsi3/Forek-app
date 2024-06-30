import './assets/stylesheets/App.css';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
