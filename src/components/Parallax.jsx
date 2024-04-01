import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

const Parallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const foreground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const background = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

    return (
        <>
            <div ref={ref} className="parallax-complex">

                <motion.div style={{ y: foreground }} className="para-front"></motion.div>
                <motion.div style={{ y: background }} className="para-back"></motion.div>
                {/* <img src="https://i.imgur.com/1zt94zW.png" alt="" className="placeholder" /> */}
            </div>
        </>
    )
}
export default Parallax;