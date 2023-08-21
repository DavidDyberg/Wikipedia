import './App.css';
import Languages from './components/languages/languages';
import Header from './components/header';
import Footer from './components/footer/footer';
import SearchBar from './components/searchbar/SearchBar'

function App() {
  return (
    <div className="App">
      <Header/>
      <Languages />
      <SearchBar/>
      <Footer />
    </div>
  );
}

export default App;
