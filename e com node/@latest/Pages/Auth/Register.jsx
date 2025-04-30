import React, { useState } from 'react';
import './Style.css'
import LAYOUT from '../../components/LAYOUT.JSX';
import { toast } from 'react-toastify';
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/context/Contaxt.jsX';
function Register() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });
  const navigate=useNavigate()
  const [errors, setErrors] = useState({});
  const[auth,setAuth]=useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
    const res = await axios.post(`http://localhost:4001/api/v1/auth/register`,formData)
      // method: "POST",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(formData)},
      // {
      //  name, email, password, phone, address
      // });
      console.log({res})
    
        if (res.data.success){
          toast.success(res.data.message)
          setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token
          })
          navigate('/login')
          localStorage.setItem('auth',JSON.stringify(res.data));
        console.log(res.data.message)
        toast.success('registration succesful');
        }
        else{
          toast.error("registration failed");
        }
   }
   catch(error){
    console.log(error)
    toast.error('SOMETHING WENT WRONG')
   }
  };

  return (
    <LAYOUT>
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <small className="error">{errors.password}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <small className="error">{errors.address}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <small className="error">{errors.phone}</small>}
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
    </LAYOUT>
  );
}

export default Register;
