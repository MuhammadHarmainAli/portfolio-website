import { useEffect, useState } from "react"
import { IoMdClose, IoMdMenu } from "react-icons/io"

export const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 60;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        closeMobileMenu()
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navItem = [
        { href: '#about', lable: 'About' },
        { href: '#projects', lable: 'Projects' },
        { href: '#skills', lable: 'Skills' },
        { href: '#contact', lable: 'Contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 py-2 sm:px-6 sm:py-4">
                <div className="flex justify-between items-center">

                    <div className={`text-xl font-bold transition-colors cursor-pointer hover:opacity-80 ${isScrolled ? 'text-black' : 'text-black'}`} onClick={() => window.scrollTo({
                        top: 0, behavior: 'smooth'
                    })}>
                        Protfolio
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {navItem.map((item) => (
                            <a key={item.href} href={item.href} className={`transition-colors ${isScrolled ? 'text-gray-600 hover:text-black' : 'text-gray-700 hover:text-black'}`} onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href)
                            }}>{item.lable}</a>
                        ))}
                    </div>

                    <button onClick={toggleMobileMenu} className={`md:hidden p-2 transition-colors cursor-pointer ${isScrolled ? 'text-gray-600 hover:text-black' : 'text-gray-700 hover:text-black'}`}>
                        {isMobileMenuOpen ? <IoMdClose size="21px" /> : <IoMdMenu size="21px" /> }
                    </button>

                    <div className={`md:hidden absolute top-10 left-7 right-7 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="bg-white border border-gray-100 rounded-lg shadow-lg p-4 space-y-4">
                            {navItem.map((item) => (
                                <a key={item.href} href={item.href} onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href)
                                }} className="block text-gray-600 hover:text-black transition-colors py-2">
                                    {item.lable}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}
