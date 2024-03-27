"use client";

import { ReactNode, useEffect, useState } from "react";
import { ImageProps, asideInterface, miniBoxInterface } from "../interfaces";
import MiniBox from "./mini_box";
import { inter } from "@/app/layout";
import { Image } from "@nextui-org/react";

export default function Box({ boxNum }: miniBoxInterface) {
  const idList = ["sobre_mim", "projetos", "marca"];
  const boxArray: ReactNode[] = [FirstBox(), SecondBox(), ThirdBox()];
  return (
    <div
      id={idList[boxNum - 1]}
      className="flex flex-col flex-center justify-center bg-[var(--rich-black)] w-[78vw] h-[85vh] rounded-3xl p-8"
    >
      {boxArray[boxNum - 1]}
    </div>
  );
}

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps): ReactNode {
  return (
    <div className="flex flex-col justify-start items-start w-[100%] h-[10%] mb-8">
      <h1
        className={`text-[var(--pumpkin)] text-center text-5xl m-4 text-nowrap`}
      >
        {title}
      </h1>
    </div>
  );
}

function FirstBox(): ReactNode {
  return (
    <>
      <Title title="Sobre Mim"></Title>
      <div className=" rounded-3xl h-[80%] w-[100%] flex flex-row justify-between">
        <div className="flex flex-col justify-between h-[100%] w-[58%]">
          <div className="flex flex-row justify-between h-[50%] w-[100%]  rounded-3xl">
            <MiniBox content={"a"} h={100} w={30}></MiniBox>
            <MiniBox content={"b"} h={100} w={60}></MiniBox>
          </div>
          <MiniBox content={"a"} h={45} w={100}></MiniBox>
        </div>
        <MiniBox content={"a"} h={100} w={40}></MiniBox>
      </div>
    </>
  );
}

function SecondBox(): ReactNode {
  // deadsonesdinner.png
  const images: ImageProps[] = [
    {
      title: "Plastic Defense",
      path: "../plastic-defense.png",
      link: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime, provident fugit animi odit commodi debitis illo consequuntur laborum, dicta temporibus vitae soluta excepturi, suscipit labore eaque veritatis numquam? Laborum.",
    },
    {
      title: "Deads Ones Dinner",
      path: "../deadsonesdinner.png",
      link: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime, provident fugit animi odit commodi debitis illo consequuntur laborum, dicta temporibus vitae soluta excepturi, suscipit labore eaque veritatis numquam? Laborum.",
    },
    {
      title: "Fruits Classifier",
      path: "../fruits-classifier.png",
      link: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime, provident fugit animi odit commodi debitis illo consequuntur laborum, dicta temporibus vitae soluta excepturi, suscipit labore eaque veritatis numquam? Laborum. ",
    },
  ];
  const [image, setImage] = useState<ImageProps>(images[0]);

  // useEffect(() => {
  //   setImage(images[0]);
  // }, []);

  return (
    <>
      <Title title="Projetos"></Title>
      <div className="flex flex-col justify-start items-start w-[100%] h-[10%] ">
        <h1
          className={`text-[var(--pumpkin)] text-center text-3xl m-4 text-nowrap`}
        >
          {image && image.title}
        </h1>
      </div>
      <div className=" rounded-3xl h-[70%] w-[100%] flex flex-row justify-between">
        <MiniBox
          content={
            <div className="flex flex-col justify-between items-center h-[100%] w-[100%]">
              <div className="flex flex-col justify-center items-center h-[85%] w-[80%]">
                {image && (
                  <div className="flex justify-between items-center max-h-[80%] w-[85%] rounded-3xl">
                    <Image
                      alt={image.title}
                      src={image.path}
                      width={600}
                      height={80}
                    ></Image>
                    <div className="bg-red-600 h-40 w-40">
                      {image.description}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center h-[15%] w-[80%] bg-red-600">
                <ul className="flex flex-row justify-center items-center gap-2 ">
                  {images.map((item, index) => (
                    <li key={index}>
                      <div
                        className="border-solid border-[0.2rem] border-[var(--maize)] rounded-xl hover:bg-[var(--maize)] h-20 w-20 hover:w-40"
                        onMouseOver={() => {
                          setImage(images[index]);
                        }}
                      ></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
          h={100}
          w={100}
        ></MiniBox>
      </div>
    </>
  );
}

function ThirdBox(): ReactNode {
  return (
    <>
      <Title title="Marca"></Title>
      <MiniBox
        content={
          <div className="flex justify-center items-center h-[80%] w-[80%] bg-white rounded-3xl">
            <Image
              alt="Descrição da marca de George Vieira"
              src={"../brand-explanation.svg"}
              width={2000}
              height={1000}
            ></Image>
          </div>
        }
        h={80}
        w={100}
      ></MiniBox>
    </>
  );
}
