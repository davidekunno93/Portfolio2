import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataProvider'

const Navbar = () => {
    const { contactModalOpen, setContactModalOpen } = useContext(DataContext);
    const { refAbout, refSkills, refProjects } = useContext(DataContext);
    const { mobileMode } = useContext(DataContext);
    const hamburgerMenu = useRef(null);
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
    const [solidNavbar, setSolidNavbar] = useState(false);
    const listenScrollEvent = (e) => {
        let navbar = document.getElementById('navbar')
        let hamburger = document.getElementById('hamburgerIcon')
        let links = document.getElementById('navbarContactLinks')
        let resumeBtn = document.getElementById('resumeBtn')
        let bottomLines = document.querySelectorAll('.bottom-line')

        if (window.scrollY > window.innerHeight * 0.9) {
            if (!solidNavbar) {
                setSolidNavbar(true);
            }
            // navbar.classList.add('black-bg')
            // links.classList.add('show-links')
            // if (resumeBtn) {
            //     resumeBtn.classList.replace('resume-primary', 'resume-secondary')
            //     for (let i = 0; i < bottomLines.length; i++) {
            //         // console.log(bottomLines[i])
            //         bottomLines[i].classList.replace('bottom-line-black', 'bottom-line-white')
            //     }
            // } else {
            //     hamburger.classList.replace('black', 'white')
            // }
        } else {
            setSolidNavbar(false);
            // navbar.classList.remove('black-bg')
            // links.classList.remove('show-links')
            // if (resumeBtn) {
            //     resumeBtn.classList.replace('resume-secondary', 'resume-primary')
            //     for (let i = 0; i < bottomLines.length; i++) {
            //         bottomLines[i].classList.replace('bottom-line-white', 'bottom-line-black')
            //     }
            // } else {
            //     hamburger.classList.replace('white', 'black')
            // }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])
    const scrollToSection = (ref) => {
        if (mobileMode && ref === refProjects) {
            window.scrollTo({
                top: ref.current.offsetTop - 75,
                behavior: "smooth"
            })
        } else {
            // console.log('scrolling')
            // console.log(ref)
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: "smooth"
            })
        }
        setHamburgerMenuOpen(false);
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: [0, 0],
            behavior: 'smooth'
        })
        setHamburgerMenuOpen(false);
    }

    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                className='material-symbols-outlined white-text-stay mb-1'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };
    useEffect(() => {
        if (!mobileMode) {
            setHamburgerMenuOpen(false);
        }
    }, [mobileMode])
    return (
        <>
            {/* mobile navbar */}
            <div className={`mobile-navbar ${hamburgerMenuOpen && "open"}`}>
                <div onClick={() => scrollToTop()} className="option align-all-items gap-2">
                    <span className="material-symbols-outlined">location_home</span>
                    <p className="m-0">Home</p>
                </div>
                <div onClick={() => scrollToSection(refAbout)} className="option align-all-items gap-2">
                    <span className="material-symbols-outlined">person</span>
                    <p className="m-0">About</p>
                </div>
                <div onClick={() => scrollToSection(refSkills)} className="option align-all-items gap-2">
                    <span className="material-symbols-outlined">palette</span>
                    <p className="m-0">Skills</p>
                </div>
                <div onClick={() => scrollToSection(refProjects)} className="option align-all-items gap-2">
                    <span className="material-symbols-outlined">language</span>
                    <p className="m-0">Projects</p>
                </div>
                <div onClick={() => setContactModalOpen(true)} className="option align-all-items gap-2">
                    <span className="material-symbols-outlined">call</span>
                    <p className="m-0">Contact Me</p>
                </div>
                <div className="option">
                    <Link target='_blank' to='https://magenta-nissie-77.tiiny.site'><button id='resumeBtn-mobile' className="resume-secondary-square">
                        <div className="align-all-items gap-1">
                            <p className="m-0">View Resume</p>
                            <span className="material-symbols-outlined large mt-h">
                                open_in_new
                            </span>
                        </div>
                    </button></Link>
                </div>
            </div>

            {/* desktop navbar */}
            <div id='navbar' className={`navbar ${mobileMode && "mobile"} ${solidNavbar && "black-bg"}`}>
                <div className="navbar-logo position-relative">
                    <p className="m-0">@davidekunno</p>
                    <div id='navbarContactLinks' className={`navbar-contact-links position-absolute align-all-items gap-4 ${solidNavbar && "show-links"}`}>
                        <Link target='_blank' to='https://www.linkedin.com/in/david-ekunno-794619a3/'><img src="https://i.imgur.com/14o2J4P.png" alt="" className="img-xxsmall" /></Link>
                        <Link target='_blank' to='https://github.com/davidekunno93/'><img src="https://i.imgur.com/A3c3kUB.png" alt="" className="img-xxsmall" /></Link>
                        {/* <Link><span className="material-symbols-outlined white-text">mail</span></Link> */}
                        <ButtonMailto mailto='mailto:matramere@gmail.com' label='mail' />
                    </div>
                </div>
                {/* social icons pop up after hero section - linkedin, github, email */}
                {!mobileMode ?
                    <div id='navOptions' className="navbar-options">

                        <div onClick={() => scrollToTop()} className="option">
                            <p className="m-0">Home</p>
                            <div className={`bottom-line ${solidNavbar ? "bottom-line-white" : "bottom-line-black"}`}></div>
                        </div>
                        <div onClick={() => scrollToSection(refAbout)} className="option">
                            <p className="m-0">About</p>
                            <div className={`bottom-line ${solidNavbar ? "bottom-line-white" : "bottom-line-black"}`}></div>
                        </div>
                        <div onClick={() => scrollToSection(refSkills)} className="option">
                            <p className="m-0">Skills</p>
                            <div className={`bottom-line ${solidNavbar ? "bottom-line-white" : "bottom-line-black"}`}></div>
                        </div>
                        <div onClick={() => scrollToSection(refProjects)} className="option">
                            <p className="m-0">Projects</p>
                            <div className={`bottom-line ${solidNavbar ? "bottom-line-white" : "bottom-line-black"}`}></div>
                        </div>
                        <div onClick={() => setContactModalOpen(true)} className="option">
                            <p className="m-0">Contact Me</p>
                            <div className={`bottom-line ${solidNavbar ? "bottom-line-white" : "bottom-line-black"}`}></div>
                        </div>
                        <div className="option position-right">
                            <Link target='_blank' to='https://magenta-nissie-77.tiiny.site'><button id='resumeBtn' className={`${solidNavbar ? "resume-secondary" : "resume-primary"}`}>
                                <div className="align-all-items gap-1">
                                    <p className="m-0">View Resume</p>
                                    <span className="material-symbols-outlined large mt-h">
                                        open_in_new
                                    </span>
                                </div>
                            </button></Link>
                        </div>
                    </div>

                    :
                    <div id='navOptions' className="navbar-options">
                        <div ref={hamburgerMenu} id='hamburgerIcon' onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)} className={`hamburger-icon ${solidNavbar ? "white" : "black"} mr-3 ${hamburgerMenuOpen && "open-menu-arrow"}`}>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}
export default Navbar;