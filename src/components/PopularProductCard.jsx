import { star } from '../assets/icons'
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full  ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <img src={star} alt="Rating" width={24} height={24} />
        <p className="font-mono text-xl leading-normal text-[#6D6D6D]">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-mono">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-serif  text-[#FF6452] text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard