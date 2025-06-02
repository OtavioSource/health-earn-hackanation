// src/Home.tsx
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <>
                <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar collapse">
                    <div className="position-sticky py-4 px-3 sidebar-sticky">
                        <ul className="nav flex-column h-100">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} aria-current="page" to="/overview">
                                    <i className="bi-house-fill me-2"></i>
                                    Overview
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/profile">
                                    <i className="bi-person me-2"></i>
                                    Profile
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/settings">
                                    <i className="bi-gear me-2"></i>
                                    Settings
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/help-chat">
                                    <i className="bi-question-circle me-2"></i>
                                    Help Chat
                                </NavLink>
                            </li>

                            <li className="nav-item border-top mt-auto pt-2">
                                <a className="nav-link" href="#">
                                    <i className="bi-box-arrow-left me-2"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

        </>
    );
};

export default Menu;
// src/Menu.tsx