const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="menu-wrapper flex min-w-2xl min-h-96">
          <div className="menu-left flex-1 p-3 bg-orange">
            <div className="heading">
              <h2 className="title uppercase text-6xl font-bold mb-4">menu</h2>
              <p className="data-time mb-4">
                Mon to Fri
              </p>
            </div>

            <div className="menu-items border-t mt-6 first:mt-0">
              <h4 className="item-heading uppercase text-2xl font-bold mb-1">Burgers</h4>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
            </div>
            <div className="menu-items border-t mt-6 first:mt-0">
              <h4 className="item-heading uppercase text-2xl font-bold mb-1">Burgers</h4>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
              <a href="#" className="menu-item flex justify-between hover:bg-amber-200 transition-all duration-150"><span>Normal Burger</span> <span>$14</span></a>
            </div>
          </div>
          <div className="menu-right flex-2 p-3 bg-light-orange">Details</div>
        </div>
      </div>
    </>
  )
}

export default App