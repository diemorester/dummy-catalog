import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CategoryPage from "./pages/CategoryPage"
import Navbar from "./components/Navbar"
import ProductPage from "./pages/ProductPage"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/products/:productSlug" element={<ProductPage />} />
      </Routes>
    </>
  )
};

export default App