import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Grid = () => {
  const words = [
    {
      text: "About",
      className: "text-blue-500 text-4xl",
    },
    {
      text: "me",
      className: "text-blue-500 text-4xl",
    },
  ];
  return (
    <section id="about">
      <div className="flex justify-center items-center py-16">
        <TypewriterEffectSmooth
          words={words}
          cursorClassName="bg-blue-500 h-11 w-[3px]"
        />
      </div>
      {/* Efecto de escritura */}
      <BentoGrid>
        {/* Mapea el arreglo gridItems donde se encuentra la información a mostrar */}
        {/* Cada item a mostrar en el grid cuenta con todos estos datos, inclusive las clases a pasar */}
        {gridItems.map(
          ({
            id,
            title,
            titleClassName,
            description,
            className,
            img,
            imgClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
