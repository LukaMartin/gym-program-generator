import { twMerge } from "tailwind-merge";

type SkeletonProps = {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={twMerge("w-[330px] md:w-[700px] h-[30px] md:h-[50px] rounded-md bg-white/5 mb-4 animate-pulse", className)}/>
  )
}
