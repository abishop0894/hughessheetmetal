import HomeHero from "./modules/components/heros/HomeHero";
import CtaRow from "./modules/components/cta/CtaRow";
import  HomeStats  from "./modules/components/cta/HomeStats";
import LogoCta from "./modules/components/cta/LogoCta";
import PortfolioHome from "./modules/components/cta/PortfolioHome";
import ServicesHome from "./modules/components/cta/ServicesHome";
import ContactForm from "./modules/components/contact/ContactForm";
import Page from "./modules/layout/Page";
import ComingSoonPage from "./modules/components/coming-soon/ComingSoonComp";

export default function Home() {
  return (
    process.env.NEXT_PUBLIC_PROJECT_STATE === "development" ? <ComingSoonPage /> : <Page>
      <HomeHero />
       <HomeStats />
     <ServicesHome />
      <CtaRow />
      <PortfolioHome />
     
      <LogoCta />
      <ContactForm />
    </Page>
  
  );
}
