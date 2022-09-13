import './App.css';
import Header from './components/Header';
import About from './components/About';
import Metrics from './components/Metricss';
import Talent from './components/Talent';
import Vacancies from './components/Vacancies';
import Talk from './components/Talk';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Metrics />
      <Talent />
      <Vacancies />
      <Talk />
      <Footer />
    </div>
  );
}

export default App;
