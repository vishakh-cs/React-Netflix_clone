import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import NavBar from "./components/NavBar"
import { AuthContextProvider } from "./context/AuthContext"
// import ProtectedRoute from "./components/protectedRoute"


const App = () => {
  return (
    <>
    <AuthContextProvider>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </AuthContextProvider>
    </>

  )
}

export default App