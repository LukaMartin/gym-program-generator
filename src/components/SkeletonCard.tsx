import Skeleton from "./Skeleton";

export default function SkeletonCard() {
  return (
    <section className="flex flex-col my-20">
        <Skeleton className="animate-pulseSlow"/>
        <Skeleton className="animate-pulseFast"/>
        <Skeleton className="animate-pulseRegular"/>
        <Skeleton className="animate-pulseFast"/>
        <Skeleton className="animate-pulseSlow"/>
        <Skeleton className="animate-pulseRegular"/>
    </section>
  )
}
