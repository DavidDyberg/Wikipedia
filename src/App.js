import './App.css';
import Languages from './components/languages/languages';
import Header from './components/header';
import Footer from './components/footer/footer';
import SearchBar from './components/searchbar/SearchBar'
import { useState } from 'react';
import { languages } from './languages';

function App() {

  const [ language, setLanguage ] = useState(languages[0]);

  return (
    <div className="App">
      <Header/>
      <Languages language={language} setLanguage={setLanguage} />
      <SearchBar language={language} setLanguage={setLanguage} />
      <Footer />
    </div>
  );
}

export default App;
