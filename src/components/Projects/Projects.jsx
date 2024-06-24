import React from "react";

import styles from "./Projects.module.css";

import Project from "../../Data/Project.json"
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className={styles.container} id="project">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.project}>
                {Project.map((Project,id)=>{
                    return(
                        <ProjectCard key={id} project={Project}/>
                    )
                })}
            </div>
        </section>
    );
};
