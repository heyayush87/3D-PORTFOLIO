
import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline";
const HeroSection = () => {
    return (
      <section className=" h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
        <div className="z-40 xl:mb-0 mb-[20%]">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
          >
            Building Fast <br /> Reliable Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.8,
            }}
            className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
          >
            Hi, I'm Ayush Kumar — a Frontend Developer passionate about crafting
            elegant user interfaces and interactive experiences. I’ve built
            dynamic platforms like <strong>NetStream</strong>, an AI-powered
            movie recommendation system using{" "}
            <strong>Gemini AI, React.js, Redux Toolkit</strong>, and{" "}
            <strong>Firebase</strong>, and
            <strong>FoodVilla</strong>, a live food ordering interface powered
            by the Swiggy API. My portfolio showcases immersive 3D design using{" "}
            <strong>Spline</strong>, fluid transitions with{" "}
            <strong>Framer Motion</strong>, and custom animations using{" "}
            <strong>GSAP</strong>. I’m dedicated to building performant,
            mobile-friendly UIs that combine beauty with scalability.
          </motion.p>
        </div>
        {/*Right Section */}
        <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%]  lg:top-0"
          scene="https://prod.spline.design/G06g951NSyTG8Kax/scene.splinecode"
        />
      </section>
    );
}

export default HeroSection;