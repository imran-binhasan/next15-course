
const DashboardLayout = ({children}) => {
  return (
    <div className="w-full bg-pink-400 grid grid-cols-12">
        {/* SIdeNAv */}
        <div className="col-span-3 border">
            <ul>Lists</ul>
        </div>
        <div className="col-span-9 border">
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout