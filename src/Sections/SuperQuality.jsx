import Button from '../components/Button';
import { shoe8 } from '../assets/images';
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-w-[1440px] "
    >
      <div className="flex flex-1/2 flex-col ">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg ">
          We provide you
          <span className="text-[#FF6452] ">Super</span>
          <span className="text-[#FF6452] ">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg font-mono font-semibold text-[#6D6D6D] text-lg leading-7 ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality , innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg font-mono font-semibold text-[#6D6D6D] text-lg leading-7 ">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1/2 flex justify-center items-center ">
        <img 
        src={shoe8}
        alt={shoe8}
        width={520}
        height={522}
        className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality