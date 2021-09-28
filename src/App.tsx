import './App.css';
import { HeaderBar } from './components/HeaderBar';
import { FooterBar } from './components/FooterBar';
import { Calculator} from './components/Calculator';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <div className="big-title">Simple Operation Calculator</div>
      <Calculator></Calculator>
      <div className="big-title">Description on this Project</div>
      <p className = "description">This project was built using React, React Bootstrap and Typescript
        to create a simple calculator that carries out simple operation including
        addition, substraction, division, multiplication. And it is hosted by Github Pages. 
        In this project, expression is inputted by the user and the calculator will check if 
        the expression is correct, then it will evaluate the express. In cases of incorrect
        expression input, calculator will show that the input is invalid.</p>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
