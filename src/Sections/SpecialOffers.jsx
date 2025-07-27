import { offer } from '../assets/images';
import Button from "../components/Button";
import { arrowRight } from '../assets/icons';

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-w-[1440px]">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg ">
          <span className="text-[#FF6452] ">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg font-mono font-semibold text-[#6D6D6D] text-lg leading-7 ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparallel values that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg font-mono font-semibold text-[#6D6D6D] text-lg leading-7 ">
          Navigate a realm of possibilities designed to fulfil your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-[#6D6D6D]"
            textColor="text-[#6D6D6D]"
            
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers