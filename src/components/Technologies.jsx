import { RiReactjsLine, RiJavascriptFill } from 'react-icons/ri';
import {
  SiTypescript, SiExpress, SiNestjs, SiSpringboot, SiMysql,
  SiPrisma, SiPostgresql, SiGithub,
  SiDocker, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';
import { motion } from 'framer-motion';

const iconVariants = duration => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
    }
  }
})


const icons = {
  backend: [
    { Icon: SiExpress, color: 'text-gray-300', duration: 1.5, name: 'Express' },
    { Icon: SiNestjs, color: 'text-pink-600', duration: 2, name: 'NestJS' },
    { Icon: FaJava, color: 'text-orange-600', duration: 3, name: 'Java' },
    { Icon: SiSpringboot, color: 'text-green-500', duration: 3.5, name: 'Spring Boot' },
  ],
  database: [
    { Icon: BiLogoMongodb, color: 'text-green-600', duration: 1.5, name: 'MongoDB' },
    { Icon: SiPostgresql, color: 'text-blue-500', duration: 2, name: 'PostgreSQL' },
    { Icon: SiMysql, color: 'text-blue-400', duration: 2.5, name: 'MySQL' },
    { Icon: SiPrisma, color: 'text-indigo-400', duration: 3, name: 'Prisma' },
  ],
  frontend: [
    { Icon: RiReactjsLine, color: 'text-cyan-400', duration: 1.5, name: 'React' },
    { Icon: RiJavascriptFill, color: 'text-yellow-400', duration: 2.5, name: 'JavaScript' },
    { Icon: SiTypescript, color: 'text-blue-500', duration: 3, name: 'TypeScript' },
  ],
  tools: [
    { Icon: SiGit, color: 'text-orange-500', duration: 1.5, name: 'Git' },
    { Icon: SiGithub, color: 'text-white', duration: 2, name: 'GitHub' },
    { Icon: SiDocker, color: 'text-blue-400', duration: 2.5, name: 'Docker' },
  ]
};

const Section = ({ title, items }) => (
  <div>
    <h3 className="text-2xl text-center my-6">{title}</h3>
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
      {items.map(({ Icon, color, duration, name }, index) => (
        <motion.div
          key={index}
          variants={iconVariants(duration)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Icon className={`text-7xl ${color}`} />
          <p className="text-center mt-2 text-white">{name}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold text-white">
        Tecnologías y Herramientas
      </motion.h2>

      <Section title="Backend" items={icons.backend} />
      <Section title="Base de Datos y ORM" items={icons.database} />
      <Section title="Frontend" items={icons.frontend} />
      <Section title="Herramientas" items={icons.tools} />
    </div>
  );
}
