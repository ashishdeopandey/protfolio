import React from "react";
import {getImageUrl} from  "../../utils";
import styles from "./Contact.module.css";

export const Contact=()=>{
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>
                    Contact Me<span className={styles.blue}>.</span>
                </h2>
                <h3>
                    Feel free to reach out!
                </h3>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                   <a href="mailto:ashu1234mani@gmail.com"> <img src={getImageUrl("contact/emailIcon.png")} alt="E-mail" /></a>
                    <a href="mailto:ashu1234mani@gmail.com"><h4>ashu1234mani@gmail.com</h4></a>
                </li>
                <li className={styles.link}>
                <a href="https://in.linkedin.com/in/ashish-deo-pandey"> <img src={getImageUrl("contact/linkedinIcon.png")} alt="E-mail" /></a>
                    <a href="https://in.linkedin.com/in/ashish-deo-pandey"><h4>Ashish Deo Pandey</h4></a>
                </li>
                <li className={styles.link}>
                    <a href="https://github.com/ashishdeopandey/"><img src={getImageUrl("contact/githubIcon.png")} alt="E-mail" /></a>
                    <a href="https://github.com/ashishdeopandey/"><h4>ashishdeopandey</h4></a>
                </li>   
                <li className={styles.link}>
                    <a href="https://wa.me/9354383827/"><img src={getImageUrl("contact/whatsapp.png")} alt="E-mail" /></a>
                    <a href="https://wa.me/9354383827/"><h4>Whats App!</h4></a>
                </li>        
            </ul>
        </footer>
    );
};