import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>ABOUT Me</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Laptop Guy" className={styles.aboutImg} />
                <div>
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/Degree.png")} alt="Cu" />
                            <div className={styles.aboutItemText}>
                                <h3>Bachelor of Technology (B.Tech.)</h3>
                                <h4>Maharishi Dayanand University,Rohtak [MDU]</h4>
                                <p>69%</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/Secondary.png")} alt="Cu" />
                            <div className={styles.aboutItemText}>
                                <h3>Senior Secondary (10+2)</h3>
                                <h4>St. Peter's Inter College [ISC]</h4>
                                <p>78%</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/Highschool.png")} alt="Cu" />
                            <div className={styles.aboutItemText}>
                                <h3>High School (10th)</h3>
                                <h4>St. Peter's School [ICSE]</h4>
                                <p>76%</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    );
};