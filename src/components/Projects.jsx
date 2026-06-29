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
                            className="w-full lg:w-1/4 mb-4 lg:mb-0"
                        >
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="mb-6 rounded w-full h-48 object-cover"
                                />
                            )}
                            {project.architectureImage && (
                                <div className="mt-4">
                                    <h6 className="mb-2 font-semibold text-neutral-300">Arquitectura:</h6>
                                    <img
                                        src={project.architectureImage}
                                        alt={`${project.title} Architecture`}
                                        className="mb-6 rounded w-full object-cover"
                                    />
                                </div>
                            )}
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className="w-full max-w-xl lg:w-3/4 lg:pl-8"
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            {project.tagline && <p className="mb-2 text-neutral-400 text-sm italic">{project.tagline}</p>}
                            {project.problemSolved && (
                                <p className="mb-2 text-neutral-400">
                                    <span className="font-semibold">Problema:</span> {project.problemSolved}
                                </p>
                            )}
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.keyFeatures && project.keyFeatures.length > 0 && (
                                <div className="mb-2">
                                    <h6 className="font-semibold text-neutral-300">Características clave:</h6>
                                    <ul className="list-disc list-inside text-neutral-400">
                                        {project.keyFeatures.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-200 mr-2 mt-2"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.challengesAndSolutions && (
                                <p className="mt-4 text-neutral-400">
                                    <span className="font-semibold">Desafíos y Soluciones:</span> {project.challengesAndSolutions}
                                </p>
                            )}
                            {project.impact && (
                                <p className="mt-2 text-neutral-400">
                                    <span className="font-semibold">Impacto:</span> {project.impact}
                                </p>
                            )}
                            <div className="mt-4 flex flex-wrap gap-4">
                                {project.gitUrl && (
                                    <a
                                        href={project.gitUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Ver código en GitHub
                                    </a>
                                )}
                                {project.liveDemoUrl && (
                                    <a
                                        href={project.liveDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-500 hover:underline"
                                    >
                                        Demo en vivo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
