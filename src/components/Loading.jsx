import { RiseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <RiseLoader color="#22c55e" size={15} />
    </div>
  );
};

export default Loading;
