import Header from "./components/Header"

import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
