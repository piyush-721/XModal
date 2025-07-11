import './App.css';
import React, {useState, useRef} from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "", 
    phone: "",
    dob: "",
  })

  const emailRef = useRef();

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.phone || !formData.dob) {
      alert("All fields are required.");
      return;
    }

    const today = new Date();
    console.log(today);
    today.setHours(0, 0, 0, 0);
    console.log(today);
    
    const selectedDate = new Date(formData.dob);
    selectedDate.setHours(0, 0, 0, 0);

    if(selectedDate > today){
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    if(!formData.phone || formData.phone.length < 10){
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    setFormData({
      username: "",
      email: "", 
      phone: "",
      dob: "",
    });

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
      <div className="modal" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Fill Details</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label> <br />
                <input 
                  type='text'
                  id='username'
                  name='username'
                  value={formData.username}
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
                  ref={emailRef}
                  required
                /> <br />

                <label htmlFor='phone'>Phone Number:</label> <br />
                <input 
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
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
