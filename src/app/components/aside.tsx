import AsideButton from "./aside_button";
import { Image } from "@nextui-org/react";

export default function Aside() {
  return (
    <aside className="bg-[var(--rich-black)] w-auto max-w-[100%]  h-full min-h-screen self-start flex flex-col justify-start items-center gap-6 fixed left-0 mr-4 z-10">
      <a href="#" className="pt-20">
        <Image
          alt={"Logo de George Vieira"}
          src={"../seu-logo.svg"}
          width={80}
          height={60}
        ></Image>
      </a>
      <div className="flex flex-col text-wrap justify-center items-center h-10 w-52 m-4">
        <h1 className=" hover:text-2xl text-[var(--pumpkin)] text-center text-2xl  m-4  text-wrap">
          George Vieira
        </h1>
      </div>
      <ul className="flex flex-col gap-8 max-w-[95%]">
        <li>
          <a href="#sobre_mim">
            <AsideButton title={"Sobre Mim"}></AsideButton>
          </a>
        </li>
        <li>
          <a href="#projetos">
            <AsideButton title={"Projetos"}></AsideButton>
          </a>
        </li>
        <li>
          <a href="#marca">
            <AsideButton title={"Marca"}></AsideButton>
          </a>
        </li>
      </ul>
    </aside>
  );
}
