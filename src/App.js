import './App.css';
import AllFeatures from './components/AllFeatures';
import Awards from './components/Awards';
import Benefits from './components/Benefits';
import BiggerSale from './components/BiggerSale/BiggerSale';
import Companies from './components/Companies/Companies';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
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
