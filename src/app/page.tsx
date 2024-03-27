import Aside from "./components/aside";
import AsideButton from "./components/aside_button";
import Box from "./components/boxes/boxes";

export default function Home() {
  return (
    <main className="flex min-h-screen h-auto w-screen flex-col justify-between items-center  bg-gradient-to-b from-[var(--pumpkin)]  to-[var(--maize)] gap-8  overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col justify-start items-center w-[20%] mr-8">
        <Aside></Aside>
      </div>
      <div className="flex flex-col justify-center items-end h-[100%] w-[100%] pt-20 ml-2 mr-10  min-h-screen  gap-28 overflow-hidden ">
        <Box boxNum={1}></Box>
        <Box boxNum={2}></Box>
        <Box boxNum={3}></Box>
      </div>
    </main>
  );
}
