import { HERO_CONTENT } from "../constants/index.js";
import profile from "../assets/profileNoBg.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        }
    }
})

export default function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Jazziel Rodríguez
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl trakking-tight text-transparent lg:text-6xl">
                            Backend developer
                        </motion.span>
                        <motion.p variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {
                                HERO_CONTENT
                            }
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center relative">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="relative z-10 rounded-full bg-neutral-950/20 p-[2px]"
                        >
                            <img
                                src={profile}
                                alt="about picture"
                                className="rounded-full w-[300px] h-[300px] object-cover"
                            />
                        </motion.div>
                    </div>


                </div>
            </div>
        </div>
    )
}
