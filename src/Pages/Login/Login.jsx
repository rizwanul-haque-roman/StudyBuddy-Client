import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import logReg from "../../assets/logReg.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [viewPass, setVewPass] = useState(true);
  const { login, googleLogin, githubLogin } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;

    console.log(email, pass);

    login(email, pass)
      .then((result) => {
        console.log(result);
        Swal.fire("Login Successful");
      })
      .catch((error) => Swal.fire(error.message));
  };

  const google = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        Swal.fire("Login Successful");
      })
      .catch((error) => Swal.fire(error.message));
  };

  const gitHub = () => {
    githubLogin()
      .then((result) => {
        console.log(result);
        Swal.fire("Login Successful");
      })
      .catch((error) => Swal.fire(error.message));
  };

  return (
    <div className="w-11/12 lg:container mx-auto h-screen bg-cover flex items-center">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 flex flex-col justify-center gap-4 p-12 shadow-2xl rounded-xl border"
        >
          <img className="w-1/3 mx-auto" src={logo} alt="" />
          <h1 className="font-bold text-[#264790] text-4xl text-center">
            Welcome again!
          </h1>
          <p className="text-[#E58013] text-center text-xl">
            Please Enter Your Credentials to LogIn
          </p>
          <div className="flex flex-col gap-6 my-8">
            <label className="border-b-2 border-[#E58013] py-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#264790"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                className="outline-none"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </label>
            <label className="border-b-2 border-[#E58013] py-2 flex justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#264790"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="outline-none"
                  type={viewPass ? "password" : "text"}
                  name="pass"
                  placeholder="password"
                  required
                />
              </div>
              <a className="text-2xl" onClick={() => setVewPass(!viewPass)}>
                {viewPass ? (
                  <HiEye className="text-[#264790]" />
                ) : (
                  <HiEyeOff className="text-[#264790]" />
                )}
              </a>
            </label>
          </div>
          <div className="flex gap-2 justify-start font-medium items-center hover:underline">
            <Link>
              <h3 className="text-black">Forgot Password?</h3>
            </Link>
          </div>
          <button className="btn bg-[#E58013] rounded-full hover:bg-[#ff992c] border-0 text-xl text-white">
            Log In
          </button>
          <p className="text-center text-xl font-bold">Or</p>
          <Link
            onClick={google}
            className="btn border border-[#264790] rounded-full text-xl text-[#264790]"
          >
            <FcGoogle />
            Log In with Google
          </Link>
          <Link
            onClick={gitHub}
            className="btn border border-[#264790] rounded-full text-xl text-[#264790]"
          >
            <FaGithub />
            Log In with GitHub
          </Link>
          <p className="text-black text-center font-medium">
            New to this site? Proceed to{" "}
            <Link className="underline text-[#E58013]" to={"/register"}>
              Register
            </Link>
          </p>
        </form>
        <div>
          <img src={logReg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
