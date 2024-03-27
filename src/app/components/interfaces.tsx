import { ReactNode } from "react";
import { inter } from "../layout";

export interface miniBoxInterface {
  boxNum: number;
}
export interface asideInterface {
  title: string;
}

export interface MiniBoxProps {
  content: string | ReactNode;
  h: number;
  w: number;
}

export interface ImageProps {
  title: string;
  path: string;
  link: string;
  description: string;
}
