import logo from './logo.svg';
import './App.css';

const number = 555;
const singer = { name: "Maruf vai", job: "web developer" }

const singerStyle = {
  color: "purple",
  backgroundColor: "white"
}

function App() {
  return (
    <div className="App">
      <Person name="Naruto" crush="Sakura"></Person>
      <Person name="Uzumaki" crush="Hinata"></Person>
      <h3>New Component Friend</h3>
      <Friend name="Sasuke Uchiha" wife="Sakura"></Friend>
      <Friend name="Minato" wife="Kushino"></Friend>
    </div>
  );
}

// similar in look, different in data

function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <h3>{props.crush}</h3>
      <p>Special: rasengen, Shadow clone</p>
    </div>
  )
}

function Friend(props){
  return(
    <div className='friend'>
      <h1>{props.name}</h1>
      <h3>{props.wife}</h3>
    </div>
  )
}

export default App;
