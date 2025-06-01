import React from 'react';
import {Briefcase, Code, User} from "lucide-react";


const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Aspiring Web Developer & Tech Enthusiast
                        </h3>
                        <p className="text-muted-foreground">
                            With a mix of self-learned and professionally taught
                            web development knowledge, gained through the use of
                            both online resources like CS50 and Codecademy, as well as a tutor-led bootcamp funded by the WMCA.
                        </p>
                        <p className="text-muted-foreground">
                            I'm a career changer with an abundance of
                            soft-skills gained through 5+ years in retail
                            management, ready to take my first steps into a
                            career building eye-catching and interactive user
                            experiences with the latest front-end technologies.
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Let's Talk
                            </a>
                            <a href="src/SamuelKingCV.pdf" download className="px-6 py-2 font-medium rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
    hover:scale-105 active:scale-95">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div
                                    className="p-3 rounded-full bg-primary/10 mb-2.5">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div
                                    className="text-left flex flex-col gap-2.5">
                                    <h4 className="font-semibold text-lg">Web
                                        Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web
                                        applications with the latest frameworks
                                        such as ReactJS and TailwindCSS.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div
                                    className="p-3 rounded-full bg-primary/10 mb-2.5">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div
                                    className="text-left flex flex-col gap-2.5">
                                    <h4 className="font-semibold text-lg">UI/UX
                                        Design</h4>
                                    <p className="text-muted-foreground">
                                        Utilising design tools including Figma
                                        and Framer to give a seamless user
                                        experience while giving applications a cohesive look.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div
                                    className="p-3 rounded-full bg-primary/10 mb-2.5">
                                    <Briefcase
                                        className="h-6 w-6 text-primary"/>
                                </div>
                                <div
                                    className="text-left flex flex-col gap-2.5">
                                    <h4 className="font-semibold text-lg">Invaluable Soft Skills</h4>
                                    <p className="text-muted-foreground">
                                        Over a decade spent in retail sales and management roles gaining experience in people management, team-work and building an understanding of consumer needs and expectations.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
