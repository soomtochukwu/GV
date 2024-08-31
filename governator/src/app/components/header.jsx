const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto px-3 py-2">
      <h1>logo</h1>
      <nav className=" bg-slate-400 text-pretty dropdown dropdown-left">
        <div tabIndex={0} className="btn" role="button">
          button
        </div>
        <ul tabIndex={0} className="flex gap-3 text-black dropdown dropdown-content  ">
          <li className="">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
