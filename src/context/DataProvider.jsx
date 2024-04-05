import React, { createContext, useEffect, useRef, useState } from 'react'

const DataProvider = (props) => {

    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [mobileMode, setMobileMode] = useState(false)
    const refAbout = useRef(null);
    const refSkills = useRef(null);
    const refProjects = useRef(null);
    const form = useRef(null);

    const handleResize = () => {
        if (document.body.clientWidth < 800) {
            setMobileMode(true)
            console.log('Mobile Mode: On')
        } else {
            setMobileMode(false)
            console.log('Mobile Mode: Off')
        }
    }
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize, true)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    const isMobile = () => {
        return /Android|iPhone/i.test(navigator.userAgent)
    }
    useEffect(() => {
        let ans = isMobile()
        console.log(ans)
    }, [])

    return (
        <DataContext.Provider value={{ 'mobileMode': mobileMode, 'contactModalOpen': contactModalOpen, 'setContactModalOpen': setContactModalOpen, 'refAbout': refAbout, 'refSkills': refSkills, 'refProjects': refProjects }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;
export const DataContext = createContext();