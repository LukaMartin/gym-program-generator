import { twMerge } from "tailwind-merge";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={twMerge(
        "md:text-3xl lg:text-4xl xl:text-5xl font-semibold pb-2",
        className
      )}
    >
      {children}
    </h1>
  );
}
