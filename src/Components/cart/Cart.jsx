import React from 'react'
import { RxCross2 } from "react-icons/rx"
import { useSelector, useDispatch } from 'react-redux';
import { removeAddedProducts } from '../../ReduxTookit/Slice/Cartslice';
const Cart = () => {
    const dispatch = useDispatch();
    // const {cart,totalPrice,totalQuantity}= useSelector((state)=>state.cartInfo);

    const { cart } = useSelector((state) => state.cartInfo);

    const handleMinusEvent = (e, val) => {
        e.preventDefault();
        
        dispatch(removeAddedProducts(val))
    }





    const cartitems = [
        {
            img: "https://shreethemes.in/doctris/layouts/assets/images/pharmacy/shop/thermometer.jpg",
            productName: "Thermometer",
            price: 16,
            star: 5,
            quantity: 1
        }]
    return (
        <>
            <section className="bg-half-170 d-table w-100 bg-light">
                <div className="container">
                    <div className="row mt-5 justify-content-center ">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="sub-title mb-4">Shop Cart</h3>
                                <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                    <ul className="breadcrumb bg-light rounded mb-5 bg-transparent">
                                        <li className="breadcrumb-item "><a href="index.htmllh-base letter-spacing-1 text-uppercase fs-6 fw-bold text-dark" style={{ textDecoration: "none", color: "#212529" }}>Doctris</a></li>
                                        <li className="breadcrumb-item"><a href="pharmacy.html lh-base letter-spacing-1 text-uppercase fs-6 fw-bold text-dark" style={{ textDecoration: "none", color: "#212529" }}>Pharmacy</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Shop Cart</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive bg-white shadow rounded">
                                <table className="table table-center table-padding mb-0">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" style={{ minWidth: '20px' }}></th>
                                            <th className="border-bottom p-3" style={{ minWidth: '300px' }}>Product</th>
                                            <th className="border-bottom text-center p-3" style={{ minWidth: '160px' }}>Price</th>
                                            <th className="border-bottom text-center p-3" style={{ minWidth: '190px' }}>Qty</th>
                                            <th className="border-bottom text-end p-3" style={{ minWidth: '50px' }}>Total</th>
                                        </tr>
                                    </thead>

                                    <tbody >

                                        {cart.map((cartval, id) => {
                                            // console.log(cartval)
                                            return (


                                                <tr key={id} >
                                                    <td className="h5 p-3 text-center "><a href="#" className="text-danger "> <RxCross2 className='mt-4' /></a></td>
                                                    <td className="p-3">
                                                        <div className="d-flex align-items-center">
                                                            <img src={cartval.img} className="img-fluid avatar avatar-smal  rounded shadow" style={{
                                                                height: 'auto', width:
                                                                    "55px"
                                                            }} alt="" />
                                                            <h6 className="mb-0 ms-3">{cartval.productName}</h6>
                                                        </div>
                                                    </td>
                                                    <td className="text-center p-3 ">$ {cartval.price}</td>
                                                    <td className="text-center shop-list p-3">
                                                        <div className="qty-icons gap-2 d-flex align-items-center justify-content-center">
                                                            <button onClick={(e) => handleMinusEvent(e, cartval)} className="btn btn-icon btn-primary ">-</button>
                                                            <p className="btn btn-icon btn-primary m-0">{cartval.quantity}</p>
                                                            <button onClick={() => { }} className="btn btn-icon btn-primary">+</button>
                                                        </div>
                                                    </td>
                                                    <td className="text-end font-weight-bold p-3">${cartval.quantity * cartval.price}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sectioncash'>
                <div className="container">
                    <div className="row">

                        <div className="row ml-5">
                            <div className="col-lg-8 col-md-6 pt-2 mt-4" >
                                <a href="#" className="btn btn-primary">Shop More</a>
                                <a href="#" className="btn btn-soft-primary ms-2">Update Cart</a>
                            </div>
                            <div className="col-lg-4 col-md-6 ms-auto mt-4 pt-2">
                                <div className="table-responsive bg-white rounded shadow">
                                    <table className="table table-center table-padding mb-0">
                                        <tbody>
                                            <tr>
                                                <td className="h6 p-3">Subtotal</td>
                                                <td className="text-end font-weight-bold p-3">$ 2190</td>
                                            </tr>
                                            <tr>
                                                <td className="h6 p-3">Taxes</td>
                                                <td className="text-end font-weight-bold p-3">$ 219</td>
                                            </tr>
                                            <tr className="bg-light">
                                                <td className="h6 p-3">Total</td>
                                                <td className="text-end font-weight-bold p-3">$ 2409</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 pt-2 text-end">
                                    <a href="#" className="btn btn-primary">Proceed to checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Cart