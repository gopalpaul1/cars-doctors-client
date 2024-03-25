import { Link } from "react-router-dom";
import signuplogo from "../../../assets/images/login/login.svg"
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";

const SignUp = () => {
    const {createUser, googleSignIn} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault()
        
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password)

        createUser(email, password)
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    
    //googlesign user
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }  

    //user logout
    // const


  return (
    <div className="flex items-center mx-40 my-40">
      <div className="w-1/2">
        <img className="w-[360px] h-[400px]" src={signuplogo} alt="signinlogo" />
      </div>
      <div className="border border-violet-200 w-[500px] p-10">
        <h1 className="text-4xl text-center text-[##FF3811] font-bold mb-6">Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="mb-5">
            <label htmlFor="name" className="font-bold">Name</label>
            <br />
            <input className="w-full border-2 border-violet-200 p-2 rounded-md outline-violet-400" type="text" name="name" placeholder="name" />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="font-bold">Email</label>
            <br />
            <input className="w-full border-2 border-violet-200 p-2 rounded-md outline-violet-400" type="email" name="email" placeholder="email" />
          </div>
          <div className="mb-5">
            <label htmlFor="Password" className="font-bold">Password</label>
            <br />
            <input className="w-full border-2 border-violet-200 p-2 rounded-md outline-violet-400" type="password" name="password" placeholder="password" />
          </div>
          <input type="submit" value="Sign Up" className="mt-5 text-center text-white w-full py-2 rounded-lg bg-[#FF3811]"/>
          <div className="flex flex-col gap-y-4 justify-center items-center mt-4">
            <p>or Sign Up with</p>
            <div className="flex gap-6 mt-6">
                <div>
                    <FaGoogle onClick={handleGoogleSignIn}/>
                </div>
                <div>
                    <FaLinkedin/>
                </div>
                <div>
                    <FaGithub/>
                </div>
            </div>
            <h2>Already Have an Account? <Link to="/login" className="text-blue-500 font-bold">Login</Link></h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
