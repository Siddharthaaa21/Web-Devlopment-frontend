import React from 'react'
import { useForm } from 'react-hook-form';  
import { Form } from 'react-bootstrap';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
 // Import Form.Control from react-bootstrap
//  import Popper from 'popper.js';
//  import $ from 'jquery';
  // import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function MyForm() {
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
    }=useForm({
        defaultValues:{
            first_name:' ',
            last_name:  ' ',

        }
        // this is for the default values of the form which are goinf to e first name and last name  
    });
    const onSubmit =(data_ob)=>{
        console.log(data_ob)


    }

  return (
    <div>
      <div>
      <Form.Control
        type="text" 
        placeholder='First Name'
        {...register("first_name")}/>
        </div>
        
    <div/>

        <div>
         <Form.Control
        type="text" 
        placeholder='Last Name'
        {...register("first_name")}/>
</div>
    </div>
  )
}
