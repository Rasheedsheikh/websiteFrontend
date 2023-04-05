// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Career from './Components/Career';
import Apply from './Components/Apply';
import { Routes, Route} from 'react-router-dom'
import Fill from './Components/Fill';
import Learn from './Components/Learn';
// import Slider from './Components/Slider';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// import Calender from './Components/Calender';
import Mui from "./Components/Mui"
import Mapp from './Components/Mapp';
import Learnn from './Components/Learnn';
import Careerm from './Components/Careerm';
import SolPage from './Components/SolPage';
import SolutionDetail from './Components/SolutionDetail';


function App() {
  return (
    <div className="App">
  <Routes>
    
    <Route path="/" element={<Home/>}/>
        <Route path="/career" element ={<Career/>}/>
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/career/:id" element={<Apply/>}/>
       <Route path="/fill/:id" element={<Fill/>}/>
       <Route path="/learn" element={<Learn/>}/>
     
       <Route path="/navbar" element={<Navbar/>}/>
       <Route path="/footer" element={<Footer/>}/>
       {/* <Route path="/calender" element={<Calender/>}/> */}
       {/* <Route path="/fillmain" element={<FillMain/>}/> */}
       <Route path="/mui" element={<Mui/>}/>
       <Route path="/mapp"element={<Mapp/>}/>
       <Route path="/learnn"element={<Learnn/>}/>
       <Route path="/careerm" element={<Careerm/>}/>
       <Route path="/sol" element={<SolPage/>}/>
       <Route path="/solm" element={<SolutionDetail/>}/>
      

  </Routes>
    </div>
  );
}

export default App;
