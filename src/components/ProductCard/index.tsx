import { iProductResponse } from "../../contexts/Products/types"

function ProductCard({ product }: { product: iProductResponse }) {
  return (
    <li>{product.name}</li>
  )
}

export default ProductCard