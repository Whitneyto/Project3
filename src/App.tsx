import './App.css';
import { HeaderBar } from './components/HeaderBar';
import { FooterBar } from './components/FooterBar';
import { Calculator} from './components/Calculator';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <p className="big-title">Simple Operation Calculator</p>
      <Calculator></Calculator>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
