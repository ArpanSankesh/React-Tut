import { useState } from "react";

const Register = () => {

  function handelRegister(e) {
    e.preventDefault();
    console.log("hello");
  }

  const [email, setemail] = useState('');
  console.log(email);
  
  return (
    <>
      <form action="#">
        <div>
          <input type="text" name="email"  placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
          <input type="password" name="pass"  placeholder="password" />
          <button onClick={handelRegister}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Register;
