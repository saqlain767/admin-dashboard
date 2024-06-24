import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateUser from "./Components/CreateUser"
import Homecrud from "./Components/Homecrud"
import Users from "./Components/Users"
import Editusers from "./Components/Editusers"

const App=()=>{
    return(
        <div>
        <BrowserRouter>
        <Homecrud/>
        <Routes>
            <Route element={<CreateUser/>} path="/"/>
            <Route element={<Users/>} path="/users"/>
            <Route element={<Editusers/>} path="/edit/:index" />
        </Routes>
        
        </BrowserRouter>
        </div>
    )
}
export default App