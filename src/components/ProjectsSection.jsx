import React from 'react';
import {ArrowRight, ExternalLink, Github} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Brainwave AI - SAAS Landing Page",
        description: "A visually compelling landing page for an AI powered" +
            " chat application built using ReactJS and Tailwind.",
        image: "public/projects/Brainwave.png",
        tags: ["ReactJS", "Tailwind", "Frontend"],
        demoUrl: "https://brainwave-project-flax.vercel.app/",
        githubUrl: "https://github.com/SJK9476/BrainwaveProject",
    },
    {
        id: 2,
        title: "Movie DB - Search Application",
        description: "A multi-functional search application with real time" +
            " most popular movies as well as a trending movies section based" +
            " on data collected from user searches.",
        image: "public/projects/ReactMovieDB.png",
        tags: ["ReactJS", "Tailwind", "Frontend", "Appwrite", "Hostinger"],
        demoUrl: "https://movie.king-dev.io/",
        githubUrl: "https://github.com/SJK9476/Movie-DB-React",
    },
    {
        id: 3,
        title: "Full Stack Trivia Quiz API",
        description: "An application designed to generate a multiple choice" +
            " trivia quiz based on the selected user category with backend" +
            " functionality to return a users score.",
        image: "public/projects/Trivia.jpg",
        tags: ["JavaScript", "Python", "Bootstrap", "MySQL", "Fullstack"],
        demoUrl: "#",
        githubUrl: "https://github.com/SJK9476/Ecareers_Bootcamp/tree/main/trivia_api",
    },
    {
        id: 4,
        title: "My 1st Single Page Portfolio",
        description: "The first portfolio site I built for myself using the" +
            " fundamentals i'd learned from HTML, Vanilla CSS and" +
            " JavaScript. A great bench mark for the progress I've made so" +
            " far.",
        image: "public/projects/oldportfolio.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://single-page-developer-portfolio-silk.vercel.app/",
        githubUrl: "https://github.com/SJK9476/single-page-developer-portfolio",

    }

];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A collection of web applications and pages I've built throughout my journey to become a professional developer. Ranging from simple one page sites built with the most basic building blocks to my more recent work utilising the latest frontend frameworks.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" key={key}>
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="mx-2 flex flex-col gap-2 items-center">
                                <h3 className="text-xl font-semibold mt-3 text-primary">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mt-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 mt-3">
                                        <a href={project.demoUrl}
                                           target="_blank"
                                           className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl}
                                           target="_blank"
                                           className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-left">
                                <h4 className="font-bold text-primary text-xs mb-3 tracking-wider">TECH STACK:</h4>
                                <div className="flex flex-wrap gap-2 mb-4">

                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/40 text-secondary-foreground border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>


                        </div>
                    ))}
                    <div className="text-center mt-12">
                        <a href="https://github.com/SJK9476" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                            Check My Github <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
