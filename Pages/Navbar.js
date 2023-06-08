import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SurveyPage1 from './NewSurvey';
import ResultsPage from './Results';

const NavBar =(props)=>{
    const { onLogout } = props;
return(
    <>
    <Router>

           <nav className="navbar">
   
             <ul>
   
               <li>
   
                 <Link to="/">
   
                   Survey
   
                 </Link>
   
               </li>
   
               <li>
   
                 <Link to="/results">
   
                 
   
                   Results
   
                 </Link>
   
               </li>
               <li>
               <button onClick={onLogout}>Logout</button>
               </li>
   
            
             </ul>
   
           </nav>

               <Routes>
   
                 <Route
   
                   path="/"
   
                   element={<SurveyPage1 onStartSurvey={() => {}} />}
   
                 />
   
                 <Route path="/results" element={<ResultsPage />} />

               </Routes>
       </Router>
         </>
);
}

export default NavBar;