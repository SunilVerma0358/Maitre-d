
import './App.css';
import './compontents/button';
import Herosection from './compontents/navbar';
import Maitredsection from './compontents/martred';
import Features from './compontents/Features';
import Modules from './compontents/Modules';
import Pricing from './compontents/Pricing';
import Contact from './compontents/Contact';
import Footer from './compontents/footer';

function App() {
    return ( 
      <div className = "App">
       
       <Herosection/>
  <Maitredsection/>
  <Features/>
  <Modules/>
  <Pricing/>
  <Contact/>
  <Footer/></div>
        

    );
}

export default App;