import './styles/App.css';
import Weather from './components/Weather';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Weather app</h1>
      <div className="container">
        <Weather defaultCity="New York"/>
      </div>
      <footer><Footer/></footer>
    </div>
    
  );
}

export default App;
