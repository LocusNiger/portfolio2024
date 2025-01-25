import Image from "next/image";
import MockupOficina from "@/public/MockupOficina.png";
import MockupMesa from "@/public/MockupMesa1.png";
import MockupIoT from "@/public/MockupIoT.png";
import MockupISCH from "@/public/MockupISCH.png";
import MockupPuppina from "@/public/MockupPuppina.png";

const Projects = () => {
  return (
    <section id="projects" className="sm:px-10 px-5">
      <div className="flex flex-col py-16 px-4">
        <h2 className="text-white text-5xl md:text-8xl font-light pb-16">
          Projects
        </h2>

        <div className="grid grid-cols-2 grid-rows-6 gap-3">
          <div className="row-span-2 md:h-96 relative">
            <Image
              src={MockupOficina}
              alt="Mockup Oficina Virtual"
              layout="fill"
              className="object-cover rounded-lg hover:opacity-45 transition-all duration-300"
            />
          </div>
          <div className="row-span-3 relative md:h-[576px]">
            <Image
              src={MockupMesa}
              alt="Mockup Mesa de Entrada"
              layout="fill"
              className="object-cover hover:opacity-45 transition-all duration-300 rounded-lg"
            />
          </div>
          <div className="row-span-2 row-start-3 relative md:h-96">
            <Image
              src={MockupIoT}
              alt="Mockup IoT"
              layout="fill"
              className="object-cover hover:opacity-45 transition-all duration-300 rounded-lg"
            />
          </div>
          <div className="row-span-3 col-start-2 row-start-4 relative md:h-[576px]">
            <Image
              src={MockupISCH}
              alt="Mockup ISCH"
              layout="fill"
              className="object-cover hover:opacity-45 transition-all duration-300 rounded-lg"
            />
          </div>
          <div className="row-span-2 row-start-5 relative md:h-96">
            <Image
              src={MockupPuppina}
              alt="Mockup Puppina"
              layout="fill"
              className="object-cover hover:opacity-45 transition-all duration-300 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
