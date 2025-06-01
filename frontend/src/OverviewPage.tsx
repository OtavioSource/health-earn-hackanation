// src/Home.tsx
import Header from "./Header";
import Menu from "./Menu";
import OverviewContent from "./OverviewContent";
import { useUser } from "./UserContext";
import { updateUser } from "./Web3Service";

function OverviewPage() {

    const { user, setUser } = useUser();

    function submit() {

        updateUser()
            .then((user) => {
                setUser({
                    isLoggedIn: true,
                    name: user.name,
                    age: user.age,
                    address: user.address,
                    firstTime: false
                });
                
            })
            .catch((error) => {
                console.error("Error connecting wallet:", error);
            });

    }

    if (user.firstTime) {

        

        return (
            <>
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

                                                <form className="custom-form profile-form" action="#" method="post" role="form">
                                                    <input className="form-control" type="text" name="profile-name" id="profile-name" placeholder="Nome / Apelido" />

                                                    <input className="form-control" type="number" name="profile-age" id="profile-age" placeholder="Idade" />

                                                    <div className="d-flex">
                                                        <button type="button" className="form-control me-3">
                                                            Cancelar
                                                        </button>

                                                        <button onClick={submit} className="form-control ms-2">
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

                </div>

            </>
        )
    } else `{}`
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Menu />
                    <OverviewContent />
                </div>

            </div>

        </>
    );
};

export default OverviewPage;
