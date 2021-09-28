import "../assets/stylesheet/calculator.css";
import { test } from "../scripts/calculation";

let input: string = "";
export function ButtonNumInput({setIn,setAns,}: {setIn: (s: string) => void;setAns: (s: string) => void;}): JSX.Element {
  return (
    <div className="button-area">
      <div className="numkey">
        <div className="numkey-row">
          <button onClick={() => {setIn((input = input + "7"))}}>7</button>
          <button onClick={() => {setIn((input = input + "8"))}}>8</button>
          <button onClick={() => {setIn((input = input + "9"))}}>9</button>
        </div>
        <div className="numkey-row">
          <button onClick={() => {setIn((input = input + "4"))}}>4</button>
          <button onClick={() => {setIn((input = input + "5"))}}>5</button>
          <button onClick={() => {setIn((input = input + "6"))}}>6</button>
        </div>
        <div className="numkey-row">
          <button onClick={() => {setIn((input = input + "1"))}}>1</button>
          <button onClick={() => {setIn((input = input + "2"))}}>2</button>
          <button onClick={() => {setIn((input = input + "3"))}}>3</button>
        </div>
        <div className="numkey-row">
          <button className="button0" onClick={() => {setIn((input = input + "0"))}}>0</button>
          <button className="AC" onClick={() => {input = ""; setIn(""); setAns("")}}>AC</button>
        </div>
      </div>

      <div className="operation-key">
        <button onClick={() => {setIn((input = input + "+"));}}>+</button>
        <button onClick={() => {setIn((input = input + "-"));}}>-</button>
        <button onClick={() => {setIn((input = input + "*"));}}>*</button>
        <button onClick={() => {setIn((input = input + "/"));}}>/</button>
        <button onClick={() => {setAns(test(input));}}>=</button>
      </div>
    </div>
  );
}
