// /* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useState } from "react";

const Register = () => {
  function handelRegister(e) {
    e.preventDefault();
    console.log("hello");
  }

  const handelCount = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [count, setCount] = useState("");

  useEffect(() => {
    setCount(0);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handelCount}>Counter</button>
      <form action="#">
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            name="pass"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button onClick={handelRegister}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Register;
