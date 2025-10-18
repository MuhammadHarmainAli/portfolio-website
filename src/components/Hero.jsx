import { useEffect, useState } from "react"
import { heroData } from "../data/hero";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TbMail } from "react-icons/tb";
import { BiDownArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";


export const Hero = ({ hasAnimated }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const { roles } = heroData;

    useEffect(() => {
        const currentRole = roles[currentIndex];

        if (!isDeleting) {
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length + 1))
                }, typingSpeed);
                return () => clearTimeout(timeout)
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(100)
                }, 2000);
                return () => clearTimeout(timeout)
            }
        } else {
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, currentText.length - 1))
                }, typingSpeed);
                return () => clearTimeout(timeout)
            } else {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % roles.length);
                setTypingSpeed(150)
            }
        }
    }, [currentIndex, currentText, isDeleting, typingSpeed, roles])

    const scrollToAbout = () => {
        document.getElementById('about').
        scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <section className="relative min-h-[120vh] sm:min-h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 px-4 pt-10 pb-20 sm:pt-16">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse z-40"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000 z-40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full opacity-5 blur-3xl animate-pulse delay-500 z-40"></div>

                <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                <div className="absolute inset-0 bg-white mask-circle z-30"></div>

                <div className="relative z-50 max-w-6xl mx-auto mt-5 px-6 text-center h-full flex flex-col justify-center">
                    <div className={`transition-all duration-1000 ${hasAnimated.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="hero">
                        <div className="mb-3 sm:mb-4">
                            <span className="inline-block px-3 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium ">
                                {heroData.greeting}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
                            {heroData.name}
                        </h1>

                        <div className="h-12 sm:h-16 mb-4 flex justify-center items-center">
                            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-700">
                                I'm a{' '}
                                <span className="relative">
                                    <span className="text-blue-600 font-bold">
                                        {currentText}
                                        <span className="animate-pulse"></span>
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
                                </span>
                            </h2>
                        </div>

                        <p className="text-[13.5px] sm:text-base text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">{heroData.description}</p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                            {heroData.ctaButtons.map((button, index) => (
                                <a key={index} href={button.href} className={`group relative px-5 py-2.5 rounded-lg overflow-hidden transition-all duration-300 font-medium text-sm  ${button.variant === 'primary' ? 'bg-black text-white shadow-lg hover:shadow-xl hover:bg-gray-800' : 'shadow-[inset_0px_0px_0px_2px_#000000] text-black hover:bg-black hover:text-white'}`}>
                                    {button.variant === 'primary' && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    )}
                                    <span className={button.variant === 'primary' ? 'relative z-10' : ''}>{button.text}</span>
                                </a>
                            ))}
                        </div>

                        <div className="flex justify-center items-center space-x-6 mb-8">
                            {heroData.socialLinks.map((social, index) => {
                                const IconComponent = social.icon === 'Github' ? FiGithub : social.icon === 'Linkedin' ? FiLinkedin : TbMail;
                                return (
                                    <a key={index} href={social.url} className="group p-3 bg-gray-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                        <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 group-hover:text-blue-600 transition-colors"/>
                                    </a>
                                ) 
                            })}
                        </div>

                        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                            {heroData.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-xl sm:text-2xl font-bold text-black mb-1">{stat.number}</div>
                                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="animate-bounce">
                            <button onClick={scrollToAbout} className="group flex flex-col items-center text-gray-600 hover:text-black transition-colors cursor-pointer">
                                <span className="text-xs sm:text-sm mb-1">Learn More</span>
                                <BiDownArrowAlt className="text-[18px] sm:text-xl" />
                            </button>
                        </div>

                        <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: .2, repeatType: "reverse", ease: "easeInOut", }}
                        className="hidden sm:block absolute top-0 left-6 w-4 h-4 bg-blue-400 rounded-full opacity-60"></motion.div>
                        <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1, repeatType: "reverse", ease: "easeInOut", }}
                        className="hidden sm:block absolute top-40 right-0 w-6 h-6 bg-purple-400 rounded-full opacity-60"></motion.div>
                        <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 2, repeatType: "reverse", ease: "easeInOut", }}
                        className="hidden sm:block absolute bottom-40 left-0 w-3 h-3 bg-green-400 rounded-full opacity-60"></motion.div>
                        <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 3, repeatType: "reverse", ease: "easeInOut", }}
                        className="hidden sm:block absolute bottom-10 right-10 w-5 h-5 bg-orange-400 rounded-full opacity-60"></motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
