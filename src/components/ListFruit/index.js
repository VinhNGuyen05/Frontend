import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../Config/CartConText';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

const FruitList = (data) => {

    // const productsPerRow = 4
    // const productsPerPage = productsPerRow * 2
    // const [visibleProducts, setVisibleProducts] = useState(productsPerPage)
    const { addToCart } = useCart()

    // const handleShowMore = () => {
    //     setVisibleProducts(visibleProducts + productsPerPage)
    // }

    // const handleShowLess = () => {
    //     setVisibleProducts(productsPerPage)
    // }

    // const handleDecreaseQuantity = (productName) => {
    //     const existingProduct = cart.find((item) => item.name === productName)
    //     if (existingProduct && existingProduct.quantity > 1) {
    //         decreaseQuantity(productName) // Gọi decreaseQuantity từ context
    //     } else {
    //         removeFromCart(productName)
    //     }
    // }

    return (
        // <section className="py-5 bg-light">
        //     <div className="container px-1 px-lg-5 mt-3">
        //         <div className="container justify-content-center search">
        //             <div className="row ">
        //                 <form className="input-group mb-5" >
        //                     <input type="text" className="form-control input-text" placeholder="Search products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        //                     <div className="input-group-append">
        //                         <button className="btn" type="submit">Search</button>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //         <div className="row gx-2 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
        <>
            {data?.data?.map(item => (
                <div className="col mb-2 mb-lg-5" key={item?.fruitId}>
                    <div className="card h-100">
                        <Link to={`/detail/${item?.fruitId}`} style={{ color: 'inherit', textDecoration: 'inherit' }} key={item?.fruitId}>
                            <img className="card-img-top" style={{ height: '150px' }} src={item?.fruitImages[0]?.imageUrl} alt={item?.fruitName} />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder fs-5">{item?.fruitName}</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-1">
                                    </div>
                                    ${item?.price}
                                </div>
                            </div>
                        </Link>
                        <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(item)}>Add to cart</button></div>
                        </div>
                    </div>
                </div>
            ))}
        </>
        //         </div>
        //     </div>
        // </section>
    )
}

export default FruitList
