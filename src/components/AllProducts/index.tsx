import { useEffect } from 'react'
import { useProductContext } from '../../contexts/Products'
import ProductCard from '../ProductCard'

function AllProducts() {
  const { getProducts, products } = useProductContext()

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <div className='px-5'>
      <ul className='flex flex-wrap gap-5 justify-center'>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p>Nenhum produto encontrado :/</p>
        )}
      </ul>
    </div>
  )
}

export default AllProducts