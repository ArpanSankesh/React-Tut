const Register = () => {

  function handelRegister(e) {
    e.preventDefault();
    console.log("hello");
  }

  let age = 18;

  return (
    <>
      <form action="#">
        {age >= 18 ? (
        <div>
          <input type="text" name="" id="" placeholder="Email" />
          <button onClick={handelRegister}>Submit</button>
        </div>
        ): <h1>You are a Kid, Grow up!</h1>}
      </form>
    </>
  );
};

export default Register;
