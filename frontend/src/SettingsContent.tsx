import { useUser } from "./UserContext";
import { useState } from "react";
import { updateUser } from "./Web3Service";
import { User } from "./UserContext";


function SettingsContent() {

        const { user, setUser } = useUser();
        const [name, setName] = useState("");
        const [age, setAge] = useState("");
        const [email, setEmail] = useState("");
        const [height, setHeight] = useState("");
        const [weight, setWeight] = useState("");

            function submit(e: React.FormEvent) {
                console.log("Entrou submit");
                e.preventDefault();
        
                const userRequest: User = {
                    isLoggedIn: user.isLoggedIn,
                    name: name,
                    age: parseInt(age),
                    address: user.address,
                    firstTime: false,
                    email: email,
                    weight: parseFloat(weight),
                    height: parseFloat(height)
        
                }
        
                updateUser(userRequest)
                    .then((user) => {
                        console.log("User updated successfully", user);
                        setUser({
                            isLoggedIn: true,
                            name: user.name,
                            age: user.age,
                            address: user.address,
                            firstTime: user.firstTime,
                            email: user.email,
                            weight: user.weight,
                            height: user.height
                        });
        
                    })
                    .catch((error) => {
                        console.error("Error updateUser", error);
                    });
        
            }

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

                                                <form className="custom-form profile-form" action="#" method="post" onSubmit={submit} role="form">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="profile-name"
                                                        id="profile-name"
                                                        value={name}
                                                        onChange={e => setName(e.target.value)}
                                                        placeholder="Nome / Apelido" />

                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        name="profile-age"
                                                        id="profile-age"
                                                        value={age}
                                                        onChange={e => setAge(e.target.value)}
                                                        placeholder="Idade" />

                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        name="profile-email"
                                                        id="profile-email"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                        placeholder="Email" />

                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        step="0.01"
                                                        name="profile-height"
                                                        id="profile-height"
                                                        value={height}
                                                        onChange={e => setHeight(e.target.value)}
                                                        placeholder="Altura" />

                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        name="profile-weight"
                                                        id="profile-weight"
                                                        value={weight}
                                                        onChange={e => setWeight(e.target.value)}
                                                        placeholder="Peso" />

                                                    <div className="d-flex">
                                                        <button type="button" className="form-control me-3">
                                                            Cancelar
                                                        </button>

                                                        <button type="submit" className="form-control ms-2">
                                                            Salvar
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