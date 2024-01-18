import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import { getCleanForward } from "@utils/StringOperations";
import { getObjectToStringArr } from "@utils/ObjectOperations";
import GalleryImg from "./GalleryImg";
import H2 from "@common/H2";
const POKEMON_IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  let imgArr = getObjectToStringArr(pokemon?.sprites);

  return (
    <>
      <H2 className="my-6 text-white">{pokemon.name} Images Gallery</H2>

      <div
        {...resProps}
        className={
          " overflow-x-auto py-6 px-4 " +
          `${resProps.className ? resProps.className : ""}`
        }
      >
        <div className="flex justify-center gap-6 mx-6">
          {imgArr.map((img, id) => {
            let imageName = img.replace(POKEMON_IMG_URL, "");
            imageName = getCleanForward(imageName);
            return (
              <div key={id} className=" bg-title flex-shrink-0">
                <GalleryImg imageName={imageName} width={300} src={img} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
