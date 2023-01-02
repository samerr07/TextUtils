// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React ,{ useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




// let name = "Somu";
function App() {

  const [mode, setMode] = useState('light');  //Wheteher dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      // document.title = "Install TextUtils Now";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      //   }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = "TextUtils - Light Mode";

    }
  }


  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Let's Learn React With Somu
    //     </a>
    //   </header>
    // </div>
    /* <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div classNameName="container">
      <h3>Hello {name} </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam aspernatur libero unde consequatur laudantium aperiam porro minima fuga exercitationem, fugit delectus tempora rerum nostrum eos beatae, sapiente vero repellendus provident impedit voluptas blanditiis!</p>
    </div> */

    /* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */

    <>

    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About mode={mode} />}/>

            <Route exact path="/" element={<Textform  showAlert={showAlert} mode={mode} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"/>}/>
      </Routes>
          
          
          
        
          
        {/* <Textform showAlert={showAlert} heading = "Enter text to Analyze Below" mode={mode}/> */}
        
        {/* <About/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
