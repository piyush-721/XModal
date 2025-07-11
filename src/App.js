import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "", 
    phoneNumber: "",
    dob: "",
  })

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    console.log(today);
    today.setHours(0, 0, 0, 0);
    console.log(today);
    
    const selectedDate = new Date(formData.date);
    selectedDate.setHours(0, 0, 0, 0);

    if(selectedDate > today){
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    }

    if(formData.phoneNumber < 10){
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name] : value,
    }));
  }

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button className='open-btn' onClick={handleOpenForm}>Open Form</button>

    {isOpen && (
      <div className="modal">
            <div className="modal-content">
              <h2>Fill Details</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label> <br />
                <input 
                  type='text'
                  id='username'
                  name='username'
                  value={formData.userName}
                  onChange={handleChange}
                  required
                /> <br />

                <label htmlFor='email'>Email Address:</label> <br />
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                /> <br />

                <label htmlFor='phone'>Phone Number:</label> <br />
                <input 
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                /> <br />

                <label htmlFor='dob'>Date of Birth:</label> <br />
                <input 
                  type='date'
                  id='dob'
                  name='dob'
                  value={formData.dob}
                  onChange={handleChange}
                  required
                /> <br />

                <button className='submit-button' type='submit'>Submit</button>
              </form>
            </div>
      </div>
    )}

    </div>
  );
}

export default App;
