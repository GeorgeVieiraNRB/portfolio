import { MiniBoxProps } from "../interfaces";

export default function MiniBox({ content }: MiniBoxProps) {
  return (
    <div
      className={`flex justify-center items-center h-[${100}%] w-[${100}%] bg-[var(--delft-blue)] rounded-3xl`}
    >
      {content}
    </div>
  );
}
