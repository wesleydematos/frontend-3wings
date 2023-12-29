import { useProductContext } from "../../contexts/Products";
import { iProductResponse } from "../../contexts/Products/types";
import ProductForm from "../ProductForm";

function EditModal() {
  const { setEdit, setProduct, editProduct, product } = useProductContext()

  return (
    <div className="fixed top-0 min-h-screen w-screen bg-[#00000080] flex items-center justify-center z-400">
      <div className="flex flex-col w-[90%] h-[95%] px-3 md:p-5 bg-tx rounded-lg py-5">
      <button 
        onClick={()=>{setEdit(false); setProduct({} as iProductResponse)}}
        className="text-white text-end"
        >
        X
      </button>
      <h1 className="text-body font-semibold text-2xl mb-3">Editando o produto {product.name} - {product.brand}:</h1>
      <ProductForm handleFunction={editProduct}/>
      </div>
    </div>
  )
}

export default EditModal