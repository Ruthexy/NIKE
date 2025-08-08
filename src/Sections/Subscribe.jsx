import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-w-[1440px] flex justify-between items-center max-lg:flex-col gap-10 px-6 py-10 mx-auto"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-sans font-bold">
        Sign Up for
        <span className="text-[#FF6452]"> Updates </span> & NewsLetter.
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center justify-between p-2.5 border border-[#6D6D6D] rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="flex-1 bg-transparent outline-none text-base px-4"
        />
        <Button label="Sign Up" />
      </div>
    </section>
  );
};

export default Subscribe;
