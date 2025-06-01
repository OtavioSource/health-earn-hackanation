function OverviewContent() {
  return (
                <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                    <div className="title-group mb-3">
                        <h1 className="h2 mb-0">Overview</h1>

                        <small className="text-muted">Hello Thomas, welcome back!</small>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-7 col-12">
                            <div className="custom-block custom-block-balance">
                                <small>Your Balance</small>

                                <h2 className="mt-2 mb-3">$254,800</h2>

                                <div className="custom-block-numbers d-flex align-items-center">
                                    <span>****</span>
                                    <span>****</span>
                                    <span>****</span>
                                    <p>2560</p>
                                </div>

                                <div className="d-flex">
                                    <div>
                                        <small>Valid Date</small>
                                        <p>12/2028</p>
                                    </div>

                                    <div className="ms-auto">
                                        <small>Card Holder</small>
                                        <p>Thomas</p>
                                    </div>
                                </div>
                            </div>

                            <div className="custom-block bg-white">
                                <h5 className="mb-4">History</h5>

                                <div id="pie-chart"></div>
                            </div>

                            <div className="custom-block bg-white">
                                <div id="chart"></div>
                            </div>

                            <div className="custom-block custom-block-exchange">
                                <h5 className="mb-4">Exchange Rate</h5>

                                <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                    <div className="d-flex align-items-center">
                                        <img src="images/flag/united-states.png" className="exchange-image img-fluid" alt=""/>

                                        <div>
                                            <p>USD</p>
                                            <h6>1 US Dollar</h6>
                                        </div>
                                    </div>

                                    <div className="ms-auto me-4">
                                        <small>Sell</small>
                                        <h6>1.0931</h6>
                                    </div>

                                    <div>
                                        <small>Buy</small>
                                        <h6>1.0821</h6>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                    <div className="d-flex align-items-center">
                                        <img src="images/flag/singapore.png" className="exchange-image img-fluid" alt=""/>

                                        <div>
                                            <p>SGD</p>
                                            <h6>1 Singapore Dollar</h6>
                                        </div>
                                    </div>

                                    <div className="ms-auto me-4">
                                        <small>Sell</small>
                                        <h6>0.6901</h6>
                                    </div>

                                    <div>
                                        <small>Buy</small>
                                        <h6>0.6201</h6>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                    <div className="d-flex align-items-center">
                                        <img src="images/flag/united-kingdom.png" className="exchange-image img-fluid" alt=""/>

                                        <div>
                                            <p>GPD</p>
                                            <h6>1 British Pound</h6>
                                        </div>
                                    </div>

                                    <div className="ms-auto me-4">
                                        <small>Sell</small>
                                        <h6>1.1520</h6>
                                    </div>

                                    <div>
                                        <small>Buy</small>
                                        <h6>1.1412</h6>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                    <div className="d-flex align-items-center">
                                        <img src="images/flag/australia.png" className="exchange-image img-fluid" alt=""/>

                                        <div>
                                            <p>AUD</p>
                                            <h6>1 Australian Dollar</h6>
                                        </div>
                                    </div>

                                    <div className="ms-auto me-4">
                                        <small>Sell</small>
                                        <h6>0.6110</h6>
                                    </div>

                                    <div>
                                        <small>Buy</small>
                                        <h6>0.5110</h6>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src="images/flag/european-union.png" className="exchange-image img-fluid" alt=""/>

                                        <div>
                                            <p>EUR</p>
                                            <h6>1 Euro</h6>
                                        </div>
                                    </div>

                                    <div className="ms-auto me-4">
                                        <small>Sell</small>
                                        <h6>1.1020</h6>
                                    </div>

                                    <div>
                                        <small>Buy</small>
                                        <h6>1.1010</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12">
                            <div className="custom-block custom-block-profile-front custom-block-profile text-center bg-white">
                                <div className="custom-block-profile-image-wrap mb-4">
                                    <img src="images/medium-shot-happy-man-smiling.jpg" className="custom-block-profile-image img-fluid" alt=""/>

                                    <a href="setting.html" className="bi-pencil-square custom-block-edit-icon"></a>
                                </div>

                                <p className="d-flex flex-wrap mb-2">
                                    <strong>Name:</strong>

                                    <span>Thomas Edison</span>
                                </p>

                                <p className="d-flex flex-wrap mb-2">
                                    <strong>Email:</strong>
                                    
                                    <a href="#">
                                        thomas@site.com
                                    </a>
                                </p>

                                <p className="d-flex flex-wrap mb-0">
                                    <strong>Phone:</strong>

                                    <a href="#">
                                        (60) 12 345 6789
                                    </a>
                                </p>
                            </div>

                            <div className="custom-block custom-block-bottom d-flex flex-wrap">
                                <div className="custom-block-bottom-item">
                                    <a href="#" className="d-flex flex-column">
                                        <i className="custom-block-icon bi-wallet"></i>

                                        <small>Top up</small>
                                    </a>
                                </div>

                                <div className="custom-block-bottom-item">
                                    <a href="#" className="d-flex flex-column">
                                        <i className="custom-block-icon bi-upc-scan"></i>

                                        <small>Scan & Pay</small>
                                    </a>
                                </div>

                                <div className="custom-block-bottom-item">
                                    <a href="#" className="d-flex flex-column">
                                        <i className="custom-block-icon bi-send"></i>

                                        <small>Send</small>
                                    </a>
                                </div>

                                <div className="custom-block-bottom-item">
                                    <a href="#" className="d-flex flex-column">
                                        <i className="custom-block-icon bi-arrow-down"></i>

                                        <small>Request</small>
                                    </a>
                                </div>
                            </div>

                            <div className="custom-block custom-block-transations">
                                <h5 className="mb-4">Recent Transations</h5>

                                <div className="d-flex flex-wrap align-items-center mb-4">
                                    <div className="d-flex align-items-center">
                                        <img src="images/profile/senior-man-white-sweater-eyeglasses.jpg" className="profile-image img-fluid" alt=""/>

                                        <div>
                                            <p>
                                                <a href="transation-detail.html">Daniel Jones</a>
                                            </p>

                                            <small className="text-muted">C2C Transfer</small>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <small>05/12/2023</small>
                                        <strong className="d-block text-danger"><span className="me-1">-</span> $250</strong>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap align-items-center mb-4">
                                    <div className="d-flex align-items-center">
                                        <img src="images/profile/young-beautiful-woman-pink-warm-sweater.jpg" className="profile-image img-fluid" alt=""/>

                                        <div>
                                            <p>
                                                <a href="transation-detail.html">Public Bank</a>
                                            </p>

                                            <small className="text-muted">Mobile Reload</small>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <small>22/8/2023</small>
                                        <strong className="d-block text-success"><span className="me-1">+</span> $280</strong>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src="images/profile/young-woman-with-round-glasses-yellow-sweater.jpg" className="profile-image img-fluid" alt=""/>

                                        <div>
                                            <p><a href="transation-detail.html">Store</a></p>

                                            <small className="text-muted">Payment Received</small>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <small>22/8/2023</small>
                                        <strong className="d-block text-success"><span className="me-1">+</span> $280</strong>
                                    </div>
                                </div>

                                <div className="border-top pt-4 mt-4 text-center">
                                    <a className="btn custom-btn" href="wallet.html">
                                        View all transations
                                        <i className="bi-arrow-up-right-circle-fill ms-2"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="custom-block primary-bg">
                                <h5 className="text-white mb-4">Send Money</h5>

                                <a href="#">
                                    <img src="images/profile/young-woman-with-round-glasses-yellow-sweater.jpg" className="profile-image img-fluid" alt=""/>
                                </a>

                                <a href="#">
                                    <img src="images/profile/young-beautiful-woman-pink-warm-sweater.jpg" className="profile-image img-fluid" alt=""/>
                                </a>

                                <a href="#">
                                    <img src="images/profile/senior-man-white-sweater-eyeglasses.jpg" className="profile-image img-fluid" alt=""/>
                                </a>

                                <div className="profile-rounded">
                                    <a href="#">
                                        <i className="profile-rounded-icon bi-plus"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <footer className="site-footer">
                        <div className="container">
                            <div className="row">
                                
                                <div className="col-lg-12 col-12">
                                    <p className="copyright-text">Copyright © Mini Finance 2048 
                                    - Design: <a rel="sponsored" href="https://www.tooplate.com" target="_blank">Tooplate</a></p>
                                </div>

                            </div>
                        </div>
                    </footer>
                </main>
  );
}

export default OverviewContent;