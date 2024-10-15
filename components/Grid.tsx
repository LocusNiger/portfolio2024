import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
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
