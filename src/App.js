import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new incomes 🤑",
];

export default function App() {
  const [step, setStep] = useState(1)
  function handlerNext() {
    if(step<3)setStep(step+1)

  }
  function handlerPrevious() {
    if(step>1) setStep(step-1)
  }
   return (
     <div className="steps">
       <div className="numbers">
         <div >1</div>
         <div >2</div>
         <div >3</div>
     </div>
       <p className="message">Step{step} :{messages[step-1]}</p>
       <div className="buttons">
         <button style={{backgroundColor: '#7950f2',color:'#fff'}} onClick={handlerPrevious}>Previous</button>
         <button style={{backgroundColor: '#7950f2',color:'#fff'}} onClick={handlerNext}>Next</button>
     </div>
     </div>
  )
}