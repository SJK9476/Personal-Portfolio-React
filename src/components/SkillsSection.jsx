import React, {useState} from 'react';
import {cn} from "../lib/utils.js";

const skills = [
    // frontend
    {
        name: "HTML/CSS", level: 85, category: "frontend"
    },
    {
        name: "JavaScript", level: 80, category: "frontend"
    },
    {
        name: "React", level: 70, category: "frontend"
    },
    {
        name: "TypeScript", level: 30, category: "frontend"
    },
    {
        name: "TailwindCSS", level: 70, category: "frontend"
    },
    {
        name: "Bootstrap5", level: 55, category: "frontend"
    },

    //     backend
    {
        name: "Python", level: 65, category: "backend",
    },
    {
        name: "MySQL", level: 60, category: "backend"
    },

    //   Tools
    {
        name: "Git/Github", level: 90, category: "tools"
    },
    {
        name: "Figma", level: 50, category: "tools"
    },
    {
        name: "Canva", level: 65, category: "tools"
    },
    {
        name: "VS Code", level: 90, category: "tools"
    },
    {
        name: "WebStorm IDE", level: 70, category: "tools"
    },
    {
        name: "AWS", level: 40, category: "tools"
    },
    {
        name: "AppWrite", level: 50, category: "tools"
    }
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {

    // useState to track current active category dependent on button pressed

    const [activeCategory   , setActiveCategory] = useState("all");

    //logic to filter skills to match current active button, it either
    // filters ALL if all button is selected or checks each skill objects
    // category property matches current activeState

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="skills">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn("px-5 py-2 rounded-full" +
                                    " transition-colors duration-300" +
                                    " capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}/>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
