import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { contact } from "../data/contact"

export const Contact = ({ hasAnimated }) => {
    const contactLinkWithicons = contact.map(link => ({
        ...link,
        icon: link.label === 'Email Me' ? <FiMail className="w-5 h-5 mr-2" /> : link.label === 'GitHub' ? <FiGithub className="w-5 h-5 mr-2" /> : <FiLinkedin className="w-5 h-5 mr-2" />
    }))
    return (
        <section id="contact" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <div className={`transition-all duration-1000 delay-200 ${hasAnimated.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl font-bold mb-9 text-center">Let's me Work Together</h2>

                    <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
                        I'm always open to new opportunities and creative collaborations.
                        Feel free to reach out — I’d love to connect and discuss ideas!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                        <a href={contactLinkWithicons[0].href} className={`flex justify-center items-center w-full sm:w-auto ${contactLinkWithicons[0].className}`}>
                            {contactLinkWithicons[0].icon}
                            {contactLinkWithicons[0].label}
                        </a>
                        <div className="flex gap-4 sm:gap-8">
                            <a href={contactLinkWithicons[1].href} className={`flex justify-center items-center flex-1 sm:flex-none w-full sm:w-auto hover:text-white ${contactLinkWithicons[1].className}`}>
                                {contactLinkWithicons[1].icon}
                                {contactLinkWithicons[1].label}
                            </a>
                            <a href={contactLinkWithicons[2].href} className={`flex justify-center items-center flex-1 sm:flex-none w-full sm:w-auto hover:text-white ${contactLinkWithicons[2].className}`}>
                                {contactLinkWithicons[2].icon}
                                {contactLinkWithicons[2].label}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
