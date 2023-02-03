import './App.css'
import {useState} from 'react';



export default function App() {

  const [name, setName] = useState("");
  const [ gmail , setGmail] = useState("");

  const handlesubmit =(event)=>{
    event.preventDefault();
    alert(`This is your name ${name}  i am right and your gmail is ${gmail} `) 
  }
  
  return (
    <>
      <div className='box'>
      <form onSubmit={handlesubmit}>
        
        <input type="text" placeholder='name'value={name} onChange={(e)=>{
      setName(e.target.value)
        }
        }/> 
     
      
        <input type="gmail" placeholder='gmail' value={gmail} onChange={(e)=>{ setGmail(e.target.value) }} />

        
       <input  type='submit'/>
          </form>
      </div>
      
    
    </>
  )
}
