import React from 'react'
import ReactStars from 'react-stars';
import { shopProducts } from '../Allproducts';
import {  useDispatch } from 'react-redux';
import { addProducts } from '../ReduxTookit/Slice/Cartslice';
const Drshop = () => {
    const shopitems = shopProducts
    const dispatch = useDispatch();
const handleAddProducts=(e,val)=>{
    e.preventDefault();
    dispatch(addProducts(val))
}
 


    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="1000">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/bg/pharm01.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/bg/pharm03.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/bg/pharm02.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* --------------shop section----------- */}

                <div className="container" style={{ marginTop: "60px" }}>
                    <div className="row"  >
                        <div className="col-12" >
                            <h5 className="mb-0" >Most Viewed Products</h5>
                        </div>
                    </div>

                    <div className="row ">


                        {shopitems.map((val, items) => {
                            // console.log(value.productName);
                            return (
                                <div className='col-lg-3 col-md-6 col-12 mt-4 pt-2' key={items}>
                                    <div className="card shop-list border-0">
                                        <ul className="label list-unstyled mb-0">
                                            <li>
                                                <a href="" className="badge rounded-pill badge-success">
                                                    Featured
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="shop-image position-relative overflow-hidden rounded shadow">
                                            <ul className="label list-unstyled mb-0">
                                                <li>

                                                    <a href="pharmacy-product-detail.html">
                                                        <img src={val.img} className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a></li></ul>

                                            <div className="qty-icons d-flex justify-content-center align-items-center ">
                                                <button

                                                    className="btn btn-pills btn-icon btn-primary minus" style={{ borderRadius: "50px" }}
                                                >
                                                    -
                                                </button>
                                                <p
                                                 className="btn btn-icon btn-primary text-decoration-none fs-6 letter-spacing-1 h-100 d-inline-flex align-items-center justify-content-center p-1 w-50 pl-0"
                                                 style={{ borderRadius: "50px", margin: "10px" }}
                                                >{val.quantity}</p>
                                                <button
                                                    onClick={(e)=>handleAddProducts(e,val)}
                                                    className="btn btn-pills btn-icon btn-primary plus" style={{ borderRadius: "50px" }}
                                                >
                                                    +
                                                </button>
                                            </div>

                                        </div>

                                        <div className="card-body content pt-4 p-2">

                                            <a href="pharmacy-product-detail.html" className=" text-decoration-none text-dark product-name h6" >{val.productName}</a>
                                            <div className="d-flex justify-content-between mt-1">
                                                <h6 className="text-muted small font-italic mb-0 mt-1">{val.price}</h6>
                                                <ul className="list-unstyled text-warning mb-0">
                                                    <li className="list-inline-item "> <ReactStars className=' ml-5'
                                                        count={5}
                                                        value={parseInt(val.star)}
                                                        size={24}
                                                        color1='grey'
                                                        color2='gold' /></li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>



                                </div>
                            )
                        })}



                    </div>


                </div>
            </section>

        </>
    )
}

export default Drshop

// e.preventDefault();
// dispatch(addProducts(val));