
import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
const Header = lazy(() => import("./components/Header"))
// import Header from "./components/Header"
const Home = lazy(() => import("./pages/Home"))
// import Home from "./pages/Home"
const Footer = lazy(() => import("./components/Footer"))
// import Footer from "./components/Footer"
const SingleProduct = lazy(() => import("./pages/SingleProduct"))
// import SingleProduct from "./pages/SingleProduct"

function App() {

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <Routes>
        <Route path="/ecommerce-webapp_vite_react" element={<Suspense><Home /></Suspense>} />
        <Route path="/ecommerce-webapp_vite_react/products/:productid" element={<Suspense><SingleProduct /></Suspense>} />
      </Routes>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
