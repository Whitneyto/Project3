import "../assets/stylesheet/calculator.css";
import { assignNum, operationKey, op } from "../scripts/calculation";
import { AddOperation } from "../interfaces/screen";
import  { useState } from "react";


let input = "";
let operate = [0,0,0,0];
let num1 :number =0;
let num2 :number =0;
let err : string = "";
export function Calculator(): JSX.Element {
  function Input(userInput: string) {
    return (input = input + userInput);
  }
  const [i, setI] = useState<string>(input);
  const [a, setA] = useState<number>(0);

  return (
    <div className="calculator">
      <div className="box-container">
        <div className="ans-screen">
          <div className="your-input">Input: {i} </div>
          <div className="ans">
            <p>ans : {a} {err}</p>
          </div>
        </div>
        <div className="button-area">
          <div className="numkey">
            <div className="numkey-row">
              <button onClick={() => {Input("7");setI(input);}}>7</button>
              <button onClick={() => {Input("8");setI(input);}}>8</button>
              <button onClick={() => {Input("9");setI(input);}}>9</button>
            </div>
            <div className="numkey-row">
            <button onClick={() => {Input("4");setI(input);}}>4</button>
              <button onClick={() => {Input("5");setI(input);}}>5</button>
              <button onClick={() => {Input("6");setI(input);}}>6</button>
            </div>
            <div className="numkey-row">
            <button onClick={() => {Input("1");setI(input);}}>1</button>
              <button onClick={() => {Input("2");setI(input);}}>2</button>
              <button onClick={() => {Input("3");setI(input);}}>3</button>
            </div>
            <div className="numkey-row">
              <button className="button0" onClick={() => {Input("0");setI(input);}}>0</button>
              <button onClick={() => {input="";setI("");operate = [0,0,0,0];setA(0);err = ""}}>AC</button>
            </div>
          </div>

          <div className="operation-key">
            <button onClick={() => {Input("+");setI(input);operate[0]+=1;num1=parseInt(i);}}>+</button>
            <button onClick={() => {Input("-");setI(input);operate[1]+=1;num1=parseInt(i);}}>-</button>
            <button onClick={() => {Input("x");setI(input);operate[2]+=1;num1=parseInt(i);}}>x</button>
            <button onClick={() => {Input("/");setI(input);operate[3]+=1;num1=parseInt(i);}}>/</button>
            <button onClick={()=>{
            if (!isNaN(Number(assignNum(operationKey(operate),input,num1)))){
                num2=assignNum(operationKey(operate),input,num1);setA(op(operate,num1,num2))
            }
            else{
                setA(0);err="ERROR";
            }}}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
