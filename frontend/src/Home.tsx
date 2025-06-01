// src/Home.tsx
import Header from "./Header"; // Assuming you have a Header component

function Home() {
    return (
        <>
            <Header />
            <main>
            <section className="hero-section d-flex justify-content-center align-items-center">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div className="hero-section-text mt-5">
                                <h6 className="text-white">O que acha de ser recompensado <br/> por levar uma vida saudável?</h6>
                                <h2 className="hero-title text-white mt-4 mb-4">Conheça nossa Platorma <br/> Health Earn</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </main>

        </>
    );
};

export default Home;
