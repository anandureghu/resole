import { headerLogo } from "../assets/images";
import { moon, sun } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => {
            return (
              <li
                key={link.label}
                className="hover:border-b-2 hover:border-b-coral-red"
              >
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-500"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div
          onClick={toggleTheme}
          className="max-xl:dark:bg-blue-400 max-xl:bg-orange-200 p-2 rounded-full"
        >
          {darkTheme ? (
            <img src={moon} alt="theme" width={25} height={25} />
          ) : (
            <img src={sun} alt="theme" width={25} height={25} className="" />
          )}
        </div>
        {/* TODO: implement hamberger navigations */}
        {/* <div>
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div> */}
      </nav>
    </header>
  );
};

export default Nav;
