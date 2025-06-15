import HomeHero from "./modules/components/heros/HomeHero";
import Nav from "./modules/layout/Nav";
import CtaRow from "./modules/components/cta/CtaRow";
import  HomeStats  from "./modules/components/cta/HomeStats";

export default function Home() {
  return (
    <>
      <Nav />
      <HomeHero />
      <CtaRow />
      <HomeStats />
    </>
  );
}
