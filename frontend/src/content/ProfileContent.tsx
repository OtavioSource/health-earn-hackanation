import { useUser } from "../UserContext";
import { NavLink } from "react-router-dom";

function ProfileContent() {

    const { user, setUser } = useUser();

    return (
                        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                    <div className="title-group mb-3">
                        <h1 className="h2 mb-0">Profile</h1>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-7 col-12">
                            <div className="custom-block custom-block-profile">
                                <div className="row">
                                    <div className="col-lg-12 col-12 mb-3">
                                        <h6>General</h6>
                                    </div>

                                    <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                                        <div className="custom-block-profile-image-wrap">
                                            <img src="images/profile.png" className="custom-block-profile-image img-fluid" alt=""/>

                                            <a href="setting.html" className="bi-pencil-square custom-block-edit-icon"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-9 col-12">
                                        <p className="d-flex flex-wrap mb-2">
                                            <strong>Nome:</strong>

                                            <span>{user.name}</span>
                                        </p>

                                        <p className="d-flex flex-wrap mb-2">
                                            <strong>Email:</strong>
                                            
                                            <span>{user.email}</span>
                                        </p>

                                        <p className="d-flex flex-wrap mb-2">
                                            <strong>Idade:</strong>

                                            <span>{user.age}</span>
                                        </p>

                                        <p className="d-flex flex-wrap mb-2">
                                            <strong>Altura:</strong>

                                             <span>{user.height}</span>
                                        </p>

                                        <p className="d-flex flex-wrap">
                                            <strong>Peso:</strong>

                                             <span>{user.weight}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12">
                            <div className="custom-block custom-block-contact">
                                <h6 className="mb-4">Com a ajuda do nosso chat iremos te dar informações personalizadas e dicas para que vpcê possa ter uma vida saudável</h6>
                                <NavLink to="/help-chat" className="btn custom-btn custom-btn-bg-white mt-3">
                                    Chat
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </main>
 
  );
}

export default ProfileContent;