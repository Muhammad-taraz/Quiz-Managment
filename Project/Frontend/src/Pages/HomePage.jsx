import Header from "../Header";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"

function HomePage() {
  
  
  const borderVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.92 } },
  };

  
  return (
    <>
      <Header />
      
      <motion.div className="flex justify-center items-center"
             initial = "hidden"
             animate = "visible"
             variants = {borderVariants}>
        <TypeAnimation
          className="flex justify-center items-center border-[5px]  rounded-lg border-gray-400 mt-16 w-[35rem] p-12"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            " Hello New User👋👋 and Welcome to Website . We will be here for your prepration . This website will help you to pass your tests ",
            1000,
          ]}
          wrapper="div"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </motion.div>
    </>
  );
}

export default HomePage;
