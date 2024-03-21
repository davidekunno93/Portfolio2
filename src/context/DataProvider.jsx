import React, { createContext, useRef, useState } from 'react'

const DataProvider = (props) => {

    const [contactModalOpen, setContactModalOpen] = useState(false);
    const refAbout = useRef(null);
    const refSkills = useRef(null);
    const refProjects = useRef(null);
    const form = useRef(null);

    return (
        <DataContext.Provider value={{ 'contactModalOpen': contactModalOpen, 'setContactModalOpen': setContactModalOpen, 'refAbout': refAbout, 'refSkills': refSkills, 'refProjects': refProjects }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;
export const DataContext = createContext();