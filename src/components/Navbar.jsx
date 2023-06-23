import { Fragment } from "react";
import Reloj from "./Reloj";
import '../styles/Navbar.css';
import icon from '../img/icon.png'

function Navbar() {

    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-icon">
                    <img className="navbar-icon_img" src={icon} alt="logo" height={50} />
                    <p className="navbar-icon_text">To Do List</p>
                </div>
                <div className="navbar-date">
                    <Reloj />
                </div>
                <div className="navbar-list">
                    <ul className="navbar-task_list">
                        <li className="navbar-task_list-item">Crear Tarea u Objetivo</li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );

}

export default Navbar;