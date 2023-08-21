import './App.css';
import Languages from './components/languages/languages';
import Footer from './components/footer/footer';
import Header from './components/header';

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
