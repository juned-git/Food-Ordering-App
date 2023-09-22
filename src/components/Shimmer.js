const Shimmer = () => {
  return (
    <div className="mt-5  ">
      <div className="h-12 bg-gray-300 my-3"></div>
    <div className="flex flex-wrap justify-between mx-5">
      {Array(10)
        .fill("")
        .map((el, index) => (
          <div className="w-60 bg-gray-300 h-60 mt-3 rounded-lg" key={index}></div>
        ))}
    </div></div>
  );
};
export default Shimmer;
