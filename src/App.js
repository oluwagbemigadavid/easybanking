import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import SectionOne from './Components/SectionOne';
import SectionThree from './Components/SectionThree/SectionThree';
import SectionTwo from './Components/SectionTwo/SectionTwo.js';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
