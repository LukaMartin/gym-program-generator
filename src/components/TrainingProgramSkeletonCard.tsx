import Skeleton from "./Skeleton";

export default function TrainingProgramSkeletonCard() {

  const skeletonStyles = "w-[330px] md:w-[700px] h-[30px] md:h-[50px]"
  return (
    <section className="flex flex-col my-20">
        <Skeleton className={`${skeletonStyles} animate-pulseSlow`}/>
        <Skeleton className={`${skeletonStyles} animate-pulseFast`}/>
        <Skeleton className={`${skeletonStyles} animate-pulseRegular`}/>
        <Skeleton className={`${skeletonStyles} animate-pulseFast`}/>
        <Skeleton className={`${skeletonStyles} animate-pulseSlow`}/>
        <Skeleton className={`${skeletonStyles} animate-pulseRegular`}/>
    </section>
  )
}
