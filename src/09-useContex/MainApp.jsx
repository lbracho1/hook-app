import { Navigate, Route, Routes, Link } from "react-router"
import { AboutPage, HomePage, LoginPage, Navbar } from "./index"
import { UserProvider } from "./context/UserProvider"


export const MainApp = () => {
  return (
    <UserProvider>
        {/* <h1>MainApp</h1> */}
       
        <Navbar />
        <hr />

        <Routes>
          <Route path="/" element={ <HomePage  />}/>
          <Route path="login" element={ <LoginPage />}/>
          <Route path="about" element={ <AboutPage />}/>
        
        
          {/* <Route path="/*" element={ <LoginPage /> } /> */}
          <Route path="/*" element={ <Navigate to="/about" /> } />

        </Routes>
    </UserProvider>
  )
}
