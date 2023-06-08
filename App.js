// // // import React from 'react';
// // // import { BrowserRouter,Routes, Route } from 'react-router-dom';
// // // import './App.css';
// // // import LoginForm from './LoginForm';
// // // import SurveyPage1 from './Pages/FirstPage';
// // // import SurveyPage2 from './Pages/SecondPage';
// // // import SurveyPage3 from './Pages/ThirdPage';
// // // import SurveyPage4 from './Pages/FourthPage';
// // // import SurveyPage5 from './Pages/FifthPage';

// // // function App() {
// // //   return (
// // //     <BrowserRouter>
// // //     <div className="App">
// // //     <div id = "page-body">
// // //       <Routes>
// // //         <Route path= "/" element={<LoginForm/>}/>
// // //         <Route path= "/FirstPage" element={<SurveyPage1/>}/>
// // //         <Route path= "/SecondPage" element={<SurveyPage2/>}/>
// // //         <Route path= "/ThirdPage" element={<SurveyPage3/>}/>
// // //         <Route path= "/FourthPage" element={<SurveyPage4/>}/>
// // //         <Route path= "/FifthPage" element={<SurveyPage5/>}/>
// // //       </Routes>
// // //     </div>
// // //     </div>
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;


// // import React from 'react';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import './App.css';
// // import LoginForm from './LoginForm';
// // import SurveyPage1 from './Pages/FirstPage';
// // import SurveyPage2 from './Pages/SecondPage';
// // import SurveyPage3 from './Pages/ThirdPage';
// // import SurveyPage4 from './Pages/FourthPage';
// // import SurveyPage5 from './Pages/FifthPage';
// // import ResultsPage from './Pages/Results';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <div className="App">
// //         <div id="page-body">
// //           <Routes>
// //             <Route path="/" element={<LoginForm />} />
// //             <Route path="/SurveyPage1" element={<SurveyPage1 />} />
// //             <Route path="/SurveyPage2" element={<SurveyPage2 />} />
// //             <Route path="/SurveyPage3" element={<SurveyPage3 />} />
// //             <Route path="/SurveyPage4" element={<SurveyPage4 />} />
// //             <Route path="/SurveyPage5" element={<SurveyPage5 />} />
// //             <Route path="/ResultsPage" element={<ResultsPage />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import LoginForm from './LoginForm';
// import SurveyPage1 from './Pages/FirstPage';
// import SurveyPage2 from './Pages/SecondPage';
// import SurveyPage3 from './Pages/ThirdPage';
// import SurveyPage4 from './Pages/FourthPage';
// import SurveyPage5 from './Pages/FifthPage';
// import ResultsPage from './Pages/Results';

// function App() {
//   const [surveyData, setSurveyData] = useState([]);

//   const handleSaveAnswer = (question, answer) => {
//     const updatedSurveyData = [...surveyData];
//     const questionIndex = updatedSurveyData.findIndex((q) => q.question === question);

//     if (questionIndex !== -1) {
//       updatedSurveyData[questionIndex].answer = answer;
//     } else {
//       updatedSurveyData.push({ question, answer });
//     }

//     setSurveyData(updatedSurveyData);
//   };

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <div id="page-body">
//           <Routes>
//             <Route path="/" element={<LoginForm />} />
//             <Route
//               path="/SurveyPage1"
//               element={<SurveyPage1 onSaveAnswer={handleSaveAnswer} />}
//             />
//             <Route
//               path="/SurveyPage2"
//               element={<SurveyPage2 onSaveAnswer={handleSaveAnswer} />}
//             />
//             <Route
//               path="/SurveyPage3"
//               element={<SurveyPage3 onSaveAnswer={handleSaveAnswer} />}
//             />
//             <Route
//               path="/SurveyPage4"
//               element={<SurveyPage4 onSaveAnswer={handleSaveAnswer} />}
//             />
//             <Route
//               path="/SurveyPage5"
//               element={<SurveyPage5 onSaveAnswer={handleSaveAnswer} />}
//             />
//             <Route
//               path="/Results"
//               element={<ResultsPage surveyData={surveyData} />}
//             />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import NavBar from './Pages/Navbar';
import SurveyForm from './LoginForm';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {

    localStorage.setItem('token', token);

    setIsLoggedIn(true);
  };

  const handleLogout = () => {

    localStorage.removeItem('token');

    setIsLoggedIn(false);
  };

  return (

    <div>

      {isLoggedIn ? (

        <NavBar onLogout={handleLogout} />
      ) : (
        <SurveyForm onLogin={handleLogin} />
      )}
    
    </div>
  );
}

export default App;