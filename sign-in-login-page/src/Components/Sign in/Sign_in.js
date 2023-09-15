import React from 'react';
import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom'; // You're using Link here, so make sure this is imported.
// import img1 from '../assests/img1.jpg'; // Ensure the image path is correct.
import './Sign_in.css';

//import { Switch, Route } from "react-router-dom";
//to



export default function SignIn() {

  const { register, handleSubmit, errors, getValues } = useForm();
  const onSubmit = (info) => console.log(info);


  // const validate=(value)=>{
  // const passwordvalue = watch("password")

  //     return passwordvalue
  //   }
  //watch is used to watch the value and is a react hook form function.
  return (

    <section>
      {/*   section is for the background image    */}
      <div className='register'>
        <div className='col-1'>
          <h2> Sign in </h2>
          <span>register and get along </span>


          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='first name' {...register("name")} />
            <input type='text' name=" email" placeholder='Email' {...register("email", { required: true })} />
            {/* for emial entry */}

            <input type='password' placeholder='Password' {...register("password",
              {
                required: true,
                minLength: 7,
              })} />
            {/* password */}

            <input type='password' placeholder='Confirm password' name='confirm-password'{...register("confirm-password", {
              required: true, minLength: 7,
              validate: () => {
                const passwordvalue = getValues("password");
                const confirm_passwordvalue = getValues("confirm-password");
                return passwordvalue === confirm_passwordvalue || "passwords do not match"

              }

              //watch us 
            })} />
            {/* fix this  */}
            {errors?.email.type === "required" && <p className='errmsg'>Email is required</p>}
            {errors?.password?.type === "required" && <p className='errmsg'>Confirm password is required</p>}
            {errors?.password?.type === "minLength" && "Atleast 7 characters is required"}
            {/* errors?.variable? is a way of optional chaining and is used where object is underdefined or null */}



            <button className='btn'>Sign In</button>
          </form>
          {/* <p>Don't have an account? <Link to="/login">Log in here</Link></p> */}
        </div>


        {/* <div className="col-2">
          <img src={img1} alt="" />
        </div> */}




      </div>
    </section>
  )
}
