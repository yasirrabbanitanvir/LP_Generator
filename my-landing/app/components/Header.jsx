const Header = () => {
  return (
    <header className="bg-gradient-to-b from-green-400 to-cyan-500 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Website</h1>
      
        <nav className="hidden md:flex md:flex-grow md:justify-end">
          <ul className="flex flex-wrap justify-center md:justify-end">
            <li className="mr-4 md:mr-6">
              <a href="/About" className="text-white hover:text-gray-100">About</a>
            </li>
            <li>
              <a href="/Signup" className="text-white hover:text-gray-100">Sign up</a>
            </li>
          </ul>
        </nav>
      
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
           
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
