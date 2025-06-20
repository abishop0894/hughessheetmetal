import Page from "../modules/layout/Page"
import HomeHero from "../modules/components/heros/HomeHero"
import ContactForm from "../modules/components/contact/ContactForm"
import PortfolioComponent  from "../modules/components/portfolio/Portfolio"
const Portfolio = () => {
  return (
    <Page>
    <HomeHero bottomBar="Portfolio" bottomBarBg="white" bottomBarText="black" arrowColor="black" backgroundImg={"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"} />
    <PortfolioComponent />
    <ContactForm />
    </Page>
  )
}

export default Portfolio