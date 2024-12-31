import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const Hero = () => {
  const HERO_CONTENT =
    "I am a passionate web developer with a focus on creating modern, responsive and efficient websites.";

  return (
    <div className="pb-4 lg:mb-36">
      <div className="w-full lg:w-1/2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants} 
          className="flex flex-col items-center lg:items-start mt-10"
        >
          <motion.h2
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-5xl"
          >
            Hi, I'm Muyiwa
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-12 py-3 bg-gray-900 dark:bg-gray-700 text-gray-100 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;