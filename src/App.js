import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestJess from './components/TestJess';
import image from './img/Bon.png';
import {Routes, Route} from 'react-router-dom';
import ListOfUsers from './pages/ListOfUsers';
import Registration from './pages/Registration.jsx';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
     <div style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat",width: 1000,
   height: 1000 }}>
     
    
      <TestJess />
      <h1 style={{color: "white"}}>Welcome</h1>
      <h2 style={{color: "white"}}>to my Website!</h2>
      <Routes>
        <Route path="/" element ={<HomePage/>} />
        <Route path="/Login" element ={<LoginPage/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/listofusers" element={<ListOfUsers/>} />
      </Routes>

      </div>
    </>
  );
}

export default App;
