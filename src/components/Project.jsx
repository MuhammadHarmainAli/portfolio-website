import { projects } from "../data/project"
import { ProjectCard } from "./ProjectCard"

export const Project = ({ hasAnimated }) => {
    return (
        <section id="projects" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl font-bold mb-9 text-center">Featured Product</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
