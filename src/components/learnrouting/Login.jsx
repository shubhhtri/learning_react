import React from 'react';
import * as yup from "yup";
import {useFormik} from "formik";

function Login() {

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const loginSchema=yup.object({
    name: yup.string().required("Required!").max(20,"Too Large").min(3,"Too Small") ,
    email: yup.string().required("Required!").email("Invalid email format"),
    pass: yup.string().matches(passwordRules, {message: "Make the password stronger"}),
    cnfPass: yup.string().required("Required!").oneOf([yup.ref("pass"), null], "Password does not match"),
    options: yup.string().required("Required!"),
    cars: yup.string().required("Required!"),
    text: yup.string().required("Required!")
  })

  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      pass:"",
      cnfPass:"",
      optopns:"",
      cars:"",
      text:""
    },
    
    validationSchema: loginSchema,
    onSubmit: value=>{console.log(value)},
  })

  return (
    <>
      <h2>Login Form</h2>
      
      <form onSubmit={formik.handleSubmit} className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
        {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
        <br />

        <label htmlFor="email">Email</label>
        <input type="email" id='email' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
        <br />

        <label htmlFor="pass">Password</label>
        <input type="password" id='pass' name="pass" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pass} />
        {formik.errors.pass && formik.touched.pass ? <div>{formik.errors.pass}</div> : null}
        <br />

        <label htmlFor="cnfPass">Cnf Password</label>
        <input type="password" id='cnfPass' name="cnfPass" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cnfPass} />
        {formik.errors.cnfPass && formik.touched.cnfPass ? <div>{formik.errors.cnfPass}</div> : null}
        <br />

        <label htmlFor="options">
          <input type="radio" name='options' onChange={formik.handleChange} onBlur={formik.handleBlur} value="option1" /> Option 1
        </label>

        <label htmlFor="options">
          <input type="radio" name='options' onChange={formik.handleChange} onBlur={formik.handleBlur} value="option2" /> Option 2
        </label>

        <label htmlFor="options">
          <input type="radio" name='options' onChange={formik.handleChange} onBlur={formik.handleBlur} value="option3" /> Option 3
        </label>
        {formik.errors.options && formik.touched.options ? <div>{formik.errors.options}</div> : null}


        <br />

        <select name="cars" id="cars" onChange={formik.handleChange} onBlur={formik.handleBlur} >
          <option value="">Select an option</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        {formik.errors.cars && formik.touched.cars ? <div>{formik.errors.cars}</div> : null}


        <br />

        <textarea name="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.text} cols="30" rows="10">Write Your comments here </textarea>
        {formik.errors.text && formik.touched.text ? <div>{formik.errors.text}</div> : null}

        
        <br />

        <button type='submit'>Submit</button>

      </form>

    </>
  )
}

export default Login