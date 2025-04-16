import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Desarrollador de software especializado en el lado del servidor, con capacidad para crear aplicaciones funcionales y escalables. Cuento con un año de experiencia práctica trabajando con diversas herramientas y entornos como Node.js y Express. También tengo conocimientos en el desarrollo frontend utilizando React y Angular. Mi principal objetivo es aplicar mi experiencia para ofrecer soluciones efectivas que impulsen el crecimiento empresarial.`;


export const ABOUT_TEXT = `Acerca de mi xd texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto .`;

export const EXPERIENCES = [
  {
    //ejemplos
    year: "Septiembre 2024 - Presente",
    role: "Backend Developer",
    company: " XicoNemi.",
    description: `Participé en el desarrollo del sistema backend de Xiconemi, una aplicación enfocada en impulsar el turismo en Pueblos Mágicos. Se implementó autenticación segura con tokens, control de usuarios por roles y una arquitectura robusta para la gestión de datos.`,
    technologies: ["Typescript", "Node.js", "Express", "mongoDB", "PostgreSQL", "Redis", "Prisma",],
  },
  {
    year: "Mayo 2024 - Agosto 2024",
    role: "Full Stack Developer",
    company: " StartDust Inc S.A de C.V",
    description: `Migré el sistema backend de la aplicación Huauchitour a una versión 2.0. Además, desarrollé el sistema de administración para negocios y superadministradores, utilizando React y Redux Toolkit para la gestión y persistencia de datos.`,
    technologies: ["HTML", "CSS", "React.js", "MySQL", "Slim php", "React Native"],
  }
];

export const PROJECTS = [
  {
    //Ejemplos, falta por revisar cuales
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Av Zaragoza #208 Col. Centro, 773080 Xicotepec de Juárez, Puebla",
  phoneNo: "+52 764 110 68 43 ",
  email: "jazzielrodriguezlopez@gmail.com",
};
