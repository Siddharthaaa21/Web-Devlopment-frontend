import React from 'react';
import { useForm } from 'react-hook-form';

function Forms() {
    const{
        register, //is a funtion that will help us to register the inputs 

        handleSubmit, // is a function we use when the form is submitted 
        formState: { errors }, //error is a nested property of fromState which contains validaton of errors
    }=useForm(); 
    const onSubmit = (data_ob) =>
    {
        console.log(data_ob);
        //data is an object that contains all the values of the form
    }
  return (
    <div className='Forms-check'>
      <form onSubmit = {handleSubmit(onSubmit)}>

        <div className='Form-validation'>
        <label>Email</label>
          <input type="text" name="email"{...register("email")}/>
        </div>
          
        <div className='Form-Password'>
        <label>password</label>
          <input type="password" name="pasword"{...register("pasword")}/>
        </div>

       
        <div className='Form-Password'>
      <label></label>
      <button type="submit">Submit</button>
    </div>
          


       


      </form>
      
    </div>
  );
}

export default Forms