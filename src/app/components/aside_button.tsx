import { asideInterface } from "./interfaces";

export default function AsideButton({ title }: asideInterface) {
  return (
    <button
      id={title}
      className="h-24 w-36 bg-[var(--delft-blue)] hover:bg-[var(--silver-lake-blue)] flex items-center justify-center text-[var(--pumpkin)] hover:text-[var(--rich-black)] font-light hover:font-medium  rounded-md text-xl"
    >
      <label htmlFor={title} className="">
        {title}
      </label>
    </button>
  );
}
