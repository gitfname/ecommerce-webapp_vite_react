import Header from "./components/Header"

import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import SingleProduct from "./pages/SingleProduct"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/ecommerce-webapp_vite_react" element={<Home />} />
        <Route path="/ecommerce-webapp_vite_react/products/:productid" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
