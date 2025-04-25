import project1 from "../assets/projects/project01.png";
import project2 from "../assets/projects/project02.jpg";


export const HERO_CONTENT = `Desarrollador de software especializado en el lado del servidor, con capacidad para crear aplicaciones funcionales y escalables. Cuento con un año de experiencia práctica trabajando con diversas herramientas y entornos como Node.js y Express. También tengo conocimientos en el desarrollo frontend utilizando React y Angular. Mi principal objetivo es aplicar mi experiencia para ofrecer soluciones efectivas que impulsen el crecimiento empresarial.`;

export const ABOUT_TEXT = `
Soy desarrollador de software con enfoque en backend, actualmente finalizando la Ingeniería en Sistemas Computacionales.<br />
Me especializo en la creación de APIs seguras, manejo de autenticación, gestión de usuarios y lógica de negocio.<br />
He trabajado con tecnologías como Node.js (Express, NestJS), PHP (Slim), Java (Spring Boot), y bases de datos tanto relacionales como no relacionales.<br /><br />
Actualmente, estoy ampliando mis conocimientos en DevOps por cuenta propia, buscando integrar prácticas que optimicen el desarrollo y despliegue de aplicaciones.<br /><br />
Me interesa trabajar en equipo y contribuir a soluciones técnicas eficientes. Estoy abierto a colaborar en cualquier tipo de proyecto, no exclusivamente de backend, siempre que represente una oportunidad de aprendizaje y crecimiento profesional.
`;
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
  },
  
  {
    title:"SPC",
    image: project2,
    description:
      "Sistema de gestión y control de servicios que optimiza las operaciones de una empresa. Facilita a los administradores la gestión de usuarios, dispositivos y servicios, mientras que los usuarios pueden consultar en tiempo real los servicios que se les están realizando..",
    technologies: ["Node.js", "Express", "MySQL", "Template Engine", "MVC"],
  }
];

export const PROJECTS = [
  {
    //Ejemplos, falta por revisar cuales
    title: "Portfolio Website",
    image: project1,
    description:
      "Portfolio personal que muestra mis proyectos, habilidades y experiencia laboral.",
    technologies: ["Tailwindcss", "React", "Node.js","HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Av Zaragoza #208 Col. Centro, 773080 Xicotepec de Juárez, Puebla",
  phoneNo: "+52 764 110 68 43 ",
  email: "jazzielrodriguezlopez@gmail.com",
};
