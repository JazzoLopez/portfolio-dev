import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Proyectos
            </motion.h2>
            <div>
                {PROJECTS.map((project, i) => (
                    <div className="mb-8 flex flex-wrap lg:justify-center" key={i}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.5 }}
                            className="w-full lg:w-1/4 mb-4 lg:mb-0" // Se agregó mb-4
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-6 rounded w-full h-48 object-cover"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className="w-full max-w-xl lg:w-3/4 lg:pl-8" // Se agregó lg:pl-8
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
