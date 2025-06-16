import Nav from "./Nav"
import Footer from "./Footer"


const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-hidden h-auto min-h-fit">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Page