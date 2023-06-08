// import React from 'react';
// import {  useNavigate } from 'react-router-dom';

// function ResultsPage({ surveyData }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
  
//     navigate('/'); 
//   };

//   return (
//     <div className="container">
//       <h1>Survey Results</h1>
//       {surveyData.map((question, index) => (
//         <div key={index} className="result-item">
//           <p className="question">{question.question}</p>
//           <p className="answer">{question.answer || 'No answer'}</p>
//         </div>
//       ))}
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default ResultsPage;


import React, { useState, useEffect } from "react";
import './Results.css';
import axios from "axios";

const ResultsPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      const response = await axios.get("http://localhost:4000/app/firstpage");

      setData(response.data);

    };

    fetchData();

  }, []);

  const exportCSV = () => {

    const surveyName = "SURVEY";

    const csvContent =

      "data:text/csv;charset=utf-8," +

      data.map((row) => Object.values(row).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);

    link.setAttribute("download", `${surveyName}_RESULTS.csv`);

    document.body.appendChild(link);

    link.click();

  };

  const deleteRecord = async (id) => {

    await axios.delete(`http://localhost:4000/app/firstpage/${id}`);

    setData(data.filter((item) => item._id !== id));

  };

  return (

    <>

      <div>

        <h1>Results</h1>

        <table className="survey-list">

          <thead>

            <tr>
              <th>Select your interest in IT</th>
              <th>Which language are you most familiar with?</th>
              <th>Which devices do you own?</th>
              <th>Tell us what you would like to learn from Brolink?</th>
              <th>
              Where did you learn about programming?
              </th>
              <th>
              If you selected other on the above question 
              </th>
              <th>
                Delete
              </th>
            </tr>

          </thead>

          <tbody>

            {data.map((item) => (

              <tr key={item._id}>

                <td>{item.role}</td>

                <td>{item.language}</td>
                <td>
                {Object.keys(item.checkbox).map((device) => (
                    <span key={device}>{device}: {item.checkbox[device]}</span>
                ))}
                </td>
                  <td>{item.feedback}</td>
                 <td>{item.dropdown}</td>
                <td>{item.optional}</td>
                <td><button onClick={() => deleteRecord(item._id)}>Delete</button></td>
              </tr>

            ))}

          </tbody>

        </table>

        <button className="export-button" onClick={exportCSV}>

          Export as CSV

        </button>

      </div>

    </>

  );

};

export default ResultsPage;
