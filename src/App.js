import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new incomes 🤑",
];

export default function App() {
  const [step, setStep] = useState(1)
  const [test, setTest] = useState({ name: 'Jonas' })
  const [isOpen,setIsOpen]=useState(true)
  function handlerNext() {
    if (step < 3) setStep(step + 1)
    setTest({name:'selda'})

  }
  function handlerPrevious() {
    if(step>1) setStep(step-1)
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
    {isOpen &&(
     <div className = "steps" >
       <div className="numbers">
         <div className={step>=1?'active':''}>1</div>
         <div className={step>=2?'active':''}>2</div>
         <div className={step>=3?'active':''}>3</div>
     </div>
       <p className="message">Step{step} :{messages[step - 1]}{ test.name}</p>
       <div className="buttons">
         <button style={{backgroundColor: '#7950f2',color:'#fff'}} onClick={handlerPrevious}>Previous</button>
         <button style={{backgroundColor: '#7950f2',color:'#fff'}} onClick={handlerNext}>Next</button>
     </div>
        </div>
     ) }
      </>
  )
}