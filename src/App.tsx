import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ProductProvider } from './contexts/Products'
import RoutesMain from './routes'

function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <ProductProvider>
        <RoutesMain />
      </ProductProvider>
    </>
  )
}

export default App
