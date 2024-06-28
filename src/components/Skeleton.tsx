import { twMerge } from "tailwind-merge";

type SkeletonProps = {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={twMerge("rounded-md bg-white/5 mb-4", className)}/>
  )
}
