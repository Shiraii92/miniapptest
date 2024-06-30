"use client";
import { HeartIcon } from "@/icons";
import styles from "./vote-button.module.css";
import { Coin } from "@/common";
// import { Props } from "../vote-button/types";
import { useEffect, useState } from "react";
import { userStore } from '../../../../../../stores/store';

type Props = {
  womenId: number,
}

export const VoteButton = ({ womenId }: Props) => {
  const [click, setClick] = useState(false);
  let points = userStore((state) => state.points)
  const addPoint = userStore((state) => state.addPoint);
  const addVote = userStore((state) => state.addVote);
  const username = userStore((state) => state.username);

  useEffect(() => {
    if (click) {
      const timer = setTimeout(() => {
        setClick(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [click]);

  const handleVote = async () => {
    try {
      const response = await fetch("https://miniapptest-backend2.vercel.app/user/addVote", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          womenId: womenId,
          username: username,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      addPoint(points++);  // assuming the response returns the new points value
      addVote(womenId); // assuming the response returns necessary vote information
    } catch (error) {
      console.error('There was a problem with your vote operation:', error);
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target instanceof Element && e.target.closest(`.${styles.vote_button_bg}`)) {
          handleVote();
          setClick(true);
        }
      }}
      className={`${styles.vote_button_bg} flex flex-col justify-center items-center w-[40px] cursor-pointer h-[40px] absolute top-[-20px] right-[-20px] z-[1000] rounded-full `}
    >
      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
      <div className="relative flex justify-center items-center flex-col">
        <HeartIcon className="w-[18px] h-[17px]" />
        <p className="text-[#FCFCFC] text-[13px] font-medium leading-3 tracking-[-0.40799999237060547px] text-center">
          vote
        </p>
        <Coin
          coin={1}
          className={`absolute opacity-0 transition-all duration-200 ${
            click ? styles.clicked : ""
          }`}
        />
      </div>
    </div>
  );
};
