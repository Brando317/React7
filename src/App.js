import "./App.css";
import { useState, UseEffect } from "react";
import formulas from "./array.js";



function App() {
const best = localStorage.getItem("best");  
  
  const [score, setScore] = useState(0)
const [prompt, setPrompt] = useState(0)   
  const [bestScore, setBestScore] = useState(best ? best : 0)


function handleGuess() {
let answer = document.getElementById("edit1")
if (answer.value === formulas[prompt].name) {
setScore(score + 2)
setPrompt(prompt + 1)
answer.value = "";
document.getElementById("prompt").focus();
} else { 
setScore(score - 1)
answer.focus()
}


}


return (
    <div className="App">
      <header className="App-header">
      <p id="prompt">
{ formulas[prompt].formula }

</p>

<p>
  { score } 
  </p>        
        
        
        <input type="text" id="edit1" />
        <button type="submit" id="Answer1" onClick={ handleGuess }> answer </button> 
      </header>
    </div>
  );
}

export default App;
