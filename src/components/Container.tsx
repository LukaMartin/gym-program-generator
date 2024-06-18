import { ContainerProps } from "../lib/types";

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col max-w-7xl min-h-screen mx-auto">
      {children}
    </div>
  );
}
