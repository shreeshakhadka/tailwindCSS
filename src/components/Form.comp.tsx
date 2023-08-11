import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address,setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhonenumber(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      name,
      email,
      address,
      phonenumber,
      password,
    };
    setSubmittedData(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        <label>
        Name:
        <input type="text" placeholder="Enter your full name" 
        className="input input-bordered w-full max-w-xs" 
        onChange={handleNameChange}/>
      </label>
      <br/>

      <label>
        Email:
        <input type="email" placeholder="Enter your email" 
        className="input input-bordered w-full max-w-xs" 
        onChange={handleEmailChange}/>
      </label>
      <br/>


      <label>
        Address:
        <input type="text" placeholder="Enter your address" 
        className="input input-bordered w-full max-w-xs" 
        onChange={handleAddressChange}/>
      </label>
      <br/>
      
      <label>
        Phone number:
        <input type="number" placeholder="Enter your phone number" 
        className="input input-bordered w-full max-w-xs" 
        onChange={handleNumberChange}/>
      </label>
      <br/>

      <label>
        Password:
        <input type="password" placeholder="Enter your password" 
        className="input input-bordered w-full max-w-xs" 
        onChange={handlePasswordChange}/>
      </label>
      <br/>
        
      <button className="btn btn-primary">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Address: {submittedData.address}</p>
          <p>Phone number: {submittedData.phonenumber}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
