import logo from '../../assets/3wings-logo.webp'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

function Home() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-screen bg-tx'>
      <img src={logo} alt='3wings logo' />
      <Link 
        to='/products' 
        className='flex items-center gap-2 text-sm text-white mt-14 border border-white p-4 rounded-2xl hover:border-tertiary-light hover:text-tertiary-light'
      >
        Ir para página de produtos <FaLongArrowAltRight className='mt-1'/>
      </Link>
    </div>
  )
}

export default Home
  