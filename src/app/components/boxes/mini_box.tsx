import { MiniBoxProps } from "../interfaces";

export default function MiniBox({ content, h, w }: MiniBoxProps) {
  return (
    <div
      className={`flex justify-center items-center h-[${h}%] w-[${w}%] bg-[var(--delft-blue)] rounded-3xl`}
    >
      {content}
    </div>
  );
}
