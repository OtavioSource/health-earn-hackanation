// src/Home.tsx
import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import OverviewContent from "./OverviewContent";
import { useUser } from "./UserContext";
import { updateUser } from "./Web3Service";
import { User } from "./UserContext";

function OverviewPage() {

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
        <>
            {user.firstTime ? <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <main className="main-wrapper col-md-12 ms-sm-auto py-4 col-lg-12 px-md-4 border-start align-items-center justify-content-center">
                            <div className="title-group mb-3 ">
                                <h1 className="h2 mb-0">Seja Bem vindo ao Health Earn!</h1>
                            </div>
                            <div className="row my-4">
                                <div className="col-lg-7 col-12">
                                    <div className="custom-block bg-white">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                                <h6 className="mb-4">Cadastro</h6>

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
                            </div>
                        </main>

                    </div>

                </div></> : <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <OverviewContent />
                    </div>

                </div></>}
        </>
    )
};

export default OverviewPage;
