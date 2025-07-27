import {
  Hero,PopularProducts,SuperQuality,Services,SpecialOffers,CustomerReviews,Footer,Subscribe,
} from "./Sections";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className=" xl:sm:pl-16 pl-8 1440px-[sm:pr-16 pr-8] sm:pb-24 pb-12">
      <Hero />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <PopularProducts />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SuperQuality />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12-x py-10">
      <Services />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SpecialOffers />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12 bg-[#F5F6FF]">
      <CustomerReviews />
    </section>
    <section className=" sm:px-16 px-8 sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black sm:px-16 px-8 sm:pt-24 pt-12 pb-8 ">
      <Footer />
    </section>
  </main>
);

export default App;
