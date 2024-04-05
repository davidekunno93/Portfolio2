import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactModal from '../components/ContactModal'
import { DataContext } from '../context/DataProvider'
import { Fade, Slide } from 'react-awesome-reveal'
import Parallax from '../components/Parallax'
import emailjs from '@emailjs/browser';

const MainPage = () => {
    const { mobileMode } = useContext(DataContext);
    const { contactModalOpen, setContactModalOpen } = useContext(DataContext);
    const { refAbout, refSkills, refProjects } = useContext(DataContext);

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
    }
    // email link code
    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                className='about-me-link font-jakarta no-cursor'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };
    const ButtonMailtoIcon = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                className='material-symbols-outlined dark-text'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };

    const techImgs = [
        {
            tech: "React",
            imgUrl: "https://i.imgur.com/IZ5Z5oT.png",
            exp: "1.5 years",
            logo: "https://i.imgur.com/sqRGfk8.png"
        },
        {
            tech: "Python",
            imgUrl: "https://i.imgur.com/acnLzcG.png",
            exp: "2 years",
            logo: "https://i.imgur.com/NngeIYu.png"
        },
        {
            tech: "JavaScript",
            imgUrl: "https://i.imgur.com/xr9rm7N.png",
            exp: "1.5 years",
            logo: "https://i.imgur.com/xr9rm7N.png"
        },
        {
            tech: "HTML",
            imgUrl: "https://i.imgur.com/gOMVKam.png",
            exp: "1.5 years",
            logo: "https://i.imgur.com/gOMVKam.png"
        },
        {
            tech: "CSS",
            imgUrl: "https://i.imgur.com/jWg176W.png",
            exp: "1.5 years",
            logo: "https://i.imgur.com/jWg176W.png"
        },
        {
            tech: "SQL",
            imgUrl: "https://i.imgur.com/1PmYCPv.png",
            exp: "1.5 years",
            logo: "https://i.imgur.com/1PmYCPv.png"
        },
        {
            tech: "Firebase",
            imgUrl: "https://i.imgur.com/oB5uMgZ.png",
            exp: "1 year",
            logo: "https://i.imgur.com/4PrfBfA.png"
        },
        {
            tech: "Flask",
            imgUrl: "https://i.imgur.com/bg1BKjd.png",
            exp: "1.5 years",
            logo: "https://i.imgur.com/sMJHruJ.png"
        },
        {
            tech: "PostgreSQL",
            imgUrl: "https://i.imgur.com/uvLQGWj.png",
            exp: "1.5 years",
            logo: "https://i.imgur.com/630mA5q.png"
        },
        {
            tech: "Git",
            imgUrl: "https://i.imgur.com/jTLsMeb.png",
            exp: "1.5 years",
            logo: "https://i.imgur.com/uyhZ1Zk.png"
        },
        {
            tech: "GitHub",
            imgUrl: "https://i.imgur.com/GOFzEZZ.png",
            exp: "1.5 years",
            logo: "https://i.imgur.com/LahUqrV.png"
        },
    ]
    const techIndex = {
        React: 0,
        Python: 1,
        JavaScript: 2,
        HTML: 3,
        CSS: 4,
        SQL: 5,
        Firebase: 6,
        Flask: 7,
        PostgreSQL: 8,
        Git: 9,
        GitHub: 10,
    }

    const projects = [
        {
            title: "Things To-Do Web Application",
            desc: "Things To-Do is an intuitive tool for users to optimize productivity and task organization. The Web App creates a place for users to define and organize task details within a smooth interface, and uses a point earning system to incentivize users to be more intentional with task completion.",
            imgUrl: "https://i.imgur.com/uQRK3KF.png",
            logoUrl: "https://i.imgur.com/OaKo2a8.png",
            responsive: true,
            techs: ["React", "Python", "Flask", "PostgreSQL", "Firebase"],
            website: "https://things-to-do-app-frontend-cvfo.vercel.app/",
            github: "https://github.com/davidekunno93/things-to-do-app-frontend.git",
        },
        {
            title: "RouteWise | Travel App",
            desc: "Crafted for seekers of adventure, RouteWise makes planning and itinerary creation a simple piece to the puzzle of travelling. Use the interactive map and place suggestions to build a list of places to visit during your trip and generate itineraries which optimize for convenience and proximity.",
            imgUrl: "https://i.imgur.com/XbBVf5h.png",
            logoUrl: "https://i.imgur.com/d2FMf3s.png",
            responsive: false,
            techs: ["React", "Python", "Flask", "PostgreSQL", "Firebase"],
            website: "https://routewise-front-end.vercel.app/",
            github: "https://github.com/davidekunno93/Routewise-FrontEnd.git",
        },
        {
            title: "Old Portfolio",
            desc: "Old portfolio displaying my projects and skills on a responsive react app.",
            imgUrl: "https://i.imgur.com/tVkkDem.png",
            logoUrl: "",
            responsive: true,
            techs: ["React"],
            website: "https://portfolio-frontend-one-psi.vercel.app/",
            github: "https://github.com/davidekunno93/Portfolio-Frontend.git",
        },
        {
            title: "Real Peace Website",
            desc: "RealPeace is a website for social gatherings and organized group meditation meetups.",
            imgUrl: "https://i.imgur.com/GpO0iis.png",
            logoUrl: "",
            responsive: true,
            techs: ["React", "Firebase"],
            website: "https://real-peace-website.vercel.app/",
            github: "https://github.com/davidekunno93/RealPeace-Website.git",
        },
        {
            title: "FitHub",
            desc: "FitHub is a social workout app that allows users to build workouts using a selection of exercises provided by an API. Users can sort the exercises by muscle group, difficulty and machine needed. Users are then encouraged to share, use and review each other's workouts.",
            imgUrl: "https://i.imgur.com/w2u0W2a.png",
            logoUrl: "https://i.imgur.com/s9vOzux.png",
            responsive: false,
            techs: ["React", "Python", "Flask", "PostgreSQL"],
            website: "",
            github: "https://github.com/davidekunno93/Workout-App-React.git",
        },
        {
            title: "Pokemon Battle X",
            desc: "This App allows users to search for pokemon using the pokedex functionality which also displays the pokemon stats. Users can catch and release pokemon (up to 5 can be caught), look over their pokemon on the 'My Team' page and find other users to battle. These battles update your win stats.",
            imgUrl: "https://i.imgur.com/Qf3kZoO.png",
            logoUrl: "https://i.imgur.com/oMhkUW3.png",
            responsive: false,
            techs: ["Python", "Flask", "PostgreSQL"],
            website: "https://pokemon-battle-k3vf.onrender.com/",
            github: "https://github.com/davidekunno93/Flask_Pokemon_Project.git",
        },
    ]
    const [projectIndex, setProjectIndex] = useState(0);
    const projectPages = [0, 1]
    const [indicatorsVisible, setIndicatorsVisible] = useState(false);

    const [mouseOverAboutSection, setMouseOverAboutSection] = useState(false);



    const addCursorStyle = () => {
        window.addEventListener("mousemove", styleCursor)
    }

    const styleCursor = (e) => {
        const cursorDot = document.querySelector("[data-cursor-dot]")
        const cursorOutline = document.querySelector("[data-cursor-outline]")
        cursorDot.classList.remove('hidden-o')
        cursorOutline.classList.remove('hidden-o')

        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;


        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });

    }
    const hideCursorStyle = () => {
        const cursorDot = document.querySelector("[data-cursor-dot]")
        const cursorOutline = document.querySelector("[data-cursor-outline]")
        cursorDot.classList.add('hidden-o')
        cursorOutline.classList.add('hidden-o')
    }

    const removeCursorStyle = () => {
        window.removeEventListener("mousemove", styleCursor)
        hideCursorStyle()
    }
    useEffect(() => {
        hideCursorStyle()
    }, [])


    // bubble message email code
    const bubbleForm = useRef(null);
    const sendEmail = (e, source) => {
        e.preventDefault();

        if (source === "bubbleEmail") {
            emailjs
                .sendForm('service_whvz2lp', 'template_mgey1wr', bubbleForm.current, {
                    publicKey: 'jztdvyE6Mt3hbXk94',
                })
                .then(
                    () => {
                        bubbleMessageSentAnimation()
                        console.log('Succesfully sent message');
                    },
                    (error) => {
                        console.log('Failed to send message', error);
                        alert("Message Failed. Please try again")
                        console.log('not working')
                    },
                );
        } else if (source === "mobileEmail") {
            emailjs
                .sendForm('service_whvz2lp', 'template_mgey1wr', mobileForm.current, {
                    publicKey: 'jztdvyE6Mt3hbXk94',
                })
                .then(
                    () => {
                        mobileMessageSentAnimation()
                        console.log('Succesfully sent message');
                    },
                    (error) => {
                        console.log('Failed to send message', error);
                        alert("Message Failed. Please try again")
                        console.log('not working')
                    },
                );
        }
    };

    const refMobileFormContents = useRef(null);
    const refMobileFormSent = useRef(null);
    const mobileEmailInput = useRef(null);
    const mobileMessageInput = useRef(null);
    const mobileMessageSentAnimation = () => {
        refMobileFormContents.current.classList.add('sent') 
        wait(500).then(() => {
            refMobileFormSent.current.classList.remove('hidden-down3-o') 
        })
    }
    const resetMobileMessage = () => {
        mobileEmailInput.current.value = ""
        mobileMessageInput.current.value = ""
        refMobileFormSent.current.classList.add('hidden-down3-o') 
        wait(500).then(() => {
            refMobileFormContents.current.classList.remove('sent') 
        })
    }

    const bubbleMessageSentAnimation = () => {
        let formContents = document.getElementById('formContents')
        let formSent = document.getElementById('formSent')

        formContents.classList.add('hidden-down-o')

        wait(500).then(() => {
            formContents.classList.add('d-none')
            formSent.classList.remove('hidden-down2-o')

        })
    }
    const resetBubbleMessage = () => {
        let formContents = document.getElementById('formContents')
        let formSent = document.getElementById('formSent')
        let email = document.getElementById('bubbleEmail')
        let message = document.getElementById('bubbleMessage')

        email.value = ""
        message.value = ""
        formSent.classList.add('hidden-down2-o')
        wait(500).then(() => {
            formContents.classList.remove('d-none')
            wait(100).then(() => {
                formContents.classList.remove('hidden-down-o')

            })
        })
    }

    // mobile message email code
    const mobileForm = useRef(null);


    // other code
    const printTest = () => {
        console.log('print')
    }
    const wait = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    useEffect(() => {
        console.log("Mobile Mode: " + mobileMode)
    }, [])

    return (
        <>
            <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
            <div className="page-container">

                {/* <div className="hero-section">
                    <div className="left-side flx-1 flx">
                        <div className="text-composition flx-c gap-5 m-auto">
                            <div className="text-group dark-text">
                                <p className="m-0 xxx-large bold700">Hi, I'm David</p>
                                <p className="m-0 x-large my-1">Frontend Developer</p>
                                <p className="m-0 bold600">Experienced <span className="purple-text">Frontend React Developer</span> based in Houston, TX. I have a good understanding of all sides of development.</p>
                            </div>
                            <div className="flx">
                                <button onClick={() => scrollToSection(refProjects)} className="btn-primary"><p className="m-0">View My Work</p></button>
                            </div>

                            <div className="socials bold600 flx-r gap-8">
                                <Link target='_blank' to='https://www.linkedin.com/in/david-ekunno-794619a3/'><div className="social-link align-all-items gap-2">
                                    <img src="https://i.imgur.com/WBpcM53.png" alt="" className="img-xxsmall" />
                                    <p className="m-0 dark-text">LinkedIn</p>
                                </div></Link>
                                <Link target='_blank' to='https://github.com/davidekunno93'><div className="social-link align-all-items gap-2">
                                    <img src="https://i.imgur.com/LahUqrV.png" alt="" className="img-xxsmall" />
                                    <p className="m-0 dark-text">GitHub</p>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-side flx-1"> 
                        <img src="https://i.imgur.com/g0ZSvBo.png" alt="" className="img-fit" />
                    </div>
                </div> */}

                <div className="hero-section">

                    <div className={`hero-absolute ${mobileMode ? "flx-c-reverse" : "flx-r"}`}>
                        <div className={`${mobileMode ? "bottom-side" : "left-side"} flx-1 flx`}>
                            <div className="text-composition flx-c gap-5 m-auto">
                                <div className={`text-group ${mobileMode && "center-text"} dark-text`}>

                                    <p className={`m-0 ${mobileMode ? "xx-large" : "xxx-large"} bold700`}>Hi, I'm&nbsp;
                                        <span className="title-box">David
                                            {/* <div className="spantext-paint"></div> */}
                                        </span>
                                    </p>

                                    <p className={`m-0 ${mobileMode ? "medium" : "x-large"} my-1`}>Frontend Developer</p>
                                    <p className="m-0 bold600">Experienced <span className="purple-text">Frontend React Developer</span> based in Houston, TX familiar with of all sides of development.</p>
                                </div>
                                <div className={`flx ${mobileMode && "just-ce"}`}>
                                    <button onClick={() => scrollToSection(refProjects)} className="btn-primary"><p className="m-0">View My Work</p></button>
                                </div>

                                <div className={`socials bold600 flx-r ${mobileMode && "just-ce"} gap-8`}>
                                    <Link target='_blank' to='https://www.linkedin.com/in/david-ekunno-794619a3/'><div className="social-link align-all-items gap-2">
                                        <img src="https://i.imgur.com/WBpcM53.png" alt="" className="img-xxsmall" />
                                        <p className="m-0 dark-text">LinkedIn</p>
                                    </div></Link>
                                    <Link target='_blank' to='https://github.com/davidekunno93'><div className="social-link align-all-items gap-2">
                                        <img src="https://i.imgur.com/LahUqrV.png" alt="" className="img-xxsmall" />
                                        <p className="m-0 dark-text">GitHub</p>
                                    </div></Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${mobileMode ? "top-side" : "right-side"} flx flx-1`}>
                            {mobileMode ?
                                <img src="https://i.imgur.com/mvsaat6.png" alt="" className="img-fit-80 position-bottom-modified" />
                                :
                                <img src="https://i.imgur.com/g0ZSvBo.png" alt="" className="img-fit" />
                            }
                        </div>
                    </div>
                    {!mobileMode &&
                        <Parallax />
                    }
                </div>

                <div ref={refAbout} onMouseEnter={() => addCursorStyle()} onMouseLeave={() => removeCursorStyle()} className={`about-me-section`}>

                    <div className="cursor-dot" data-cursor-dot></div>
                    <div className="cursor-outline" data-cursor-outline></div>

                    <Fade fraction={mobileMode ? 0.5 : 0.75} triggerOnce className='about-me-section'>
                        <div className={`${mobileMode ? "flx-c-reverse" : "flx-r"}`}>

                            <div className={`left-side flx-1 ${mobileMode ? "flx-r gap-2" : "flx-c ml-6"} just-se font-monty-bold`}>
                                <Slide fraction={mobileMode ? 0.5 : 0.75} direction='left' triggerOnce>
                                    <div className={`years-experience my-4 ${mobileMode && "flx-c align-c center-text px-4"}`}>
                                        <div className="flx">
                                            <div className="value xxx-large">2+</div>
                                        </div>
                                        <div className="title large">Years of experience</div>
                                    </div>
                                    <div className={`projects-worked my-4  ${mobileMode && "flx-c align-c center-text px-4"}`}>
                                        <div className="flx">
                                            <div className="value xxx-large">7</div>
                                        </div>
                                        <div className="title large">Projects worked</div>
                                    </div>
                                </Slide>
                            </div>

                            <div className="right-side flx-c just-ce flx-3">

                                <div className={`flx ${mobileMode && "just-ce"}`}>
                                    <div className="title-box">
                                        <p className="m-0 section-title">About Me</p>
                                        <div className="title-paint"></div>
                                    </div>
                                </div>
                                <p className={`section-text ${mobileMode && "mobile"} bold500`}>
                                    <span className='x-large bold600 dark-text'>Hi, I'm David...</span> <br />
                                    I found Python in 2022 and the rest is history. I'm a Junior Frontend Developer
                                    and have exceled very quickly in this field. I have a passion for creating
                                    logical solutions and software development gives me the opportunity to do just that.</p>
                                <p className={`section-text ${mobileMode && "mobile"} bold500`}>
                                    I produce smooth and intuitive web applications that optimize for user experience and
                                    functionality. I enjoy creative design but I also excel at re-creating already made designs
                                    into functional web applications. I thrive in coordinating development with backend
                                    because I have a lot of experience in backend development.</p>
                                <p className={`section-text ${mobileMode && "mobile"} bold500`}>
                                    When I'm not coding, I enjoy creating artistic videos, dancing and playing or watching
                                    soccer.
                                </p>
                                <div className={`flx ${mobileMode && "just-ce"}`}>
                                    <div className="title-box">
                                        <p className={`m-0 section-subtitle ${mobileMode && "mobile"}`}>Contact Information</p>
                                        <div className="subtitle-paint"></div>
                                    </div>
                                </div>
                                <div className={`section-content ${mobileMode ? "mobile just-ce mt-2" : "pl-4"} flx-r gap-8`}>
                                    <div className="flx-r align-c gap-2">
                                        {mobileMode ?
                                            <ButtonMailtoIcon label="mail" mailto="mailto:matramere@gmail.com" />
                                            :
                                            <span className="material-symbols-outlined">mail</span>
                                        }
                                        {!mobileMode &&
                                            <ButtonMailto label="matramere@gmail.com" mailto="mailto:matramere@gmail.com" />
                                        }
                                    </div>
                                    <Link target='_blank' to='https://www.linkedin.com/in/david-ekunno-794619a3/' className='black-text'>
                                        <div className="flx-r align-c gap-2 no-cursor">
                                            <img src="https://i.imgur.com/xiXGWUQ.png" alt="" className="img-xxsmall" />
                                            {!mobileMode &&
                                                <p className="m-0 about-me-link">David Ekunno</p>
                                            }
                                        </div></Link>
                                </div>

                            </div>

                        </div>
                    </Fade>
                </div>


                <div ref={refSkills} className="skills-section py-8">
                    {/* <div className="section-title ml-5">My Skills</div> */}
                    {mobileMode &&
                        <div className={`flx just-ce`}>
                            <div className="title-box mb-3">
                                <p className={`m-0 section-subtitle`}>Technical Skills</p>
                                <div className={`title-paint`}></div>
                            </div>
                        </div>
                    }
                    <Fade fraction={0.8} triggerOnce>
                        <Slide fraction={0.8} direction='down' triggerOnce>
                            <div className="technologies flx-r flx-wrap just-se my-4">
                                {techImgs.map((tech, index) => {
                                    if (index < 6) {
                                        return <div className="tech-img-wrap">
                                            <img className={`${mobileMode ? "img-small-h" : "img-medium-h"}`} src={tech.imgUrl} />
                                            {!mobileMode &&
                                                <div className="info position-absolute">
                                                    <p className="m-0">{tech.tech}</p>
                                                    <p className="m-0 small">{tech.exp} Exp</p>
                                                </div>
                                            }
                                        </div>
                                    }
                                })}
                            </div>
                        </Slide>
                    </Fade>
                    <Fade fraction={0.8} triggerOnce>
                        <Slide fraction={0.8} direction='up' triggerOnce>
                            <div className="technologies flx-r flx-wrap just-se my-2">
                                {techImgs.map((tech, index) => {
                                    if (index >= 6) {
                                        return <div className="tech-img-wrap">
                                            <img className={`${mobileMode ? "img-small-h" : "img-medium-h"}`} src={tech.imgUrl} />
                                            {!mobileMode &&
                                                <div className="info position-absolute">
                                                    <p className="m-0">{tech.tech}</p>
                                                    <p className="m-0 small">{tech.exp} Exp</p>
                                                </div>
                                            }
                                        </div>
                                    }
                                })}
                            </div>
                        </Slide>
                    </Fade>
                </div>


                <div ref={refProjects} className={`flx ${mobileMode ? "just-ce mb-8" : "ml-6 py-8"}`}>
                    <div className="title-box">
                        <p className={`m-0 ${mobileMode ? "section-subtitle" : "section-title"}`}>Recent Projects</p>
                        <div className={`title-paint`}></div>
                    </div>

                </div>
                <div className="projects-section my-8">

                    <div className="carousel-window">
                        <div className="inner" style={{ transform: `translateX(-${projectIndex * 100}%)` }}>
                            <div className="carousel-item">

                                <div className={`project-page flx-c ${mobileMode && "pt-4"}`}>
                                    {projects.map((project, index) => {
                                        let even = (index + 1) % 2 === 0
                                        if (index < 3) {
                                            return <div key={index} className={`project-card ${mobileMode ? "flx-c align-c" : even ? "flx-r-reverse" : "flx-r"}`}>
                                                <div className="w-50 flx just-ce">
                                                    {project.website ?
                                                        <Link target='_blank' to={project.website}><div className="window-container-outer pointer">
                                                            <div className="overlay-title">
                                                                {project.logoUrl &&
                                                                    <img src={project.logoUrl} alt="" className="img-xxsmall" />
                                                                }
                                                                <p className="m-0 large ws-normal">{project.title}</p>
                                                            </div>
                                                            <div className={`window-container ${mobileMode && "mobile"}`}>
                                                                <div className={mobileMode ? "card-window" : even ? "card-window-r" : "card-window-l"}>
                                                                    <img src={project.imgUrl} alt="" className={mobileMode ? "img-custom" : even ? " img-custom-r" : "img-custom-l"} />

                                                                </div>
                                                            </div>
                                                        </div></Link>
                                                        :
                                                        <div className="window-container-outer">
                                                            <div className="overlay-title">
                                                                {project.logoUrl &&
                                                                    <img src={project.logoUrl} alt="" className="img-xxsmall" />
                                                                }
                                                                <p className="m-0 large">{project.title}</p>
                                                                <p className="m-0">(Website not deployed)</p>
                                                            </div>
                                                            <div className="window-container">
                                                                <div className={mobileMode ? "card-window" : even ? "card-window-r" : "card-window-l"}>
                                                                    <img src={project.imgUrl} alt="" className={mobileMode ? "img-custom" : even ? " img-custom-r" : "img-custom-l"} />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div className={`card-text ${mobileMode && "mobile"}`}>
                                                    <p className="m-0 title">{project.title}</p>
                                                    <p className="text-body">{project.desc}</p>
                                                    <div className={`desktop-phone flx-r just-ce gap-4 ${mobileMode && "mb-4"}`}>
                                                        <img src="https://i.imgur.com/0PAMDas.png" alt="" className="img-xxsmall-h" />
                                                        {project.responsive &&
                                                            <img src="https://i.imgur.com/n96bwGO.png" alt="" className="img-xxsmall-h" />
                                                        }
                                                    </div>
                                                    <div className="text-footer">
                                                        <div className="tech-stack flx-r just-ce gap-6">
                                                            {project.techs.map((techName, index) => {
                                                                return <div key={index} className="techBox position-relative">
                                                                    <img src={techImgs[techIndex[techName]].logo} alt="" className="img-xsmall-h" />
                                                                    <div className="techName small">{techName}</div>
                                                                </div>
                                                            })}
                                                        </div>
                                                        {!mobileMode ?
                                                            <div className="weblinks flx-r gap-12 bold600 just-ce my-4">
                                                                {project.website &&
                                                                    <Link target='_blank' to={project.website} ><div className="website align-all-items gap-2 black-text">
                                                                        <span className="material-symbols-outlined">language</span>
                                                                        <p className="m-0">Website</p>
                                                                    </div></Link>
                                                                }
                                                                <Link target='_blank' to={project.github}><div className="github align-all-items gap-2 black-text">
                                                                    <img src={techImgs[techIndex.GitHub].logo} alt="" className="img-xxsmall" />
                                                                    <p className="m-0">GitHub</p>
                                                                </div></Link>
                                                            </div>
                                                            :
                                                            <div className="weblinks flx-r gap-10 bold600 just-ce mt-4 mb-8">
                                                                <Link target='_blank' to={project.website} ><button className="btn-tertiary flx-r gap-2 align-c">
                                                                    <div className="material-symbols-outlined">language</div>
                                                                    <p className="m-0">Website</p>
                                                                </button></Link>
                                                                <Link target='_blank' to={project.github}><button className="btn-tertiary flx-r gap-2 align-c">
                                                                    <img src="https://i.imgur.com/A3c3kUB.png" alt="" className="img-xxsmall" />
                                                                    <p className="m-0">GitHub</p>
                                                                </button></Link>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    })}
                                </div>

                            </div>

                            <div className="carousel-item">

                                <div className={`project-page flx-c ${mobileMode && "pt-4"}`}>
                                    {projects.map((project, index) => {
                                        let even = (index + 1) % 2 === 0
                                        if (index >= 3 && index < 6) {
                                            return <div key={index} className={`project-card ${mobileMode ? "flx-c align-c" : !even ? "flx-r-reverse" : "flx-r"}`}>
                                                <div className="w-50 flx just-ce">
                                                    {project.website ?
                                                        <Link target='_blank' to={project.website}><div className="window-container-outer pointer">
                                                            <div className="overlay-title">
                                                                {project.logoUrl &&
                                                                    <img src={project.logoUrl} alt="" className="img-xxsmall" />
                                                                }
                                                                <p className="m-0 large">{project.title}</p>
                                                            </div>
                                                            <div className={`window-container ${mobileMode && "mobile"}`}>
                                                                <div className={mobileMode ? "card-window" : !even ? "card-window-r" : "card-window-l"}>
                                                                    <img src={project.imgUrl} alt="" className={mobileMode ? "img-custom" : !even ? " img-custom-r" : "img-custom-l"} />

                                                                </div>
                                                            </div>
                                                        </div></Link>
                                                        :
                                                        <div className="window-container-outer">
                                                            <div className="overlay-title">
                                                                {project.logoUrl &&
                                                                    <img src={project.logoUrl} alt="" className="img-xxsmall" />
                                                                }
                                                                <p className="m-0 large">{project.title}</p>
                                                                <p className="m-0">(Website not deployed)</p>
                                                            </div>
                                                            <div className={`window-container ${mobileMode && "mobile"}`}>
                                                                <div className={mobileMode ? "card-window" : even ? "card-window-r" : "card-window-l"}>
                                                                    <img src={project.imgUrl} alt="" className={mobileMode ? "img-custom" : even ? " img-custom-r" : "img-custom-l"} />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div className={`card-text ${mobileMode && "mobile"}`}>
                                                    <p className="title">{project.title}</p>
                                                    <p className="text-body">{project.desc}</p>
                                                    <div className={`desktop-phone flx-r just-ce gap-4 ${mobileMode && "mb-4"}`}>
                                                        <img src="https://i.imgur.com/0PAMDas.png" alt="" className="img-xxsmall-h" />
                                                        {project.responsive &&
                                                            <img src="https://i.imgur.com/n96bwGO.png" alt="" className="img-xxsmall-h" />
                                                        }
                                                    </div>
                                                    <div className="text-footer">
                                                        <div className="tech-stack flx-r just-ce gap-6">
                                                            {project.techs.map((techName, index) => {
                                                                return <div key={index} className="techBox position-relative">
                                                                    <img src={techImgs[techIndex[techName]].logo} alt="" className="img-xsmall-h" />
                                                                    <div className="techName small">{techName}</div>
                                                                </div>
                                                            })}
                                                        </div>
                                                        {!mobileMode ?
                                                            <div className="weblinks flx-r gap-12 bold600 just-ce my-4">
                                                                {project.website &&
                                                                    <Link target='_blank' to={project.website} ><div className="website align-all-items gap-2 black-text">
                                                                        <span className="material-symbols-outlined">language</span>
                                                                        <p className="m-0">Website</p>
                                                                    </div></Link>
                                                                }
                                                                <Link target='_blank' to={project.github}><div className="github align-all-items gap-2 black-text">
                                                                    <img src={techImgs[techIndex.GitHub].logo} alt="" className="img-xxsmall" />
                                                                    <p className="m-0">GitHub</p>
                                                                </div></Link>
                                                            </div>
                                                            :
                                                            <div className="weblinks flx-r gap-10 bold600 just-ce mt-4 mb-8">
                                                                <Link target='_blank' to={project.website} ><button className="btn-tertiary flx-r gap-2 align-c">
                                                                    <div className="material-symbols-outlined">language</div>
                                                                    <p className="m-0">Website</p>
                                                                </button></Link>
                                                                <Link target='_blank' to={project.github}><button className="btn-tertiary flx-r gap-2 align-c">
                                                                    <img src="https://i.imgur.com/A3c3kUB.png" alt="" className="img-xxsmall" />
                                                                    <p className="m-0">GitHub</p>
                                                                </button></Link>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    })}
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
                <div className="view-more flx-r my-4 ml-8">
                    {indicatorsVisible ?
                        <div className="dot-indicators just-ce">
                            {projectPages.map((page, index) => {
                                return <div key={index} onClick={() => setProjectIndex(index)} className={`${index === projectIndex ? "dot-selected" : "dot-unselected"}`}></div>
                            })}
                        </div>
                        :
                        <button onClick={() => { setProjectIndex(1); setIndicatorsVisible(true) }} className="btn-primary">View More</button>
                    }
                </div>

                <div className="footer-section position-relative mt-12">
                    <p className={`m-0 mt-8 ${mobileMode ? "section-subtitle center-text" : "section-title"}`}>Send me a message</p>
                    <div className={`profile-card ${mobileMode && "mobile"} mt-5`}>
                        <div className={`profile-card-imgDiv ${mobileMode && "mobile"}`}>
                            <img src="https://i.imgur.com/3BwhEn7.jpg" alt="" className={`profile-card-img ${mobileMode && "mobile"}`} />
                        </div>
                        <div className={`profile-card-text ${mobileMode && "mobile"}`}>
                            <p className={`m-0 title ${mobileMode && "mobile"}`}>David Ekunno</p>
                            <p className={`m-0 subtitle ${mobileMode && "mobile"}`}>Frontend Developer</p>
                            <div className="socials mt-2 bold600 flx-r gap-8">
                                <Link target='_blank' to='https://www.linkedin.com/in/david-ekunno-794619a3/'><div className="social-link align-all-items gap-2">
                                    <img src="https://i.imgur.com/xiXGWUQ.png" alt="" className="img-xxsmall" />
                                </div></Link>
                                <Link target='_blank' to='https://github.com/davidekunno93'><div className="social-link align-all-items gap-2">
                                    <img src="https://i.imgur.com/LahUqrV.png" alt="" className="img-xxsmall" />
                                </div></Link>
                                <Link target='_blank' to='https://www.instagram.com/davidekunno/?hl=en'><div className="social-link align-all-items gap-2">
                                    <img src="https://i.imgur.com/jaEKqs3.png" alt="" className="img-xxsmall" />
                                </div></Link>

                            </div>
                        </div>
                    </div>
                    <div className={`message-bubble ${mobileMode && "d-none"} flx-c just-ce`}>
                        <Fade fraction={0.8} delay={200} triggerOnce>
                            <Slide fraction={0.8} direction='up' triggerOnce>


                                <div id='formSent' className="formSent flx-c gap-3 hidden-down2-o">
                                    <p className="m-0 white-text bold600 x-large center-text">Message Sent</p>
                                    <div className="flx">
                                        <img src="https://i.imgur.com/ZbTlD9h.png" alt="" className="img-medium m-auto" />
                                    </div>
                                    <p onClick={() => resetBubbleMessage()} className="m-0 white-text o-50 center-text pointer">Click to send another message</p>

                                </div>


                                <div id='formContents' className='formContents'>

                                    <form ref={bubbleForm} onSubmit={(e) => sendEmail(e, "bubbleEmail")} className="flx-c gap-4">

                                        <div className="align-all-items gap-2 just-ce white-text">
                                            <span className="material-symbols-outlined">mail</span>
                                            <p className="m-0">matramere@gmail.com</p>
                                        </div>

                                        <input id='bubbleEmail' type="text" name='user_email' className="input-style center w-100 font-jakarta" placeholder='Your Email' autoComplete='off' />
                                        {/* <input type="text" className="input-style center w-100" placeholder='Your Message' /> */}
                                        <textarea name="message" id="bubbleMessage" cols="30" rows="10" className="textarea-style w-100 font-jakarta" placeholder='Your message' autoComplete='off'></textarea>
                                        {/* <button id='bubble-btn' className="btn-secondary w-60 center">Send message</button> */}
                                        <input id='bubbleSend' type="submit" value="Send message" className="bubble-btn w-60 center pointer" />

                                    </form>
                                </div>

                            </Slide>
                        </Fade>
                    </div>
                </div>
                {mobileMode &&
                    <div className="message-section position-relative">

                        <div ref={refMobileFormSent} id='mobileFormSent' className="formSent flx-c gap-3 hidden-down3-o">
                            <p className="m-0 white-text bold600 x-large center-text">Message Sent</p>
                            <div className="flx">
                                <img src="https://i.imgur.com/ZbTlD9h.png" alt="" className="img-medium m-auto" />
                            </div>
                            <p onClick={() => resetMobileMessage()} className="m-0 white-text o-50 center-text pointer">Click to send another message</p>

                        </div>

                        <div ref={refMobileFormContents} id='mobileFormContents' className='formContents'>

                            <form ref={mobileForm} onSubmit={(e) => sendEmail(e, "mobileEmail")} className="flx-c gap-4">

                                <div className="align-all-items gap-2 just-ce white-text">
                                    <span className="material-symbols-outlined">mail</span>
                                    <p onClick={() => mobileMessageSentAnimation()} className="m-0">matramere@gmail.com</p>
                                </div>

                                <input ref={mobileEmailInput} id='mobileEmail' type="text" name='user_email' className="input-style center w-100 font-jakarta" placeholder='Your Email' autoComplete='off' />
                                <textarea ref={mobileMessageInput} name="message" id="mobileMessage" className="textarea-style w-100 font-jakarta" placeholder='Your message' autoComplete='off'></textarea>
                                <input id='mobileSend' type="submit" value="Send message" className="bubble-btn w-60 center pointer mb-4" />

                            </form>
                        </div>


                    </div>
                }
                <div className="footer flx-c gap-2">
                    <p className="m-0 white-text">Thank you for viewing my portfolio. Send me a message or get in touch on LinkedIn.</p>
                    <div className="flx">
                        <Link target='_blank' to='https://github.com/davidekunno93/Portfolio2.git'><div className="align-all-items gap-2">
                            <img src="https://i.imgur.com/A3c3kUB.png" alt="" className="img-xxsmall" />
                            <p className="m-0 white-text">Portfolio GitHub Link</p>
                        </div>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}
export default MainPage;