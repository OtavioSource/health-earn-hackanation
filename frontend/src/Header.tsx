import { useState } from 'react';
import { useUser } from "./UserContext";
import { createUser } from "./Web3Service";

function Header() {

    const { user, setUser } = useUser();

    function onBtnClick() {

        createUser()
            .then((user) => {
                console.log("User createUser successfully", user);
                setUser({
                    isLoggedIn: true,
                    name: user.name,
                    age: user.age,
                    address: user.address,
                    firstTime: user.firstTime
                });
                
            })
            .catch((error) => {
                console.error("Error connecting wallet:", error);
            });

    }

    return (
        <>
            <header className="navbar sticky-top flex-md-nowrap">
                <div className="col-md-3 col-lg-3 me-0 px-5 fs-6">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src="/images/ic-health-earn-transparente.png" className="img-fluid logo-image" />
                        <div className="d-flex flex-column">
                            <strong className="logo-text">Health Earn</strong>
                        </div>
                    </a>
                </div>

                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-nav me-lg-2">
                    <div className="nav-item text-nowrap d-flex align-items-center">
                        {user.isLoggedIn ?
                            <> <div className="dropdown px-3">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="images/medium-shot-happy-man-smiling.jpg" className="profile-image img-fluid" alt="" />
                                </a>
                                <ul className="dropdown-menu bg-white shadow">
                                    <li>
                                        <div className="dropdown-menu-profile-thumb d-flex">
                                            <img src="images/medium-shot-happy-man-smiling.jpg" className="profile-image img-fluid me-3" alt="" />

                                            <div className="d-flex flex-column">
                                                <small>Thomas</small>
                                                <a href="#">thomas@site.com</a>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="profile.html">
                                            <i className="bi-person me-2"></i>
                                            Profile
                                        </a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="setting.html">
                                            <i className="bi-gear me-2"></i>
                                            Settings
                                        </a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="help-center.html">
                                            <i className="bi-question-circle me-2"></i>
                                            Help
                                        </a>
                                    </li>

                                    <li className="border-top mt-3 pt-2 mx-4">
                                        <a className="dropdown-item ms-0 me-0" href="#">
                                            <i className="bi-box-arrow-left me-2"></i>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div></> : <><a onClick={onBtnClick} className="btn custom-btn custom-btn-bg-white">Connect Wallet</a></>}
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;
