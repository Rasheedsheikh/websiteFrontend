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
import FullStack from './Components/FullStack';
import AiMl from './Components/AiMl';
import Bot from './Components/Bot';
import HomeNav from './Components/HomeNav';
import AdminLogin from './Admin/AdminLogin';
import Login from './Admin/Login';
import IndustriesEdit from './Edit/IndustriesEdit';
import ServiceEdit from './Edit/ServiceEdit';
import ServiceMainEdit from './Edit/serviceMain';
import WhyChooseEdit from './Edit/WhyChooseEdit';
import TestimonialsEdit from './Edit/TestimonialsEdit';
import CommunityEdit from './Edit/CommunityEdit';
import SolutionsEdit from './Edit/SolutionsEdit';
import Whyworkwithus from './Edit/Whyworkwithus';
import CareerEdit from './Edit/CareerEdit';
import ContactEdit from './Edit/ContactEdit';
import SalesforceEdit from './Edit/salesforceEdit';
import FullStackEdit from './Edit/FullStackEdit';
import BotEdit from './Edit/BotEdit';
import AimlEdit from './Edit/AimlEdit';
import SalesMain from './Edit/SalesMain';
import FullstackMain from './Edit/FullstackMain';
import RN from './Components/RN';
// import RN from './Components/RN';


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
       <Route path="/fullstack" element={<FullStack/>}/>
       <Route path="/ai&ml" element={<AiMl/>}/>
       <Route path="/bot" element={<Bot/>}/>
       <Route path="/homenav" element={<HomeNav/>}/>
       <Route path="/adminlogin" element={<AdminLogin/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/industriesedit" element={<IndustriesEdit/>}/>
       <Route path="/serviceedit" element={<ServiceEdit/>}/>
       <Route path="/servicemainEdit" element={<ServiceMainEdit/>}/>
       <Route path="/whychooseedit" element={<WhyChooseEdit/>}/>
       <Route path="/testimonialsedit" element={<TestimonialsEdit/>}/>
       <Route path="/communityedit" element={<CommunityEdit/>}/>
       <Route path="/solutionsedit" element={<SolutionsEdit/>}/>
       <Route path="/whyworkedit" element={<Whyworkwithus/>}/>
       <Route path="/careeredit" element={<CareerEdit/>}/>
       <Route path="/contactedit" element={<ContactEdit/>}/>
       <Route path="/salesforceedit" element={<SalesforceEdit/>}/>
       <Route path="/salesmainedit" element={<SalesMain/>}/>
       <Route path="/fullstackedit" element={<FullStackEdit/>}/>
       <Route path="/fullstackmainedit" element={<FullstackMain/>}/>
       <Route path="/botedit" element={<BotEdit/>}/>
       <Route path="/aimledit" element={<AimlEdit/>}/>

       <Route path="/rn" element={<RN/>}/>


       

  </Routes>
    </div>
  );
}

export default App;
