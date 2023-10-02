import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Resource from './components/Resource';
import Course from './components/Course';
function App() {
  return (<>

    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      <Routes>
      <Route path="/" element={<Login/>}>
      </Route>
      <Route path="/Home" element={<Home/>}>
      </Route>
      <Route path="/Course/:type" element={<Course/>}>
      </Route>
      <Route path="/Resource/:name/:course" element={<Resource/>}>
      </Route>
    </Routes>
      </BrowserRouter>
    </div>
  </>
  );
}

export default App;
