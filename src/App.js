import './styles/App.css';
import Weather from './Weather';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Weather app</h1>
      <div className="container">
        <Weather defaultCity="New York"/>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
