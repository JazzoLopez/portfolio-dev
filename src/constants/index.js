import project1 from "../assets/projects/project01.png";
import project3 from "../assets/projects/project03.png";


export const HERO_CONTENT = `Backend Developer con enfoque en el desarrollo y mantenimiento de soluciones empresariales funcionales, escalables y alineadas a procesos de negocio. Cuento con experiencia trabajando con C#, .NET Framework, SQL Server, servicios WCF y reportes, participando en análisis de incidencias, optimización de consultas, ajuste de reglas de negocio e integración de módulos. Actualmente estoy consolidando mi especialización en el ecosistema C#/.NET, backend, bases de datos, DevOps y cloud computing.`;

export const ABOUT_TEXT = `
Perfil enfocado en backend, actualmente finalizando la Ingeniería en Sistemas Computacionales.<br />
Mi experiencia se ha centrado en el desarrollo y mantenimiento de sistemas empresariales, participando en funcionalidades relacionadas con lógica de negocio, consultas SQL, procedimientos almacenados, servicios WCF, reportes y validación de procesos internos.<br /><br />
Trabajo principalmente con C#, .NET Framework, ASP.NET Web Forms, SQL Server y herramientas del ecosistema Microsoft. También cuento con conocimientos en Node.js y Express para la creación de APIs, así como bases de datos relacionales y no relacionales.<br /><br />
Me interesa construir soluciones backend claras, mantenibles y eficientes, cuidando tanto la lógica de negocio como la calidad de los datos, el rendimiento de las consultas y la integración entre servicios.<br /><br />
Actualmente estoy fortaleciendo mi perfil hacia el ecosistema C#/.NET moderno, APIs, buenas prácticas, arquitectura de software, DevOps y cloud computing, con el objetivo de crecer como backend developer y aportar valor en proyectos reales.
`;
export const EXPERIENCES = [
  {
    year: "Febrero 2026 - Actualidad",
    role: "Software Developer",
    company: " Nubay Consultores",
    description: `Desarrollo y mantenimiento de sistemas empresariales enfocados en procesos de reaseguro. He trabajado en módulos backend con C# y .NET Framework, servicios WCF, consultas y procedimientos almacenados en SQL Server, reportes SSRS, análisis de incidencias y despliegues en ambientes DEV/QA.`,
    technologies: [
      "C#",
      ".NET Framework",
      "ASP.NET Web Forms",
      "WCF",
      "SQL Server",
      "Stored Procedures",
      "SSRS",
      "TFS"
    ]
  },
  {
    year: "Septiembre 2024 - Abril 2025",
    role: "Backend Developer",
    company: " XicoNemi.",
    description: `Participé en el desarrollo del sistema backend de Xiconemi, una aplicación enfocada en impulsar el turismo en Pueblos Mágicos. Se implementó autenticación segura con tokens, control de usuarios por roles y una arquitectura robusta para la gestión de datos.`,
    technologies: ["TypeScript", "Node.js", "Express", "mongoDB", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    year: "Mayo 2024 - Agosto 2024",
    role: "Full Stack Developer",
    company: " StartDust Inc S.A de C.V",
    description: `Migré el sistema backend de la aplicación Huauchitour a una versión 2.0. Además, desarrollé el sistema de administración para negocios y superadministradores, utilizando React y Redux Toolkit para la gestión y persistencia de datos.`,
    technologies: ["HTML", "CSS", "React.js", "MySQL", "Slim PHP", "React Native"],
  }
];

export const PROJECTS = [
  {
    //Ejemplos, falta por revisar cuales
    title: "Portfolio Website",
    image: project1,
    description:
      "Portfolio personal que muestra mis proyectos, habilidades y experiencia laboral.",
    technologies: ["Tailwindcss", "React", "Node.js", "HTML", "CSS"],
    gitUrl: "https://github.com/JazzoLopez/portfolio-dev"
  },
  {
    title: "Sentinel-pi",
    image: project3,
    description: "Aplicación de monitoreo y gestión de ataques en tiempo real que permite a los usuarios supervisar y controlar incidentes de seguridad de manera eficiente ademas de predecir posibles amenazas futuras utilizando algoritmos de machine learning.",
    technologies: ["Spring Boot", "Java", "MySQL", "Thymeleaf", "HTML", "CSS"],
    gitUrl: "https://github.com/GoatTeam1/docs_SentinelPI"
  }
];

export const CONTACT = {
  // address: "Av Zaragoza #208 Col. Centro, 773080 Xicotepec de Juárez, Puebla",
  // phoneNo: "+52 764 110 68 43 ",
  email: "jazzielrodriguezlopez@gmail.com",
};
