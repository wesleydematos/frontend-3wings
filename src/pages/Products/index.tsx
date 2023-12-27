import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { useState } from 'react'
import CreateProduct from '../../components/CreateProduct'
import AllProducts from '../../components/AllProducts'

function Products() {
  const [isCreate, setIsCreate] = useState(true)

  return (
    <div className='flex flex-col min-h-screen max-w-screen bg-tx text-white overflow-x-hidden pb-4'>
      <header className='flex w-full mt-1 mb-5 items-center'>
        <Link to='/' className='ml-5'>
          <FaHome  className='h-[30px] w-[30px] mt-2 ml-2'/>
        </Link>
        <nav className='flex mx-auto gap-5 mt-2 '>
          <button 
            onClick={()=> setIsCreate(true)}
            className={`p-2 border rounded-2xl ${isCreate ? 'text-tertiary-light border-tertiary-light' : 'text-white border-white'}`}
          >
            Criar Produto
          </button>
          <button 
            onClick={()=> setIsCreate(false)}
            className={`p-2 border rounded-2xl ${!isCreate ? 'text-tertiary-light border-tertiary-light' : 'text-white border-white'}`}
          >
            Todos Produtos
          </button>
        </nav>
      </header>
      {
        isCreate ? 
        <div className='flex flex-col'>
          <h1 className='mx-auto text-body font-semibold text-2xl'>Formulário de criação:</h1>
          <CreateProduct/>
        </div> 
        : <AllProducts/>
      }
    </div>
  )
}

export default Products