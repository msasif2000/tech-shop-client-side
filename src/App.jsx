import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"



function App() {

  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default App
