import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default RoutesMain