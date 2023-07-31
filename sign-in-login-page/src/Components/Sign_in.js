import React from 'react'
import { useForm } from 'react-hook-form';
import img1 from './assests/images/img1.jpg'
import './Sign_in.css'


export default function Sign_in() {

  const {register , handleSubmit , errors} = useForm();
  const onSubmit=(info)=> console.log(info)
  const validate=(value)=>{
    if(value===password){
      return true
      
    }
    else{
      return false
    }
  }
  return (

   <section>
  {/*   section is for the background image    */}
    <div className='register'>
      <div className='col-1'>
         <h2> Sign in </h2>  
         <span>register and get along </span>
         

      <form id ='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='first name' {...register("name")}/>
        <input type='text' placeholder='Email'{...register("email",{required:true})}/>

        <input type='text' placeholder='password' {...register("password",
        {required:true,
        minLength:7,})}/>
        

        <input type='text' placeholder='Confirm-password' name='confirm-password'{...register("confirm-password", {required:true, minLength:7 ,
          validate:(value)=>validate(value)
        })}/>
        {/* fix this  */}
        {errors.email?.type === "required" && <p>Email is required</p>}
        {errors.password?.type==="required"&&" confirm password is required"}
        {errors.password?.type === "minLength" && "Atleast 7 characters is required"}

         

        <button className='btn'>Sign In</button>
        </form>
        </div>


        <div className="col-2">
                <img src={img1} alt="" />
        </div>



      
    </div>
   </section>
  )
}
