const AppBar = () => {
    return (
      <div className="h-full w-full">
        <header className="h-12 w-full ">
          <nav className="h-full w-full flex items-center justify-between px-4">
            {/* Logo */}
            <div>
              <h1 className=" sm:text-lg md:text-xl lg:text-1xl xl:text-2xl text-green-400 font-bold md:text-lg">ScanLabs </h1>
            </div>
            
            <div className="">
              <ul className="flex items-center text-black  font-bold mx-3 text-base sm:text-lg md:text-xl lg:text-lg xl:text-base   ">
                <li className="mx-3 ">Home</li>
                <li className="mx-3">About</li>
                <li className="mx-3 ">Contact</li>
              </ul>
            </div>
            <div>
                <button className="bg-green-400 text-white px-4 py-2 rounded-md font-bold">Login</button>
            </div>
          </nav>
        </header>
      </div>
    );
  };
  
  export default AppBar;
  