function SettingsContent() {

    return (
                <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                    <div className="title-group mb-3">
                        <h1 className="h2 mb-0">Settings</h1>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-7 col-12">
                            <div className="custom-block bg-white">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="true">Profile</button>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                        <h6 className="mb-4">User Profile</h6>

                                        <form className="custom-form profile-form" action="#" method="post" role="form">
                                            <input className="form-control" type="text" name="profile-name" id="profile-name" placeholder="John Doe"/>

                                            <input className="form-control" type="email" name="profile-email" id="profile-email" placeholder="Johndoe@gmail.com"/>

                                            <div className="input-group mb-1">
                                                <img src="images/profile/senior-man-white-sweater-eyeglasses.jpg" className="profile-image img-fluid" alt=""/>

                                                <input type="file" className="form-control" id="inputGroupFile02"/>
                                            </div>

                                            <div className="d-flex">
                                                <button type="button" className="form-control me-3">
                                                    Reset
                                                </button>

                                                <button type="submit" className="form-control ms-2">
                                                    Update
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12">
                            <div className="custom-block custom-block-contact">
                                <h6 className="mb-4">Still can’t find what you looking for?</h6>
                                <a href="#" className="btn custom-btn custom-btn-bg-white mt-3">
                                    Chat with us
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
    
 
  );
}

export default SettingsContent;