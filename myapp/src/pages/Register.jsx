
const Register = () => {
    function handelRegister(e){
        e.preventDefault();
        console.log("hello");
        
    }
  return (
    <>
    <form action="#">
        <input type="text" name="" id="" placeholder="Email" />
        <button onClick={ handelRegister}>Submit</button>
    </form>
    </>
  )
}

export default Register