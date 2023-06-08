import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';



function SurveyForm(props) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const details ={
      email: email,
      name:name,
      surname:surname,
      password:password
    };
    axios.post("http://localhost:4000/app/login", details)
    .then((response) =>{
      console.log(response.data);
      setEmail('');
      setSurname('');
      setName('');
      setPassword('');
      props.onLogin(response.data.token);
    }). catch((error) => {
      console.log(error);

    });
  //  window.location.href = '/SurveyPage1';
  };


  return (

    <div className="container">
      <header className="header">
        <h1 id="title">
          Survey Form: We would like to know you...
        </h1>
        <p id="description">
          Please fill in your details:
        </p>
      </header>
      <form  id="survey-form"  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={name} className="formControl" placeholder="Enter your name" onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" id="surname" value={surname} className="formControl" placeholder="Enter your surname" onChange={handleSurnameChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="formControl" value={email} placeholder="Enter your Email" onChange={handleEmailChange}  required />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
          <input type="password" placeholder='password' value={password} className="formControl"  onChange={handlePasswordChange}/>
        </div>
        <div className="form-group">
        <button type="submit" className="btn">Submit</button>
        </div>
      </form>

    </div>
  );
}

export default SurveyForm;
