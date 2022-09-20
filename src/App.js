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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* html and css in react */}

        <h1>JSX</h1>
        <div className="container">
          <h3>Hello</h3>
        </div>
        <div className='music'>
          <p style={{
            color: "purple",
            backgroundColor: "white"
          }}>{222 + number}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
        </div>


        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
