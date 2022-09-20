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
      <Person></Person>
      <Person></Person>
      <h3>New Component Friend</h3>
      <Friend></Friend>
    </div>
  );
}

// similar in look, different in data

function Person() {
  return (
    <div className='person'>
      <h1>Naruto Uzumaki</h1>
      <p>Special: rasengen, Shadow clone</p>
    </div>
  )
}

function Friend(){
  return(
    <div className='friend'>
      <h3>Name: Sasuke Uchiha</h3>
      <p>Special: Chidori</p>
    </div>
  )
}

export default App;
