import HomeHero from "./modules/components/heros/HomeHero";
import Nav from "./modules/layout/Nav";
import CtaRow from "./modules/components/cta/CtaRow";
import  HomeStats  from "./modules/components/cta/HomeStats";
import LogoCta from "./modules/components/cta/LogoCta";
import PortfolioHome from "./modules/components/cta/PortfolioHome";
import ServicesHome from "./modules/components/cta/ServicesHome";
import ContactForm from "./modules/components/contact/ContactForm";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Nav />
      <HomeHero />
     <ServicesHome />
      <CtaRow />
      <PortfolioHome />
      <HomeStats />
      <LogoCta />
      <ContactForm />
    </div>
  );
}
