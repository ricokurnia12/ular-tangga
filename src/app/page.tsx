import Image from "next/image";
import Games from "../asset/games.jpg";
import DiceRoll from "./DiceRoll";

export default function Home() {
  const boardSize = 10; // Number of tiles along one side of the board

  return (
    <div
      className="relative min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/img/background-1.jpg')` }}
    >
      <div className="absolute inset-0 flex justify-center items-center w-[700px] h-[700px] m-auto">
        <div className="grid grid-cols-10 grid-rows-10 gap-1 w-4/5 h-4/5">
          {Array.from({ length: boardSize * boardSize }, (_, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-gray-700 shadow-sm shadow-white "
            >
              {100 - index}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center w-[700px] h-[700px] m-auto">
        <Image alt="Games" src={Games} />
      </div>
      <DiceRoll />
    </div>
  );
}
