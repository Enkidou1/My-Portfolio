import { AiOutlineJavaScript } from "react-icons/ai"
import { DiHtml5, DiJavascript } from "react-icons/di"
import { FaHtml5, FaNodeJs } from "react-icons/fa"
import { MdJavascript } from "react-icons/md"
import { RiReactjsLine } from "react-icons/ri"
import { SiHtml5, SiMongodb } from "react-icons/si"
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
  y: [10, -10],
  transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  }
  }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4">
            <TbBrandNextjs className="text-7xl text-cyan-500" />
           </motion.div>
           <motion.div 
           
           initial="initial"
            animate="animate"
            variants={iconVariants(3)}
           className="p-4">
            <AiOutlineJavaScript className="text-7xl text-cyan-500" />
           </motion.div>
           <motion.div
           initial="initial"
           animate="animate"
           variants={iconVariants(2)}

           className="p-4">
            <SiMongodb className="text-7xl text-cyan-500" />
           </motion.div>
           <motion.div
           initial="initial"
           animate="animate"
           variants={iconVariants(6)}
           
           className="p-4">
            <FaNodeJs className="text-7xl text-cyan-500" />
           </motion.div>
           <motion.div
           initial="initial"
           animate="animate"
           variants={iconVariants(3)}
           

           className="p-4">
            <SiHtml5 className="text-7xl text-cyan-500" />
           </motion.div>
        </motion.div>

           

    </div>
  )
}

export default Technologies