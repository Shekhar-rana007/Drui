import React from 'react'
import ReactStars from 'react-stars';
const Drshop = () => {

    const shopitems = [
        {
            img: "https://shreethemes.in/doctris/layouts/assets/images/pharmacy/shop/thermometer.jpg",
            productName: "Thermometer",
            price: "$16.00",
            star: "5"
        },
        {
            img: "https://shreethemes.in/doctris/layouts/assets/images/pharmacy/shop/stethoscope.jpg",
            productName: "Stethoscope",
            price: "$16.00",
            star: "5"
        },
        {
            img: "https://shreethemes.in/doctris/layouts/assets/images/pharmacy/shop/pulse-oximeter.jpg",
            productName: "Pulse oximeter",
            price: "$16.00",
            star: "4"
        },
        {
            img: "https://shreethemes.in/doctris/layouts/assets/images/pharmacy/shop/medicine.jpg",
            productName: "Medicine pills",
            price: "$16.00",
            star: "4.5"
        },
        {
            img: "https://shreethemes.in/doctris/layouts/assets/images/pharmacy/shop/smoking-habit.jpg",
            productName: "Smokill smoking habit",
            price: "$16.00",
            star: "5"
        },
        {
            img: "https://shreethemes.in/doctris/layouts/assets/images/pharmacy/shop/sanitizer.jpg",
            productName: "Sanitizer",
            price: "$16.00",
            star: "3"
        },
        {
            img: "https://shreethemes.in/doctris/layouts/assets/images/pharmacy/shop/nicotex.jpg",
            productName: "Nicotex",
            price: "$16.00",
            star: "1"
        },
        {
            img: "https://shreethemes.in/doctris/layouts/assets/images/pharmacy/shop/medigrip.jpg",
            productName: "Medigrip",
            price: "$16.00",
            star: "5"
        }
    ]

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
                                    <div className='col-lg-3 col-md-6 col-12 mt-4 pt-2 ' key={items}>
                                        <div className="card shop-list border-0">
                                            <ul className="label list-unstyled mb-0">
                                                <li>
                                                    <a href="" className="badge rounded-pill badge-success">
                                                        Featured
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="shop-image position-relative overflow-hidden rounded shadow">
                                                <a href="pharmacy-product-detail.html">
                                                    <img src={val
                                                    .img} className="img-fluid"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>

                                            <div className="card-body content pt-4 p-2">

                                                <a href="pharmacy-product-detail.html" className=" text-decoration-none text-dark product-name h6" >{val.productName}</a>
                                                <div className="d-flex justify-content-between mt-1">
                                                    <h6 className="text-muted small font-italic mb-0 mt-1">{val.price}</h6>
                                                    <ul className="list-unstyled text-warning mb-0">
                                                        <li className="list-inline-item "> <ReactStars className=' ml-5'
                                                            count={5}
                                                            value={ parseInt( val.star)}
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