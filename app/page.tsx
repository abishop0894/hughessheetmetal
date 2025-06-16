import HomeHero from "./modules/components/heros/HomeHero";
import CtaRow from "./modules/components/cta/CtaRow";
import  HomeStats  from "./modules/components/cta/HomeStats";
import LogoCta from "./modules/components/cta/LogoCta";
import PortfolioHome from "./modules/components/cta/PortfolioHome";
import ServicesHome from "./modules/components/cta/ServicesHome";
import ContactForm from "./modules/components/contact/ContactForm";
import Page from "./modules/layout/Page";

export default function Home() {
  return (
    <Page>
      <HomeHero />
     <ServicesHome />
      <CtaRow />
      <PortfolioHome />
      <HomeStats />
      <LogoCta />
      <ContactForm />
    </Page>
  );
}
