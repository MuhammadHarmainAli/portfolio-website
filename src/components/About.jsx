import { BiCode, BiPalette } from "react-icons/bi"
import { FiExternalLink, FiGithub, FiLinkedin, FiMail, FiSmartphone } from "react-icons/fi"

export const About = ({ hasAnimated }) => {
    const features = [
        {
            icon: <BiCode className="w-8 h-8 mb-4 text-black" />,
            title: "Clean Code",
            description: "Writing clean, maintainable, and scalable code with best practices.",
        },
        {
            icon: <BiPalette className="w-8 h-8 mb-4 text-black" />,
            title: "UI/UX Design",
            description: "Designing intuitive, user-centered interfaces with attention to detail.",
        },
        {
            icon: <FiSmartphone className="w-8 h-8 mb-4 text-black" />,
            title: "Responsive Design",
            description: "Building mobile-first layouts that look great on every device.",
        },
        {
            icon: <FiExternalLink className="w-8 h-8 mb-4 text-black" />,
            title: "Proformance",
            description: "Optimizing websites for speed, smoothness, and seamless interactions.",
        }
    ]
    return (
        <section id="about" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl font-bold mb-9 text-center">About me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-md text-gray-700 mb-6">
                                I’m a passionate Frontend Developer focused on building clean, responsive, and user-friendly web apps using React.js, Tailwind CSS, and Firebase. I love turning ideas into smooth digital experiences that look great and perform even better.
                            </p>
                            <p className="text-md text-gray-700 mb-6">
                                My journey began with curiosity about how websites work and grew into a passion for crafting clean, responsive, and engaging user interfaces.
                            </p>
                            <div className="flex space-x-4">
                                <FiGithub className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                                <FiLinkedin className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                                <FiMail className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white flex flex-col justify-center items-center text-center p-6 rounded-lg shadow-sm border border-gray-200">{feature.icon}
                                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
