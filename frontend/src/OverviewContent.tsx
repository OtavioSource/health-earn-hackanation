import { useState } from "react";
import { useUser } from "./UserContext";
import { NavLink } from "react-router-dom";
import {mintReward} from "./Web3Service";
import { User } from "./UserContext";

function OverviewContent() {

    const { user, setUser } = useUser();
    const [loading, setLoading] = useState(false);
    console.log("User in OverviewContent", user);
    
    function claimReward() {
        setLoading(true);
        mintReward(user.address)
            .then((balanceOf) => {
                console.log("User mintReward successfully", balanceOf);
                setUser({
                    isLoggedIn: true,
                    name: user.name,
                    age: user.age,
                    address: user.address,
                    firstTime: user.firstTime,
                    balance: balanceOf,
                    email: user.email,
                    weight: user.weight,
                    height: user.height
                });
            })
            .catch((error) => {
                console.error("Error connecting wallet:", error);
            })
            .finally(() => {
                setLoading(false);
            });

    }

    return (
                <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                    <div className="title-group mb-3">
                        <h1 className="h2 mb-0">Perfil</h1>

                        <small className="text-muted">Olá {user.name}, seja bem vindo de volta!</small>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-7 col-12">
                            <div className="custom-block custom-block-balance">
                                <small>Seu saldo</small>

                                <h2 className="mt-2 mb-3">{user.balance ? user.balance : 0} $WELL</h2>
                                <div className="d-flex">
                                    <div>
                                        <button
                                        className="btn custom-btn"
                                        onClick={claimReward}
                                        disabled={loading}
                                        type="button"
                                        >
                                        {loading ? (
                                            <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Processando...
                                            </>
                                        ) : (
                                            <>
                                            Obtenha sua recompensa
                                            <i className="bi-currency-dollar ms-2"></i>
                                            </>
                                        )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="custom-block bg-white">
                                <h5 className="mb-4">History</h5>

                                <div id="chart"></div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12">
                            <div className="custom-block custom-block-profile-front custom-block-profile text-center bg-white">
                                <div className="custom-block-profile-image-wrap mb-4">
                                    <img src="images/profile.png" className="custom-block-profile-image img-fluid" alt=""/>

                                    <NavLink to="/settings" className="bi-pencil-square custom-block-edit-icon"></NavLink>
                                </div>

                                <p className="d-flex flex-wrap mb-2">
                                    <strong>Nome:</strong>

                                    <span>{user.name}</span>
                                </p>

                                <p className="d-flex flex-wrap mb-2">
                                    <strong>Email:</strong>
                                    <span>{user.email}</span>
                                </p>

                                <p className="d-flex flex-wrap mb-0">
                                    <strong>Idade</strong>
                                    <span>{user.age}</span>
                                </p>
                            </div>


                            <div className="custom-block custom-block-transations">
                                <h5 className="mb-4">Atividades dos amigos</h5>

                                <div className="d-flex flex-wrap align-items-center mb-4">
                                    <div className="d-flex align-items-center">
                                        <img src="images/profile/senior-man-white-sweater-eyeglasses.jpg" className="profile-image img-fluid" alt=""/>

                                        <div>
                                            <p>
                                                <a href="transation-detail.html">Daniel Jones</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <small>05/06/2025</small>
                                        <strong className="d-block text-danger"><span className="me-1"></span>Andou 10km</strong>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap align-items-center mb-4">
                                    <div className="d-flex align-items-center">
                                        <img src="images/profile/young-beautiful-woman-pink-warm-sweater.jpg" className="profile-image img-fluid" alt=""/>

                                        <div>
                                            <p>
                                                <a href="transation-detail.html">Amanda Nunes</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <small>05/06/2025</small>
                                        <strong className="d-block text-success"><span className="me-1"></span>Dormiu 8hrs</strong>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src="images/profile/young-woman-with-round-glasses-yellow-sweater.jpg" className="profile-image img-fluid" alt=""/>

                                        <div>
                                            <p><a href="transation-detail.html">´Jéssica Pereira</a></p>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <small>05/06/2025</small>
                                        <strong className="d-block text-success"><span className="me-1"></span>Perdeu 350cal</strong>
                                    </div>
                                </div>

                                <div className="border-top pt-4 mt-4 text-center">
                                    <a className="btn custom-btn" href="wallet.html">
                                        Veja todas as atividades
                                        <i className="bi-arrow-up-right-circle-fill ms-2"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="custom-block primary-bg">
                                <h5 className="text-white mb-4">Amigos</h5>

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
                </main>
  );
}

export default OverviewContent;