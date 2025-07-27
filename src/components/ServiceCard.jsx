const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16 ">
      <div className="w-11 h-11 flex justify-center items-center bg-[#FF6452] rounded-full ">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-mono text-3xl leading-normal font-bold ">
        {label}
      </h3>
      <p className="mt-3 break-words font-sans text-lg leading-normal text-[#6D6D6D]">
        {subtext}
      </p>
    </div>
  );
}

export default ServiceCard