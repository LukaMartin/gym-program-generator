import { BarLoader } from "react-spinners";

export default function LoadingBar() {
  return (
    <div className="my-40">
      <BarLoader
        color="#f76c6c"
        height={6}
        width={230}
        aria-label="Loading Bar" 
      />
    </div>
  );
}
