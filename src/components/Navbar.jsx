import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'



export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigate = useNavigate();

    const handleScroll = (event) => {
        event.preventDefault();
        setMobileMenuOpen(false)
        navigate('/')
    
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      };

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="-m-1.5 p-1.5 hover:cursor-pointer" onClick={() => navigate('/')}>
                        <img  className="h-28 w-auto" src="https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/logo.png" alt="" />
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
                    <a href="#about" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleScroll}>
                        About <span aria-hidden="true">&rarr;</span>
                    </a>

                    <a href="#projects" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleScroll}>
                        Projects
                    </a>
                    <a  href="#contact" className="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer" onClick={handleScroll}>
                        Contact
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a className="-m-1.5 p-1.5" onClick={() => navigate('/')}>
                            <img
                                className="h-8 w-auto"
                                src="https://raw.githubusercontent.com/Anderson0x07/portfolio-dev/main/src/assets/logo.png"
                                alt="logo"
                                
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6">
                                <a href="#about" onClick={handleScroll} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    About
                                </a>
                                <a href="#projects" onClick={handleScroll} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Projects
                                </a>
                                <a href="#contact" onClick={handleScroll} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
