import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Confetti from 'react-dom-confetti';


function App() {
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 500,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  const joinBeta = (e) => {
    e.preventDefault();
    setInvalid(false);
    fetch('https://emailcookiyapi.herokuapp.com/submit', {
            method: "POST",
            headers:{
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                email
            }),
        })
        .then((res)=>{
            if(res.status === 201){
                setConfirmed(true);
            }
            if (res.status === 406){
              setInvalid(true);
            }
        })
        .catch((error)=>{
            console.log("we are here", error) 
        })
  }

  const form = (
    <form onSubmit={joinBeta}>
      <img className="logo" src={logo} alt="Cookiy Logo"/>
      <p>Sign up for our beta!</p>
      <input type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <button type="submit">Join Beta!</button>
      {invalid ? <div style={{color: "red"}}><span>Enter a valid email</span></div> : null}
    </form>
  )
  
  const confimationPage = (
    <div>
      <img className="logo" src={logo} alt="Cookiy Logo"/>
      <p>Thank you so much! You've been registered in our beta!</p>
    </div>
  )

  return (
    <div className="App">
      <div className="content">
        {confirmed ? confimationPage : form }
        <div className="confetti"><Confetti active={confirmed} config = {config}/></div>
      </div>
    </div>
  );
}

export default App;
