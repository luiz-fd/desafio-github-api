import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/home"
import HomeBody from "./routes/home/homebody"
import Profile from "./routes/home/profile"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomeBody />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
