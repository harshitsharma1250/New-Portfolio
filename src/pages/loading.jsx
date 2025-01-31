import LoadingAnimation from "../assets/portfolio-loading.svg";

const loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#020917]">
      <img
        src={LoadingAnimation}
        alt="loading animation"
        className="w-full h-full"
      />
    </div>
  );
};

export default loading;

//#020917 bg color for loader
