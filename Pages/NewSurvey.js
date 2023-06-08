import React, { useState } from 'react';
import './Survey.css';
import axios from 'axios';


function SurveyPage1() {
const [role, setRole] = useState('default');
const [language, setLanguage] = useState(null);
const [checkbox, setCheckbox] = useState({
tablet: false,
cellphone: false,
desktop: false,
laptop: false,
smartwatch: false,
});
const [feedback, setFeedback] = useState('');
const [dropdown, setDropdown] = useState('default');
const [optional, setOptional] = useState('');


const handleLanguageChange = (event) => {
setLanguage(event.target.value);
};

const handleRoleChange = (event) => {
setRole(event.target.value);
};

const handleOptionalChange = (event) =>{
    setOptional(event.target.value);
}
const handleCheckboxChange = (event) => {
const { name, checked } = event.target;
setCheckbox((prevCheckbox) => ({ ...prevCheckbox, [name]: checked }));
};

const handleFeedbackChange = (event) => {
setFeedback(event.target.value);
};

const handleDropdownChange = (event) => {
setDropdown(event.target.value);
};

const handleSave = (event) => {
event.preventDefault();
const answer = {
  role: role,
  feedback: feedback,
  dropdown: dropdown,
  language: language,
  checkbox: checkbox,
  optional:optional
};

axios
  .post('http://localhost:4000/app/firstpage', answer)
  .then((response) => {
    setRole('default');
    setCheckbox({
      tablet: false,
      cellphone: false,
      desktop: false,
      laptop: false,
      smartwatch: false,
    });
    setDropdown('default');
    setFeedback('');
    setOptional('');
    setLanguage(null);
  })
  .catch((error) => {
    console.log(error);
  });
};

return (

   
<div className="container">
<form onSubmit={handleSave}>
<div className="form-group"> 
<p id="quest">1. As an IT graduate, what are you most interested in?</p>
<select
         name="role"
         required
         id="dropdown"
         value={role}
         onChange={handleRoleChange}
         className="formControl"
       >
<option value="" disabled>
Select your interest in IT
</option>
<option value="Business Analysis">Business Analysis</option>
<option value="Databases">Databases</option>
<option value="Front-End Development">Front-End Development</option>
<option value="Back-End Development">Back-End Development</option>
<option value="Full-Stack Development">Full-Stack Development</option>
</select>
</div>

    <div className="form-group">
      <p id="quest">2. Which language are you most familiar with?</p>
      <label>
        <input
          type="radio"
          name="source"
          value="JavaScript"
          className="inputRadio"
          checked={language === 'JavaScript'}
          onChange={handleLanguageChange}
        />{' '}
        JavaScript
      </label>
      <label>
        <input
          type="radio"
          name="source"
          value="Python"
          className="inputRadio"
          checked={language === 'Python'}
          onChange={handleLanguageChange}
        />{' '}
        Python
      </label>
      <label>
        <input
          type="radio"
          name="source"
          value="C#"
          className="inputRadio"
          checked={language === 'C#'}
          onChange={handleLanguageChange}
        />{' '}
        C#
      </label>
      <label>
        <input
          type="radio"
          name="source"
          value="C++"
          className="inputRadio"
          checked={language === 'C++'}
          onChange={handleLanguageChange}
        />{' '}
        C++
      </label>
      <label>
        <input
          type="radio"
          name="source"
          value="Java"
          className="inputRadio"
          checked={language === 'Java'}
          onChange={handleLanguageChange}
        />{' '}
        Java
      </label>
    </div>

    <div className="form-group">
      <p id="quest">3. Which devices do you own?</p>
      <label>
        <input
          type="checkbox"
          name="laptop"
          value= "laptop"
          className="checkbox"
          checked={checkbox.laptop}
          onChange={handleCheckboxChange}
        />{' '}
        Laptop
      </label>
      <label>
        <input
          type="checkbox"
          name="tablet"
          className="checkbox"
          checked={checkbox.tablet}
          onChange={handleCheckboxChange}
        />{' '}
        Tablet
      </label>
      <label>
        <input
          type="checkbox"
          name="cellphone"
          value= "cellphone"
          className="checkbox"
          checked={checkbox.cellphone}
          onChange={handleCheckboxChange}
        />{' '}
        Cellphone
      </label>
      <label>
        <input
          type="checkbox"
          name="desktop"
          value= "desktop"
          className="checkbox"
          checked={checkbox.desktop}
          onChange={handleCheckboxChange}
        />{' '}
        Desktop
      </label>
      <label>
        <input
          type="checkbox"
          name="smartwatch"
          value= "smartwatch"
          className="checkbox"
          checked={checkbox.smartwatch}
          onChange={handleCheckboxChange}
        />{' '}
        Smart Watch
      </label>
    </div>

    <div className="form-group">
      <p id="quest">4. Tell us what you would like to learn from Brolink?</p>
      <textarea
        name="feedback"
        cols="30"
        rows="5"
        id="feedback"
        className="textarea"
        placeholder="Write your paragraph here..."
        value={feedback}
        onChange={handleFeedbackChange}
      ></textarea>
    </div>

    <div className="form-group">
      <p id="quest">5. Where did you learn about programming?</p>
      <select
        name="role"
        required
        id="dropdown"
        className="formControl"
        value={dropdown}
        onChange={handleDropdownChange}
      >
        <option value="" disabled>
          Select your answer
        </option>
        <option value="University">University</option>
        <option value="College">College</option>
        <option value="High School">High School</option>
        <option value="Self-taught">Self-taught</option>
        <option value="Internet">Internet</option>
        <option value="Other">Other</option>
      </select>
    </div>
    {dropdown === 'Other' && (
      <div className="form-group">
        <label htmlFor="address">
          If you selected other on the above question <span className="clue">(optional)</span>
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className="formControl"
          placeholder="Tell us where?"
          value={optional}
          onChange={handleOptionalChange}
        />
      </div>
    )}

    <div className="form-group">
      <button type="submit" id="save" className="btn">
        SAVE ANSWER
      </button>

    </div>
  </form>

  {/* <button>
    <Link to="/SurveyPage2">Next Page</Link>
  </button> */}
</div>
);
}

export default SurveyPage1;

// import React, { useState } from 'react';
// import './Survey.css';
// // import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function SurveyPage1() {
// //   const navigate = useNavigate();
//   const [role, setRole] = useState('default');
//   const [language, setLanguage] = useState(null);
//   const [checkbox, setCheckbox] = useState({
//     tablet:false,
//     cellphone: false,
//     desktop:false,
//     laptop:false,
//     smartwatch:false
//   });
//   const [feedback, setFeedback] = useState('');
//   const [dropdown, setDropdown] = useState('default');
  

//   const handleLanguageChange = (event)=>{
//     setLanguage(event.target.value);
//   }
//   const handleRoleChange = (event)=>{
//     setRole(event.target.value);
//   }

//   const handleCheckboxChange = (event)=>{
//     setCheckbox(event.target.value);
//   }

//   const handleFeedbackChange = (event)=>{
//     setFeedback(event.target.value);
//   }

//   const handleDropdownChange = (event)=>{
//     setDropdown(event.target.value);
//   }

  
//   const handleSave = (event) => {
//     event.preventDefault();
    
//     const answer = {
//         role:role,
//         feedback:feedback,
//         dropdown:dropdown,
//         language:language,
//         checkbox:checkbox
//     };
//     axios.post("http://localhost:4000/app/firstpage", answer)
//     .then((Response) => {
//         setRole({
//             role,
//         });
//         setCheckbox({checkbox});
//         setDropdown({dropdown});
//         setFeedback('');
//         setLanguage(language);

//     }).catch((error) => {
//         console.log(error);
//     })
//     // onSaveAnswer('As an IT graduate, what are you most interested in?', answer);
//     // navigate('/SurveyPage2');
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSave}>
//         <div className="form-group">
//           <p id="quest">1. As an IT graduate, what are you most interested in?</p>
//           <select name="role" required id="dropdown" value={role} onChange={handleRoleChange} className="formControl">
//             <option value="" disabled selected>Select your interest in IT</option>
//             <option value="Business Analysis">Business Analysis</option>
//             <option value="Databases">Databases</option>
//             <option value="Front-End Development">Front-End Development</option>
//             <option value="Back-End Development">Back-End Development</option>
//             <option value="Full-Stack Development">Full-Stack Development</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <p id="quest">2. Which language are you most familiar with?</p>
//           <label>
//             <input
//               type="radio"
//               name="source"
//               value="JavaScript"
//               className="inputRadio"
//               checked={language === 'JavaScript'}
//               onChange={handleLanguageChange}
//             />{' '}
//             JavaScript
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="source"
//               value="Python"
//               className="inputRadio"
//               checked={language === 'Python'}
//               onChange={handleLanguageChange}
//             />{' '}
//             Python
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="source"
//               value="C#"
//               className="inputRadio"
//               checked={language === 'C#'}
//               onChange={handleLanguageChange}
//             />{' '}
//             C#
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="source"
//               value="C++"
//               className="inputRadio"
//               checked={language === 'C++'}
//               onChange={handleLanguageChange}
//             />{' '}
//             C++
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="source"
//               value="Java"
//               className="inputRadio"
//               checked={language === 'Java'}
//               onChange={handleLanguageChange}
//             />{' '}
//             Java
//           </label>
//         </div>
     
       
//         <div className="form-group">
//           <p id="quest">3. Which devices do you own?</p>
//           <label>
//             <input
//               type="checkbox"
//               name="prefer"
//               className="checkbox"
//               value="Laptop"
//               onChange={handleCheckboxChange}
//             />{' '}
//             Laptop
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="prefer"
//               className="checkbox"
//               value="Tablet"
//               onChange={handleCheckboxChange}
//             />{' '}
//             Tablet
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="prefer"
//               className="checkbox"
//               value="Cellphone"
//               onChange={handleCheckboxChange}
//             />{' '}
//             Cellphone
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="prefer"
//               className="checkbox"
//               value="Desktop"
//               onChange={handleCheckboxChange}
//             />{' '}
//             Desktop
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="prefer"
//               className="checkbox"
//               value="Smart Watch"
//               onChange={handleCheckboxChange}
//             />{' '}
//             Smart Watch
//           </label>
//         </div>
      
//         <div className="form-group">
//           <p id="quest">4. Tell us what you would like to learn from Brolink?</p>
//           <textarea
//             name="feedback"
//             cols="30"
//             rows="5"
//             id="feedback"
//             className="textarea"
//             placeholder="Write your paragraph here..."
//             value={feedback}
//             onChange={handleFeedbackChange}
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <p id="quest">5. Where did you learn about programming?</p>
//           <select
//             name="role"
//             required
//             id="dropdown"
//             className="formControl"
//             value={dropdown}
//             onChange={handleDropdownChange}
//           >
//             <option value="" disabled>
//               Select your answer
//             </option>
//             <option value="University">University</option>
//             <option value="College">College</option>
//             <option value="High School">High School</option>
//             <option value="Self-taught">Self-taught</option>
//             <option value="Internet">Internet</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         {dropdown === 'Other' && (
//           <div className="form-group">
//             <label htmlFor="address">
//               If you selected other on the above question <span className="clue">(optional)</span>
//             </label>
//             <input
//               type="text"
//               name="address"
//               id="address"
//               className="formControl"
//               placeholder="Tell us where?"
//               value={feedback}
//               onChange={handleFeedbackChange}
//             />
//           </div>
//         )}
        
//         <div className="form-group">
//           <button type="submit" id="save" className="btn">
//             SAVE ANSWER
//           </button>
//         </div>
//       </form>
//       <button>
//         {/* <Link to="/SurveyPage2">Next Page</Link> */}
//       </button>
//     </div>
//   );
// }

// export default SurveyPage1;
// // Implement similar changes to the other survey page components (SurveyPage2, SurveyPage3, SurveyPage4, SurveyPage5)


