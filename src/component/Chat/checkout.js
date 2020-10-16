import React from 'react'

function checkout() {
    return (
        <div>
            <div>
                <div className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="user-menu">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-user" /> My Account</a></li>
                                        <li><a href="#"><i className="fa fa-heart" /> Wishlist</a></li>
                                        <li><a href="cart.html"><i className="fa fa-user" /> My Cart</a></li>
                                        <li><a href="checkout.html"><i className="fa fa-user" /> Checkout</a></li>
                                        <li><a href="#"><i className="fa fa-user" /> Login</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="header-right">
                                    <ul className="list-unstyled list-inline">
                                        <li className="dropdown dropdown-small">
                                            <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">currency :</span><span className="value">USD </span><b className="caret" /></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">USD</a></li>
                                                <li><a href="#">INR</a></li>
                                                <li><a href="#">GBP</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown dropdown-small">
                                            <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">language :</span><span className="value">English </span><b className="caret" /></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">French</a></li>
                                                <li><a href="#">German</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End header area */}
                <div className="site-branding-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="logo">
                                    <h1><a href="./"><img src="img/logo.png" /></a></h1>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="shopping-item">
                                    <a href="cart.html">Cart - <span className="cart-amunt">$100</span> <i className="fa fa-shopping-cart" /> <span className="product-count">5</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End site branding area */}
                <div className="mainmenu-area">
                    <div className="container">
                        <div className="row">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="shop.html">Shop page</a></li>
                                    <li><a href="single-product.html">Single product</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="#">Category</a></li>
                                    <li><a href="#">Others</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> {/* End mainmenu area */}
                <div className="slider-area">
                    {/* Slider */}
                    <div className="block-slider block-slider4">
                        <ul className id="bxslider-home4">
                            <li>
                                <img src="img/h4-slide.png" alt="Slide" />
                                <div className="caption-group">
                                    <h2 className="caption title">
                                        iPhone <span className="primary">6 <strong>Plus</strong></span>
                                    </h2>
                                    <h4 className="caption subtitle">Dual SIM</h4>
                                    <a className="caption button-radius" href="#"><span className="icon" />Shop now</a>
                                </div>
                            </li>
                            <li><img src="img/h4-slide2.png" alt="Slide" />
                                <div className="caption-group">
                                    <h2 className="caption title">
                                        by one, get one <span className="primary">50% <strong>off</strong></span>
                                    </h2>
                                    <h4 className="caption subtitle">school supplies &amp; backpacks.*</h4>
                                    <a className="caption button-radius" href="#"><span className="icon" />Shop now</a>
                                </div>
                            </li>
                            <li><img src="img/h4-slide3.png" alt="Slide" />
                                <div className="caption-group">
                                    <h2 className="caption title">
                                        Apple <span className="primary">Store <strong>Ipod</strong></span>
                                    </h2>
                                    <h4 className="caption subtitle">Select Item</h4>
                                    <a className="caption button-radius" href="#"><span className="icon" />Shop now</a>
                                </div>
                            </li>
                            <li><img src="img/h4-slide4.png" alt="Slide" />
                                <div className="caption-group">
                                    <h2 className="caption title">
                                        Apple <span className="primary">Store <strong>Ipod</strong></span>
                                    </h2>
                                    <h4 className="caption subtitle">&amp; Phone</h4>
                                    <a className="caption button-radius" href="#"><span className="icon" />Shop now</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* ./Slider */}
                </div> {/* End slider area */}
                <div className="promo-area">
                    <div className="zigzag-bottom" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo1">
                                    <i className="fa fa-refresh" />
                                    <p>30 Days return</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo2">
                                    <i className="fa fa-truck" />
                                    <p>Free shipping</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo3">
                                    <i className="fa fa-lock" />
                                    <p>Secure payments</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo4">
                                    <i className="fa fa-gift" />
                                    <p>New products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End promo area */}
                <div className="maincontent-area">
                    <div className="zigzag-bottom" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="latest-product">
                                    <h2 className="section-title">Latest Products</h2>
                                    <div className="product-carousel">
                                        <div className="single-product">
                                            <div className="product-f-image">
                                                <img src="img/product-1.jpg" alt="" />
                                                <div className="product-hover">
                                                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                                                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                                                </div>
                                            </div>
                                            <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>
                                            <div className="product-carousel-price">
                                                <ins>$700.00</ins> <del>$100.00</del>
                                            </div>
                                        </div>
                                        <div className="single-product">
                                            <div className="product-f-image">
                                                <img src="img/product-2.jpg" alt="" />
                                                <div className="product-hover">
                                                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                                                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                                                </div>
                                            </div>
                                            <h2>Nokia Lumia 1320</h2>
                                            <div className="product-carousel-price">
                                                <ins>$899.00</ins> <del>$999.00</del>
                                            </div>
                                        </div>
                                        <div className="single-product">
                                            <div className="product-f-image">
                                                <img src="img/product-3.jpg" alt="" />
                                                <div className="product-hover">
                                                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                                                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                                                </div>
                                            </div>
                                            <h2>LG Leon 2015</h2>
                                            <div className="product-carousel-price">
                                                <ins>$400.00</ins> <del>$425.00</del>
                                            </div>
                                        </div>
                                        <div className="single-product">
                                            <div className="product-f-image">
                                                <img src="img/product-4.jpg" alt="" />
                                                <div className="product-hover">
                                                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                                                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                                                </div>
                                            </div>
                                            <h2><a href="single-product.html">Sony microsoft</a></h2>
                                            <div className="product-carousel-price">
                                                <ins>$200.00</ins> <del>$225.00</del>
                                            </div>
                                        </div>
                                        <div className="single-product">
                                            <div className="product-f-image">
                                                <img src="img/product-5.jpg" alt="" />
                                                <div className="product-hover">
                                                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                                                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                                                </div>
                                            </div>
                                            <h2>iPhone 6</h2>
                                            <div className="product-carousel-price">
                                                <ins>$1200.00</ins> <del>$1355.00</del>
                                            </div>
                                        </div>
                                        <div className="single-product">
                                            <div className="product-f-image">
                                                <img src="img/product-6.jpg" alt="" />
                                                <div className="product-hover">
                                                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                                                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                                                </div>
                                            </div>
                                            <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                                            <div className="product-carousel-price">
                                                <ins>$400.00</ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End main content area */}
                <div className="brands-area">
                    <div className="zigzag-bottom" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="brand-wrapper">
                                    <div className="brand-list">
                                        <img src="img/brand1.png" alt="" />
                                        <img src="img/brand2.png" alt="" />
                                        <img src="img/brand3.png" alt="" />
                                        <img src="img/brand4.png" alt="" />
                                        <img src="img/brand5.png" alt="" />
                                        <img src="img/brand6.png" alt="" />
                                        <img src="img/brand1.png" alt="" />
                                        <img src="img/brand2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End brands area */}
                <div className="product-widget-area">
                    <div className="zigzag-bottom" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-product-widget">
                                    <h2 className="product-wid-title">Top Sellers</h2>
                                    <a href className="wid-view-more">View All</a>
                                    <div className="single-wid-product">
                                        <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                                        <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                                        <div className="product-wid-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product-wid-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                    <div className="single-wid-product">
                                        <a href="single-product.html"><img src="img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
                                        <h2><a href="single-product.html">Apple new mac book 2015</a></h2>
                                        <div className="product-wid-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product-wid-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                    <div className="single-wid-product">
                                        <a href="single-product.html"><img src="img/product-thumb-3.jpg" alt="" className="product-thumb" /></a>
                                        <h2><a href="single-product.html">Apple new i phone 6</a></h2>
                                        <div className="product-wid-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product-wid-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-product-widget">
                                    <h2 className="product-wid-title">Recently Viewed</h2>
                                    <a href="#" className="wid-view-more">View All</a>
                                    <div className="single-wid-product">
                                        <a href="single-product.html"><img src="img/product-thumb-4.jpg" alt="" className="product-thumb" /></a>
                                        <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
                                        <div className="product-wid-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product-wid-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                    <div className="single-wid-product">
                                        <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                                        <h2><a href="single-product.html">Sony Smart Air Condtion</a></h2>
                                        <div className="product-wid-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product-wid-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                    <div className="single-wid-product">
                                        <a href="single-product.html"><img src="img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
                                        <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                                        <div className="product-wid-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product-wid-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-product-widget">
                                    <h2 className="product-wid-title">Top New</h2>
                                    <a href="#" className="wid-view-more">View All</a>
                                    <div className="single-wid-product">
                                        <a href="single-product.html"><img src="img/product-thumb-3.jpg" alt="" className="product-thumb" /></a>
                                        <h2><a href="single-product.html">Apple new i phone 6</a></h2>
                                        <div className="product-wid-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product-wid-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                    <div className="single-wid-product">
                                        <a href="single-product.html"><img src="img/product-thumb-4.jpg" alt="" className="product-thumb" /></a>
                                        <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                                        <div className="product-wid-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product-wid-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                    <div className="single-wid-product">
                                        <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                                        <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
                                        <div className="product-wid-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product-wid-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End product widget area */}
                <div className="footer-top-area">
                    <div className="zigzag-bottom" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-about-us">
                                    <h2>u<span>Stora</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                                    <div className="footer-social">
                                        <a href="#" target="_blank"><i className="fa fa-facebook" /></a>
                                        <a href="#" target="_blank"><i className="fa fa-twitter" /></a>
                                        <a href="#" target="_blank"><i className="fa fa-youtube" /></a>
                                        <a href="#" target="_blank"><i className="fa fa-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-menu">
                                    <h2 className="footer-wid-title">User Navigation </h2>
                                    <ul>
                                        <li><a href="#">My account</a></li>
                                        <li><a href="#">Order history</a></li>
                                        <li><a href="#">Wishlist</a></li>
                                        <li><a href="#">Vendor contact</a></li>
                                        <li><a href="#">Front page</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-menu">
                                    <h2 className="footer-wid-title">Categories</h2>
                                    <ul>
                                        <li><a href="#">Mobile Phone</a></li>
                                        <li><a href="#">Home accesseries</a></li>
                                        <li><a href="#">LED TV</a></li>
                                        <li><a href="#">Computer</a></li>
                                        <li><a href="#">Gadets</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-newsletter">
                                    <h2 className="footer-wid-title">Newsletter</h2>
                                    <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <input type="email" placeholder="Type your email" />
                                            <input type="submit" defaultValue="Subscribe" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End footer top area */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="copyright">
                                    <p>© 2015 uCommerce. All Rights Reserved. <a href="http://www.freshdesignweb.com" target="_blank">freshDesignweb.com</a></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-card-icon">
                                    <i className="fa fa-cc-discover" />
                                    <i className="fa fa-cc-mastercard" />
                                    <i className="fa fa-cc-paypal" />
                                    <i className="fa fa-cc-visa" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkout
