"use client";

import { ReactNode, useEffect, useState } from "react";
import { ImageProps, asideInterface, miniBoxInterface } from "../interfaces";
import MiniBox from "./mini_box";
// import { inter } from "@/app/layout";
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
          <div className="flex flex-row justify-between h-[50%] w-[100%]  rounded-3xl bg-red-600">
            <div className="h-[100%] w-[40%]">
              <MiniBox content={"a"}></MiniBox>
            </div>
            <div className="h-[100%] w-[55%]">
              <MiniBox content={"a"}></MiniBox>
            </div>
          </div>
          <div className="h-[40%] w-[100%]">
            <MiniBox content={"a"}></MiniBox>
          </div>
        </div>
        <div className="h-[100%] w-[40%]">
          <MiniBox content={"a"}></MiniBox>
        </div>
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

      <div className=" rounded-3xl h-[80%] w-[100%] flex flex-row justify-between ">
        <MiniBox
          content={
            <div className="flex flex-col justify-between items-center h-[100%] w-[100%] p-4">
              <div className="flex flex-col justify-center items-center h-[100%] w-[80%]">
                {image && (
                  <div className="flex flex-col justify-between items-center h-[90%] w-[100%]">
                    <div className="flex flex-col justify-center items-center w-[100%] h-[20%] ">
                      <h1
                        className={`text-[var(--pumpkin)] text-center text-3xl m-4 text-nowrap`}
                      >
                        {image.title}
                      </h1>
                    </div>
                    <div className="flex flex-row justify-between items-center h-[90%] w-[100%] rounded-3xl p-4 border-solid border-[0.2rem] border-[var(--maize)]">
                      <div className="h-[100%] w-[50%]">
                        <Image
                          alt={image.title}
                          src={image.path}
                          width={2000}
                          height={1000}
                        ></Image>
                      </div>
                      <div className="h-[100%] w-[40%]">
                        {image.description}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center h-[15%] w-[80%] ">
                <ul className="flex flex-row justify-center items-center gap-2 ">
                  {images.map((item, index) => (
                    <li key={index}>
                      <div
                        className="border-solid border-[0.2rem] border-[var(--maize)] rounded-xl hover:bg-[var(--maize)] h-20 w-20"
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
      ></MiniBox>
    </>
  );
}
