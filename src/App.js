import './styles/App.css';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <h1>Weather app</h1>
     <Weather/>
     <Footer/>
    </div>
  );
}

export default App;
