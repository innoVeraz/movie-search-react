export const NavBar = () => {
  return (
    <section className="flex items-center h-20 shadow-md inset-80">
      <div className="max-w-md mx-auto">
        <nav className="flex justify-end">
          <ul className="flex gap-7">
            <li className="">Login</li>
            <li className="">About</li>
            <li className="">Contact</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
