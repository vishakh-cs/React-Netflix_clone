
 import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userAuth } from "../context/AuthContext"
const Signup = () => {

  const [rememberMe,setrememberMe] = useState(false)
  const [email,setEmail]=useState('')
  const [password,setPassword] = useState('')

  const {user , SignUp}=userAuth()
  const navigate= useNavigate()

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password);

    try {
      await SignUp(email, password);
      navigate("/"); 
    } catch (err) {
      console.error(err);
    }
  };

 
  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="" />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold">Sign Up</h1>
              <form onSubmit={handleFormSubmit} className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />

                <button className="bg-red-600 py-3 h-10 my-6 rounded font-nsans-bold">SignUp</button>
                <div className="flex justify-between items-center text-green-600">
                  <p>
                    <input checked={rememberMe} onChange={(e)=>setrememberMe(!rememberMe)} type="checkbox" className="mr-2" />Remember Me
                  </p>
                  <p>Need Help ?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-4">Already Subscribe to Netflix ?</span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Signup