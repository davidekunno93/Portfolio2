import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataProvider'

const Navbar = () => {
    const { contactModalOpen, setContactModalOpen } = useContext(DataContext);
    const { refAbout, refSkills, refProjects } = useContext(DataContext);
    const listenScrollEvent = (e) => {
        let navbar = document.getElementById('navbar')
        let links = document.getElementById('navbarContactLinks')
        let resumeBtn = document.getElementById('resumeBtn')
        // let navOptions = document.getElementById('navOptions')

        if (window.scrollY > window.innerHeight * 0.9) {
            navbar.classList.add('black-bg')
            links.classList.add('show-links')
            resumeBtn.classList.replace('resume-primary', 'resume-secondary')
            // navOptions.classList.remove('bold600')
        } else {
            navbar.classList.remove('black-bg')
            links.classList.remove('show-links')
            resumeBtn.classList.replace('resume-secondary', 'resume-primary')
            // navOptions.classList.add('bold600')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])
    const scrollToSection = (ref) => {
        // console.log('scrolling')
        // console.log(ref)
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        })
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: [0, 0],
            behavior: 'smooth'
        })
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
    return (
        <div id='navbar' className='navbar'>
            <div className="navbar-logo position-relative">
                <p className="m-0">@davidekunno</p>
                <div id='navbarContactLinks' className="navbar-contact-links position-absolute align-all-items gap-4">
                    <Link target='_blank' to='https://www.linkedin.com/in/david-ekunno-794619a3/'><img src="https://i.imgur.com/14o2J4P.png" alt="" className="img-xxsmall" /></Link>
                    <Link target='_blank' to='https://github.com/davidekunno93/'><img src="https://i.imgur.com/A3c3kUB.png" alt="" className="img-xxsmall" /></Link>
                    {/* <Link><span className="material-symbols-outlined white-text">mail</span></Link> */}
                    <ButtonMailto mailto='mailto:matramere@gmail.com' label='mail' />
                </div>
            </div>
            {/* social icons pop up after hero section - linkedin, github, email */}
            <div id='navOptions' className="navbar-options">

                <div onClick={() => scrollToTop()} className="option">
                    Home
                </div>
                <div onClick={() => scrollToSection(refAbout)} className="option">
                    About
                </div>
                <div onClick={() => scrollToSection(refSkills)} className="option">
                    Skills
                </div>
                <div onClick={() => scrollToSection(refProjects)} className="option">
                    Projects
                </div>
                <div onClick={() => setContactModalOpen(true)} className="option">
                    Contact Me
                </div>
                <div className="option position-right">
                    <Link target='_blank' to='https://magenta-nissie-77.tiiny.site'><button id='resumeBtn' className="resume-primary">
                        <div className="align-all-items gap-1">
                            <p className="m-0">View Resume</p>
                            <span className="material-symbols-outlined large mt-h">
                                open_in_new
                            </span>
                        </div>
                    </button></Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;