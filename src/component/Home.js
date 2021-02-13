import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

class Home extends Component {
          
    render() {
        return (
            <div>

                {/* Search Area */}
                <div className="fancy-search-form d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                
                                <div className="search-close-btn" id="closeBtn">
                                    <i className="ti-close" aria-hidden="true"></i>
                                </div>
                                
                                <form action="#" method="get">
                                    <input type="search" name="fancySearch" id="search" placeholder="| Enter Your Search..." />
                                    <input type="submit" className="d-none" value="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="header-sticky-wrapper" className="sticky-wrapper" style={{height: "100px"}}>
                    <header className="header_area" id="header" style={{ width: "100%" }}>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12 h-100">
                        <nav className="h-100 navbar navbar-expand-lg align-items-center">
                        <a className="navbar-brand" href="/">
                            <span style={{fontSize: "30px"}} className="logo-text">Suwaibat<span style={{color: "#6ED190"}}>Sub</span>
                        </span>
                        </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#fancyNav" aria-controls="fancyNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars" aria-hidden="true" id="fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="fancyNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/"><Link to="/"> Home </Link><span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/buy/airtime">Airtime</a>
                                            <a className="dropdown-item" href="/buy/data">Data</a>
                                            <a className="dropdown-item" href="https://Suwaibatsub.com/user/login">Bulk SMS</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/mtn-cug">MTN CUG</a>
                                    </li>
                                                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                         <a className="btn btn-outline-primary nav-link"><Link to="/login">LOGIN</Link></a>
                                    </li>
                                 </ul>
                               </div>
                            </nav>
                         </div>
                      </div>
                    </div>
                 </header>
               </div>

                
               {/* Header Area End*/}
               <section id="intro">
                    <div className="intro-container">
                            <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                            <ol className="carousel-indicators" style={{backgroundColor: "black"}}></ol>
                            <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="carousel-background" style={{width:"100%"}}>
                                
                                </div>
                                <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>SuwaibatSub</h2>
                                    <p>Buy Data for all networks (MTN, GLO, AIRTEL, 9MOBILE) at the cheapest rate ever. Get 1GB @ #350. Data is valid for 1 month and works with all internet enabled devices (Android, iphone, Computers, Modems, Routers, Mifi,…)</p>
                                    <a href="https://Suwaibatsub.com/user/register" className="btn fancy-btn"><Link to="/register">Register with us</Link></a>

                                </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-background">
                                    
                                </div>
                                <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>Cheap Data Bundles</h2>
                                    <p>Buy Data for all networks (MTN, GLO, AIRTEL, 9MOBILE) at the cheapest rate ever. Get 1GB @ #350. Data is valid for 1 month and works with all internet enabled devices (Android, iphone, Computers, Modems, Routers, Mifi,…)</p>
                                    <a href="https://Suwaibatsub.com/user/register" className="btn fancy-btn">Register with us</a>
                                </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-background">
                                    
                                </div>
                                <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>Instant Airtime Top Up</h2>
                                    <p>Both vtu and recharge pins for all networks are available on this platform. You can recharge yourself, your friends or even resell. Huge discounts await you. Also note that with SuwaibatSub.com you can convert your excess airtime to cash in your bank account.</p>
                                    <a href="https://Suwaibatsub.com/user/register" className="btn fancy-btn">Register with us</a>
                                </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-background">
                                    
                                </div>
                                <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>Automated Electricity Bill Payment</h2>
                                    <p>Simple, Convinient And Affordable Electricty Bills Payment from the comfort of your home. Receive instant Tokens generated for your meter.</p>
                                    <a href="https://Suwaibatsub.com/user/register" className="btn fancy-btn">Register with us</a>
                                </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-background">
                                    
                                </div>
                                <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>Cheap And Affordable BULKSMS Services</h2>
                                    <p>Send customized bulkSMS to multiple phone number easily with instant delivery over our robust bulkSMS servers. Two ways SMS also available for your other needs.</p>
                                    <a href="https://Suwaibatsub.com/user/register" className="btn fancy-btn">Register with us</a>
                                </div>
                                </div>
                            </div>

                            </div>

                            <a className="carousel-control-prev" style={{zIndex: 1}} href="#introCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true">&lt;</span>
                            <span className="sr-only">Previous</span>
                            </a>

                            <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true">&gt;</span>
                            <span className="sr-only">Next</span>
                            </a>

                        </div>
                      </div>
                    </section>


                    {/* Top Feature Area Start*/}
                    <div className="fancy-top-features-area bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="fancy-top-features-content">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-md-4">
                                            <div className="single-top-feature">
                                                <h5><i className="fas fa-thumbs-up" aria-hidden="true"></i> Our Vision</h5>
                                                <p>We have a vision to share the profit in the telecoms industry in Nigeria among all Nigerians.</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="single-top-feature">
                                                <h5><i className="fas fa-clock" aria-hidden="true"></i> Our Mission</h5>
                                                <p>We hope to make at least a person in every family in Nigeria an owner of an instant digital recharge platform.</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="single-top-feature">
                                                <h5><i className="far fa-gem"></i> Our Values</h5>
                                                <p>We believe Together Everyone Achieves More. We create sustainable income for all. We let our integrity speak.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Service Area */}
                <section className="fancy-services-area section-padding-100-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading  text-center">
                                    
                                    <br />
                                    
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row">
                {/* Single Service */} 
                        <div className="col-12 col-md-3">
                            <div className="single-service-area text-center wow fadeInUp" data-wow-delay="0.5s" style={{ animationDelay: "1.5s", animationName: "none" }}>
                            <i className="far fa-gem"></i>
                                <div className="text-dark">
                                    <h5 className="text-dark">Join our Online Sales Team</h5>
                                    <p className="text-dark">Apply as Suwaibat Online Marketer and earn up to #50,000 monthly as salary.</p>
                                </div>
                            </div>
                        </div>
                {/* Single Service */}
                        <div className="col-12 col-md-3">
                            <div className="single-service-area text-center wow fadeInUp" data-wow-delay="1s" style={{ animationDelay: "1.5s", animationName: "none" }}>
                            <i className="far fa-gem"></i>
                                <div className="text-dark">
                                    <h5 className="text-dark">Own a website like Suwaibatsub.com</h5>
                                    <p className="text-dark">Get a reseller website for this business. Your customers will be able to pay directly to your account just as you do on Suwaibatsub.com, you will be able to set your selling price per product. Even when you are sleeping, you are earning.</p>
                                </div>
                            </div>
                        </div>
                {/* Single Service */}
                        <div className="col-12 col-md-3">
                            <div className="single-service-area text-center wow fadeInUp" data-wow-delay="1.5s" style={{ animationDelay: "1.5s", animationName: "none" }}>
                            <i className="far fa-gem"></i>
                                <div className="text-dark">
                                    <h5 className="text-dark">Refer and Earn</h5>
                                    <p className="text-dark">Invite your friends and family to join Suwaibatsub.com and instantly earn a referral bonus for every major service they purchase on our website. Earn as much as #500 bonus for every CUG subscriber you refer to us.</p>
                                </div>
                            </div>
                        </div>
                {/* Single Service */}
                        <div className="col-12 col-md-3">
                            <div className="single-service-area text-center wow fadeInUp" data-wow-delay="1.5s" style={{ animationDelay: "1.5s", animationName: "none" }}>
                            <i className="far fa-gem"></i>
                                <div className="text-dark">
                                    <h5 className="text-dark">Get Trained</h5>
                                    <p className="text-dark">Let’s help you with our wealth of experience in this business. We will train and mentor you to become a major dealer in telecommunication business. You will be able to sell manually to your customers and maximize profit. We will stand by you to ensure that you succeed in your new business venture.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Blog Arae Start */}

            <section className="fancy-blog-area section-padding-100-70"  id="main-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading text-center">
                                    <h2>Our Services</h2>
                                    <p>At Suwaibat, Our Integrity Speaks</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* Single Blog */}
                            <div className="col-12 col-md-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp" }}>
                                    
                                    <div className="blog-content">
                                        <h5><a href="static-page.html">MTN CUG</a></h5>
                                        <p>Our CUG gives you access to enjoy unlimited free calls (24/7) and unlimited free SMS with your CUG Partner(s). Either you or your CUG partner can initiate the free call (you do not need to have any airtime on your line before you make call). You can enjoy this service on any MTN line (you can activate CUG on your existing line and you can also get a new line for this service). You can become a CUG Agent and earn massive recursive income.
                                            </p>
                                        <a href="static-page.html">Get started</a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Blog */}
                            <div className="col-12 col-md-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="1s" style={{ visibility: "visible", animationDelay: "1s", animationName: "fadeInUp" }}>
                                    
                                    <div className="blog-content">
                                        <h5><a href="static-page.html">Data Bundles</a></h5>
                                        <p>Buy Data for all networks (MTN, GLO, AIRTEL, 9MOBILE)
                                            at the cheapest rate ever.
                                            Get  1GB @ #350. Data is valid for 1 month
                                            and works with all internet enabled devices
                                            (Android, iphone, Computers, Modems, Routers, Mifi,…)</p>
                                        <a href="static-page.html">Buy Data</a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Blog */}
                            <div className="col-12 col-md-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="1.5s" style={{ visibility: "visible", animationDelay: "1.5s", animationName: "fadeInUp" }}>
                                    
                                    <div className="blog-content">
                                        <h5><a href="static-page.html">Airtime Topup</a></h5>
                                        <p>Both vtu and recharge pins for all networks are available on this platform. You can recharge yourself, your friends or even resell. Huge discounts await you.
                                            Also note that with SuwaibatSub.com  you can convert your excess airtime to cash in your bank account.
                                            Recharge Now</p>
                                        <a href="static-page.html">Recharge Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* Single Blog */}
                            <div className="col-12 col-md-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="1s" style={{ visibility: "visible", animationDelay: "1s", animationName: "fadeInUp" }}>
                                    
                                    <div className="blog-content">
                                        <h5><a href="static-page.html">Bulk SMS</a></h5>
                                        <p>Send bulk SMS at the cheapest price in Nigeria (pay as low as #1 per unit) with an assurance of 100% sms delivery to all numbers (both DND and NON-DND).
                                            </p>
                                        <a href="static-page.html">Send Bulk SMS Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Blog */}
                            <div className="col-12 col-md-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp" }}>
                                    
                                    <div className="blog-content">
                                        <h5><a href="static-page.html">Cable TV/Electricity Bills Payment</a></h5>
                                        <p>Instantly recharge your Gotv, Dstv, Startimes, e.t.c. Recharge Now Pay your Postpaid and Prepaid electricity bill. Effortless, Faster, Reliable and Convenient. Pay Now</p>
                                        <a href="static-page.html">Learn More</a>
                                    </div>
                                </div>
                            </div>

                            {/* Single Blog */}  
                            <div className="col-12 col-md-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="1.5s" style={{ visibility: "visible", animationDelay: "1.5s", animationName: "fadeInUp" }}>
                                    
                                    <div className="blog-content">
                                        <h5><a href="static-page.html">Exam Cards</a></h5>
                                        <p>Buy WAEC, NECO, UTME, NABTEB e.t.c examination scratch cards. Suwaibatsub.com avails you a cheaper and a more convenient option.
                                            </p>
                                        <a href="static-page.html">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Blog */}
                            <div className="col-12 col-md-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="1s" style={{ visibility: "visible", animationDelay: "1s", animationName: "fadeInUp" }}>
                                    
                                    <div className="blog-content">
                                        <h5><a href="static-page.html">Electricity Bills Payment</a></h5>
                                        <p>Pay your Postpaid and Prepaid electricity bill. Effortless, Faster, Reliable and Convenient.
                                            </p>
                                        <a href="static-page.html">Pay Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Product Area */}

                <section className="fancy-services-area bg-img bg-overlay section-padding-100-70" style={{ backgroundImage: "url(l_asset/img/bg-img/hero-2.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading heading-white text-center">
                                    <h2>Our Products</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            
                            <div className="col-12 col-md-3">
                                <div className="single-service-area text-center wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp" }}>
                                    <i className="ti-rss-alt"></i>
                                    <h5>Sales of internet devices</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                            <div className="col-12 col-md-3">
                                <div className="single-service-area text-center wow fadeInUp" data-wow-delay="1s" style={{ visibility: "visible", animationDelay: "1s", animationName: "fadeInUp" }}>
                                    <i className="ti-bar-chart-alt"></i>
                                    <h5>Router for all networks</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                            <div className="col-12 col-md-3">
                                <div className="single-service-area text-center wow fadeInUp" data-wow-delay="1.5s" style={{ visibility: "visible", animationDelay: "1.5s", animationName: "fadeInUp" }}>
                                    <i className="ti-files"></i>
                                    <h5>Mifi for all networks</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                            <div className="col-12 col-md-3">
                                <div className="single-service-area text-center wow fadeInUp" data-wow-delay="1.5s" style={{ visibility: "visible", animationDelay: "1.5s", animationName: "fadeInUp" }}>
                                    <i className="ti-id-badge"></i>
                                    <h5>Sim card for all networks</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Us Area */}

                <section className="fancy-cta-area bg-img bg-overlay section-padding-100" style={{ backgroundImage: "url(l_asset/img/bg-img/hero-3.jpg)" }} id="main-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cta-content text-center">
                                    <h2>Ready To Get A Website?</h2>
                                    <p>Request for a website like www.Suwaibatsub.com today. You do not need any special knowledge to have a website for this business, simply check for the availability of your desired domain name and send it to us, we are here to help you with the rest.</p>
                                    <a href="#" className="btn fancy-btn"><Link to="/register">Register with us</Link></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Footer Area */}


                <footer class="fancy-footer-area fancy-bg-dark">
                    <div class="footer-content section-padding-80-50">
                        <div class="container">
                            <div class="row">


                                {/* Footer Widget */} 
                                
                                <div class="col-12 col-sm-6 col-lg-3">
                                    <div class="single-footer-widget">
                                        <h6>Our Newsletter</h6>
                                        <p>Subscribe to our mailing list to get the updates to your email inbox.</p>
                                        <form action="#" method="get">
                                            <input type="search" name="search" id="footer-search" placeholder="E-mail" />
                                            <button type="submit">Subscribe</button>
                                        </form>
                                        <div class="footer-social-widegt d-flex align-items-center">
                                            <a target="_blank" href="https://web.facebook.com/"><i class="fab fa-facebook"></i></a>
                                            <a target="_blank" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                            <a target="_blank" href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                                            <a target="_blank" href="https://www.instagram.com/Suwaibat_telecoms/"><i class="fab fa-instagram"></i></a>
                                            <a target="_blank" href="https://wa.me/2347032623101"><i class="fab fa-whatsapp"></i></a>
                                        </div>
                                    </div>
                                </div>


                                {/* Footer Widget */} 

                                <div class="col-12 col-sm-6 col-lg-2">
                                    <div class="single-footer-widget">
                                        <h6>SUWAIBATSUB.</h6>
                                        <div class="single-tweet">
                                            <a href="#"><i class="fa fa-info-circle" aria-hidden="true"></i> At Suwaibat, Our Integrity Speaks</a>
                                        </div>
                                    </div>
                                </div>


                                {/* Footer Widget */} 

                                <div className="col-12 col-sm-6 col-lg-4">
                                    <div className="single-footer-widget">
                                        <h6>Services</h6>
                                        <nav>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Fund Transfer</a></li>
                                                <li><a href="/buy/data"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Data Bundle</a></li>
                                                <li><a href="http://Suwaibatsub.com.com/user/login"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Cable Tv Subscription</a></li>
                                                <li><a href="/mtn-cug"><i className="fa fa-angle-double-right" aria-hidden="true"></i> MTN CUG</a></li>
                                                <li><a href="http://Suwaibatsub.com.com/user/login"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Bulk SMS</a></li>
                                                <li><a href="http://Suwaibatsub.com.com/user/login"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Exam Scratch Cards</a></li>
                                                <li><a href="http://Suwaibatsub.com.com/user/login"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Recharge Cards</a></li>
                                                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Privacy</a></li> 
                                                <li><a href="http://Suwaibatsub.com.com/user/login"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Electricity bill Payment</a></li>
                                                <li><a href="/buy/airtime"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Instant Airtime Recharge</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>


                                {/* Footer Widget */} 
                                
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget">
                                        <h6>Contact Us</h6>
                                        <p>07032623101 , 08067391647</p>
                                        <p>Email: Suwaibatidea@gmail.com , info@Suwaibatsub.com</p>
                                        <p>8, Seynu-A-Seyne House,<br /> Yola, Adamawa State.</p>
                                        <p>Open hours: 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    {/* Footer Copywrite */} 

                    <div className="footer-copywrite-area">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 h-100">
                                    <div className="copywrite-content h-100 d-flex align-items-center justify-content-between">
                                        
                                        
                                        {/* Footer Nav */}  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </footer>
                
         </div>
        )
    }
}
 
export default Home;