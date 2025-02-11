

function App() {


  return (
    <div>
      {/* marque nav  */}
      <div className="flex bg-[#b4f079d2] justify-between items-center">
        <h1
          className="bg-[#e12454] text-white w-20 px-4 py-1 md:py-2 font-semibold"
          style={{ clipPath: "polygon(0 0, 100% 0, 84% 100%, 0% 100%)" }}
        >
          Notice
        </h1>

        <marquee direction="" className="">
          This is notice Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quibusdam est tempora, quae nisi rem quisquam nam nihil ab
          ducimus adipisci.
        </marquee>
      </div>
    </div>
  )
}

export default App
