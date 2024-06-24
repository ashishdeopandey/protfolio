import React,{useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const[menuOpen, setMenuOpen]=useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Ashish <span className={styles.blue}>.</span></a>
            <div className={styles.menu}>
                <img 
                className={styles.menuBtn}
                src={
                    menuOpen
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
                } 
                alt="menu-button"
                onClick={()=> setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=> setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="https://in.linkedin.com/in/ashish-deo-pandey"><i class="uil uil-linkedin"></i> </a> 
                    <a href="https://github.com/ashishdeopandey/"><i class="uil uil-github"></i> </a>
                    <a href="https://wa.me/9354383827/"><i class="uil uil-whatsapp-alt"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};