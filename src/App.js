import './App.css';
import AllFeatures from './components/AllFeatures';
import Awards from './components/Awards';
import Benefits from './components/Benefits';
import BiggerSale from './components/BiggerSale/BiggerSale';
import Companies from './components/Companies/Companies';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Container>
        <Header />
        <BiggerSale />
        <Benefits />
      </Container>
      <Awards />
      <Container>
        <AllFeatures />
        <Companies />
      </Container>
      <Footer />
      <div
        style={{ height: '160px', backgroundColor: '#fff', width: '1920px' }}
      ></div>
    </div>
  );
}

export default App;
