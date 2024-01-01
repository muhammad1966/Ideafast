import './App.css';
import {Navbar, Header, Services, Description, FAQS, Blog, Footer} from './containers'

function App() {
  return (
    <div className="App">
      <div className='head-nac-container'>
        <Navbar />
        <Header />
      </div>
      <div className='app-container'>
        <Services />
        <Description />
        <FAQS />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
