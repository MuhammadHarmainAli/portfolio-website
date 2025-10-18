import { FiExternalLink, FiGithub } from "react-icons/fi"

export const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img className="text-6xl font-bold text-gray-300" src={project.image}/>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{tech}</span>
                    ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                    <a href={project.github} className="flex items-center to-gray-600 hover:text-black transition-colors text-sm">
                        <FiGithub className="w-4 h-4 mr-1"/>Code
                    </a>
                    <a href={project.demo} className="flex items-center to-gray-600 hover:text-black transition-colors text-sm">
                        <FiExternalLink className="w-4 h-4 mr-1"/>Demo
                    </a>
                </div>
            </div> 
        </div>
    )
}
