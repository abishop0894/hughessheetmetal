import Page from "../modules/layout/Page"
import HomeHero from "../modules/components/heros/HomeHero"

const Contact = () => {
  return (
    <Page>
    <HomeHero bottomBar="Contact Us" bottomBarBg="white" bottomBarText="black" arrowColor="black" backgroundImg={"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"} />
    </Page>
  )
}

export default Contact