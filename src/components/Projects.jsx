import { PROJECTS } from "../constants";
export default function Projects() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Proyectos</h2>
            <div>
                {PROJECTS.map((project, i) => (
                    <div className="mb-8 flex flex-wrap lg:justify-center" key={i}>
                        <div className="w-full lg:w-1/4">
                            <img src={project.image} alt={project.title} className="mb-6 rounded" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
