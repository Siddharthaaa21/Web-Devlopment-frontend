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
          <input type="text"
           name="email"
           {...register("email",
           {required:true,
          pattern: /^\S+@\S+$/i,}

           )}/>

           {errors.email && errors.email.type==="required"&& (<p className='errorMsg'>Email required</p>)}
           {errors.email && errors.email.type==="pattern"&& (<p className='errorMsg'>Email invalid</p>)}
        </div>
          
        <div className='Form-Password'>
        <label>password</label>
          <input type="password"
           name="password"
           {...register("pasword", 
           {required:true,
          minLength:7,}
           )}/>
           {errors.password && errors.password.type === "required"(<p className='errorMsg'>password required</p>)}
           {/* this is a form of conditional rendering  */}
           {errors.password && errors.password.type ==="minLength" && (<p className='errorMsg'>password must be 7 characters</p>)}
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