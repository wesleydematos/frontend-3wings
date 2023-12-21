import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { useState } from 'react'

function Products() {
  const [isCreate, setIsCreate] = useState(true)

  return (
    <div className='flex flex-col min-h-screen w-screen bg-tx text-white'>
      <header className='flex w-full'>
        <Link to='/'>
          <FaHome  className='h-[30px] w-[30px] mt-2 ml-2'/>
        </Link>
        <nav className='flex mx-auto gap-5 mt-2 '>
          <button onClick={()=> setIsCreate(true)}>Criar Produto</button>
          <button onClick={()=> setIsCreate(false)}>Todos Produtos</button>
        </nav>
      </header>
      {
        isCreate ? <>create</> : <>all</>
      }
    </div>
  )
}

export default Products