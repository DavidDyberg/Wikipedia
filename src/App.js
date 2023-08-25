import './App.css';
import Languages from './components/languages/languages';
import Header from './components/header';
import FooterTop from './components/footerTop/footerTop';
import Footer from './components/footer/footer';
import SearchBar from './components/searchbar/SearchBar'

function App() {
  return (
    <div className="App">
      <Header/>
      <Languages />
      <SearchBar/>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default App;