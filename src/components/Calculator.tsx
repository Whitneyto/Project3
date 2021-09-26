import "../assets/stylesheet/calculator.css";

export function Calculator(): JSX.Element {
  return (
    <div className="calculator">
      <div className="box-container">
        <div className="ans-screen">
          <div className="your-input">
            <p>your input : </p>
          </div>
          <div className="ans">
            <p>ans : </p>
          </div>
        </div>
        <div className="button-area">
          <div className="numkey">
            <div className="numkey-row">
              <button>7</button>
              <button>8</button>
              <button>9</button>
            </div>
            <div className="numkey-row">
              <button>4</button>
              <button>5</button>
              <button>6</button>
            </div>
            <div className="numkey-row">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <div className="numkey-row">
              <button className="button0">0</button>
              <button>AC</button>
            </div>
          </div>

          <div className="operation-key">
            <button>+</button>
            <button>-</button>
            <button>x</button>
            <button>/</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
