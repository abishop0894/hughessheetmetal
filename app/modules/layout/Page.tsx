


const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-hidden h-auto min-h-fit">
      {children}
    </div>
  )
}

export default Page