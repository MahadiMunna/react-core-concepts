import logo from './logo.svg';
import './App.css';

const number = 555;
const singer = { name: "Maruf vai", job: "web developer" }

const singerStyle = {
  color: "purple",
  backgroundColor: "white"
}

function App() {
  const heros = ['Naruto','Sasuke','Minato']
  return (
    <div className="App">
      {
        heros.map(hero =><Person name={hero}></Person>)
      }

      {/* <Person name={heros[0]} crush="Sakura"></Person>
      <Person name={heros[1]} crush="Hinata"></Person> */}
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
