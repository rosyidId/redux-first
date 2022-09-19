import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { getProducts, productSelector, deleteProduct } from "../features/ProductSlice";

function AddProducts() {

  const dispatch = useDispatch();
  const products = useSelector(productSelector.selectAll)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">List Product</h2>
            <Link to="add" className='px-4 py-2 bg-green-600 no-underline text-white rounded-lg hover:bg-green-700'>New Product</Link>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Nomer
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id}>
                      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                        {index + 1}
                      </td>
                      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                        {product.title}
                      </td>
                      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                        Rp {product.price}
                      </td>
                      <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                        <Link to={`edit/${product.id}`} className='no-underline bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 mr-3'>
                          edit
                        </Link>
                        <button onClick={() => dispatch(deleteProduct(product.id))} className='bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700'>
                          Hapus
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddProducts;