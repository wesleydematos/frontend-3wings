import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default RoutesMain