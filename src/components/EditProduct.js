import React, { useState, useEffect } from 'react'
// import { useDispatch } from "react-redux"
// import { update } from "../features/ProductSlice"
import { useDispatch, useSelector } from "react-redux"
import { getProducts, productSelector, updateProduct } from "../features/ProductSlice"
import { useParams, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';


function EditProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams();

    const product = useSelector((state => productSelector.selectById(state, id)))

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    useEffect(() => {
        if (product) {
            setTitle(product.title)
            setPrice(product.price)
        }
    }, [product])

    const handleUpdate = async (e) => {
        e.preventDefault();
        await dispatch(updateProduct({ id, title, price }));
        navigate("/");
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Update success ${title} `,
            showConfirmButton: false,
            timer: 1500
        })

    }
    //   const dispatch = useDispatch();

    //   const updateProduct = (e) => {
    //     e.preventDefault();
    //     dispatch(update({ title, price }));
    //   }

    return (
        <div className='p-10'>
            <div className="block p-6 w-2/5 rounded-lg shadow-lg bg-white">
                <form onSubmit={handleUpdate}>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Title</label>
                        <input type="text"
                            className="
                                form-control 
                                block 
                                w-full 
                                px-3 
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Price</label>
                        <input
                            type="text"
                            className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-between">

                        <button type="submit"
                            className="
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out"
                        >
                            Update</button>
                        <Link to="/" className="
                        px-6
                        py-2.5
                        bg-red-600
                        text-white
                        font-medium
                        no-underline
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-red-700 hover:shadow-lg
                        focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-red-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out"
                        >Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProduct;