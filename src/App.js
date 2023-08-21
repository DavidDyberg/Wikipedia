import './App.css';
import Languages from './components/languages/languages';
import Header from './components/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
