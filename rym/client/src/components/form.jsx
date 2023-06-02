import { useState } from "react";
import validation from "./validation";
import styled from './form.module.css'

const Forms = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(validation({...userData,[event.target.name]: event.target.value }))
    setUserData({ ...userData,[event.target.name]: event.target.value,})
};

const handleSubmit = (event)=>{
    event.preventDefault();
    login(userData)
};  



  return (
    <div className={styled.container}>
      <div className={styled.log}><h1>Login Here</h1></div>
      <form >
        <label className={styled.txtEmail} htmlFor="email">Email</label>
        <input className={styled.email}
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
          placeholder='Email'
        />
        {
        errors.e1 ? (<p className={styled.errors}>{errors.e1}</p>)
        : errors.e2 ? (<p className={styled.errors}>{errors.e2}</p>) 
        : (<p className={styled.errors}>{errors.e3}</p>)
        }
        <br />

        <label className={styled.txtPass} htmlFor="password">Password</label>
        <input
          className={styled.pass}
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
          placeholder='Password'
        />
        {
            errors.p1 ? <p className={styled.errorsP}>{errors.p1}</p> : (<p className={styled.errors}>{errors.p2}</p>)
        }
        <br />
        <button className={styled.button} onClick={handleSubmit} type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Forms;
