"use client";
import Image from "next/image";
import {userStore, womens} from '../../../../stores/store'

export const FirstBet = () => {
  type GameStatus = {
    id: number;
    name: string;
  }
  const topPick = userStore((state) => state.topPick);
  return (
    <div className="px-[18px] pt-6">
      <h1 className="text-[19px] text-[#FFFFFF] font-bold leading-[22.99px] text-left">
        Top Pick
      </h1>
      <div className="pt-[15px] border items-center border-solid border-[#FFFFFF80] pb-[10px] rounded-[20px] mt-[16px] flex gap-x-2 pl-[16px] pr-[25px]">
        <div>
          <Image
            src={"/avatars/avatar-" + topPick + ".png"}
            alt="avatar"
            width={69}
            height={69}
            className=" rounded-full"
          />
        </div>
        <div>
          <h2 className="text-base text-[#FFFFFF] font-medium leading-[19.2px] tracking-[-0.40799999237060547px] text-left">
            You chose {womens.at(topPick-1)?.name} to win the tournament.
          </h2>
          <p className="text-[#FCFCFC] mt-[10px] text-xs font-normal leading-[14.4px] tracking-[-0.40799999237060547px] text-left">
            If your project wins, you will get{" "}
            <span className="font-[600]">1,000,000</span> points.
          </p>
        </div>
      </div>
    </div>
  );
};
