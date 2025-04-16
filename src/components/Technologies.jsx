import { RiReactjsLine, RiJavascriptFill } from 'react-icons/ri';
import { SiTypescript, SiExpress, SiNestjs, SiSpringboot, SiMysql, SiPrisma, SiMongoose, SiPhp, SiPostgresql, SiGithub, SiDocker, SiKubernetes, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { IoLogoAngular } from 'react-icons/io';
import { BiLogoMongodb } from 'react-icons/bi';

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Tecnologías</h2>

      {/* Backend */}
      <div>
        <h3 className="text-2xl text-center my-6">Backend</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-7xl text-gray-300" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNestjs className="text-7xl text-pink-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPhp className="text-7xl text-indigo-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-orange-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSpringboot className="text-7xl text-green-500" />
          </div>
        </div>
      </div>

      {/* Bases de Datos y ORM */}
      <div>
        <h3 className="text-2xl text-center my-6">Base de Datos y ORM</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoMongodb className="text-7xl text-green-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPostgresql className="text-7xl text-blue-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-blue-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPrisma className="text-7xl text-indigo-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongoose className="text-7xl text-red-500" />
          </div>
        </div>
      </div>

      {/* Frontend */}
      <div>
        <h3 className="text-2xl text-center my-6">Frontend</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoAngular className="text-7xl text-red-600" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptFill className="text-7xl text-yellow-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className="text-7xl text-blue-500" />
          </div>
        </div>
      </div>

      {/* Herramientas y DevOps */}
      <div>
        <h3 className="text-2xl text-center my-6">Herramientas</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGit className="text-7xl text-orange-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGithub className="text-7xl text-white" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDocker className="text-7xl text-blue-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiKubernetes className="text-7xl text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
