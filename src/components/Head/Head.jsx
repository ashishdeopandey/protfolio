import React from "react";

import styles from "./Head.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../../assets/hero/Resume.pdf"

export const Head = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi! I'm Ashish Pandey</h1>
                <p className={styles.discription}>I have 4 years of experience as a full-stack developer, working with React and Java</p>
                <a href= {resume} download="Resume" className={styles.cBtn}>Download CV <i class="uil uil-file-download-alt"></i></a>
            </div>
            <img src={getImageUrl("hero/Ashish Deo Pandey.jpeg")} alt="head image" className={styles.headImg} />

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
