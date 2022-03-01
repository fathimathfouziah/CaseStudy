import React from 'react'
//import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <div className="container">
   

    <form onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Fullname</label>
          <input
            type="text"
            name="fullname"
            placeholder="fullname"
            
            
          />
        </div>
        
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
           
            
          />
        </div>

        
        
        <div className="field">
          <label>Mobile</label>
          <input
            type="number"
            name="mobile"
            placeholder="mobile" 
            
          />
        </div>
        <div className="field">
          <label>preferedlocation</label>
          <input
            type="checkbox"
                  
          />
        </div>
        
        
        <button className="fluid ui button blue">ADD/UPDATE</button>
      </div>
    </form>
  </div>
  
);
}

    