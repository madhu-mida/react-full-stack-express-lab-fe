
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Footer from "./components/Footer"
import Projects from './pages/Projects';

function App() {

  const URL = "https://ms-react-express-fs-backend.herokuapp.com/"
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects URL={URL} />} />
        <Route path='/about' element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
