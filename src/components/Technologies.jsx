import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { IoLogoAngular } from "react-icons/io";
import { SiPrisma } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";


export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24'">
      <h2 className="my-20 text-center text-4xl">Tecnologías</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-gray-300" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-orange-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpringboot className="text-7xl text-green-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoAngular className="text-7xl text-red-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPrisma className="text-7xl text-indigo-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoMongodb className="text-7xl text-green-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNestjs className="text-7xl text-pink-600" />
        </div>


      </div>
    </div>
  )
}
