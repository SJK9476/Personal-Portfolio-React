import React from 'react';

const skills = [
    // frontend
    {
        name: "HTML/CSS", level: 85, category: "frontend"
    },
    {
        name: "JavaScript", level: 75, category: "frontend"
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

const SkillsSection = () => {
    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="skills">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}/>
                            </div>
                            <div>
                                <span>{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
