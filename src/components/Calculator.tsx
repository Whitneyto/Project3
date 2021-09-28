import "../assets/stylesheet/calculator.css";
import  { useState } from "react";
import { ButtonNumInput } from "./ButtonNumInput";

let inputStr : string = "";
export function updateInput(i:string){
  return inputStr = inputStr + i;

}

export function Calculator(): JSX.Element {
  const [ans, setAns] = useState<string>("");
  const [input, setInput] = useState<string>("");
  return (
    <div className="calculator">
      <div className="box-container">
        <div className="ans-screen">
          <div className="your-input"><p>Input: {input}</p> </div>
          <div className="ans"><p>Ans: {ans}</p></div>
        </div>
        <div className="button-area">
          <ButtonNumInput 
          setIn={setInput} 
          setAns={setAns}
          ></ButtonNumInput>
        </div>
      </div>
    </div>
  );
}
