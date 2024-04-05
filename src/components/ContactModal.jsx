import React, { useContext, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';

const ContactModal = ({ open, onClose }) => {
    if (!open) return null
    const { mobileMode } = useContext(DataContext);
    const [modalWidth, setModalWidth] = useState(mobileMode ? 300 : 600)

    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                className='font-jakarta'
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
        <div className="overlay-placeholder">
            <Fade duration={200} delay={100} triggerOnce>
                    <div className="overlay">
                <Slide direction='up' duration={200} className='w-100 flx' triggerOnce>


                        <div className="contact-modal" style={{ width: modalWidth }}>
                            <div className="modal-title">
                                <p className={`m-0 ${mobileMode && "medium"}`}>Contact Information</p>
                                <div onClick={() => onClose()} className="closeBtn-2">
                                    <span className="material-symbols-outlined">close</span>
                                </div>
                            </div>
                            <div className={`modal-body ${mobileMode && "small-medium"} flx-1 just-se`}>
                                <div className="flx-r gap-3">
                                    <img src="https://i.imgur.com/xiXGWUQ.png" alt="" className="img-xxsmall ml-h" />
                                    <p className="m-0 bold700">LinkedIn: </p>
                                    <Link target='_blank' to='https://www.linkedin.com/in/david-ekunno-794619a3/'><p className="m-0">David Ekunno</p></Link>

                                </div>
                                <div className="flx-r gap-3">
                                    <span className="material-symbols-outlined">mail</span>
                                    <p className="m-0 bold700">Email: </p>
                                    <ButtonMailto label="matramere@gmail.com" mailto="mailto:matramere@gmail.com" />
                                </div>
                            </div>
                        </div>


                </Slide>
                    </div>
            </Fade>
        </div>
    )
}
export default ContactModal;