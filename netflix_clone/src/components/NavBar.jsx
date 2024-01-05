import { Link, Navigate } from "react-router-dom"
import { userAuth } from "../context/AuthContext"


const NavBar = () => {

  const {user , logout} = userAuth();


   const handdleLogout = async () => {
    try {
      alert("You have been logged out");
      await logout();
    
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute w-full p-4 flex items-center  justify-between z-50 ">
        <Link to="/" >
            <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-4xl">netflix</h1>
        </Link>

        {
          user?.email ? (
            <div>
    <Link to="/profile">
        <button className="capitalize pr-4">Profile</button>
    </Link>
    
    <button onClick={handdleLogout} className="capitalize bg-red-600 hover:bg-red-800 cursor-pointer font-bold px-6 py-2 rounded">Logout</button>
   
</div>

          ):(
            <div>
    <Link to="/login">
        <button className="capitalize pr-4">Login</button>
    </Link>
    <Link to="/signup">
    <button className="capitalize bg-red-600 hover:bg-red-800 cursor-pointer font-bold px-6 py-2 rounded">Sign Up</button>
    </Link>
</div>
          )
        }

    </div>

  )
}

export default NavBar