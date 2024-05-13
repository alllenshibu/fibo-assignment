import Image from "next/image";

export default function DailyProgress() {
  return (
    <div className="w-full px-6 py-4 bg-gradient-to-r from-[#7DA7CE] to-[#0E77D9] rounded-2xl flex flex-row justify-center items-center gap-4 tracking-wide">
      <Image src="/round.png" width="50" height="50" />
      <div className="w-full h-full flex flex-col justify-center items-start">
        <p className="font-semibold">Your Daily Goal Almost Done</p>
        <p className="text-xs">4 out of 5 Completed</p>
        <div className="w-full pt-2 flex flex-col justify-center items-end text-xs">
          <div className="h-1 w-full flex flex-row justify-between items-center">
            <div className="h-full w-4/5 bg-[rgba(255,255,255,1)]"></div>
            <div className="h-full w-1/5 bg-[rgba(255,255,255,0.2)]"></div>
          </div>
          <p>80%</p>
        </div>
      </div>
    </div>
  );
}
