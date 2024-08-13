import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close, logo } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle,setToggle]=useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex py-5 fixed top-0 z-20 items-center bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain bg-primary"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Rahul Mijar <span className="hidden sm:inline-block">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none sm:flex hidden flex-row gap-10 ">
          {navLinks.map((item) => (
            <li
            onClick={()=>setActive(item.title)}
              key={item.id}
              className={`${
                active === item.title ? "text-white" : "text-secondary"
              }`}

            >
              <a href={`#${item.id}`}>
              {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={!toggle?menu:close} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>setToggle(!toggle)}/>
          <div className={`${toggle?"flex":"hidden"} p-6 absolute black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex  flex-col gap-4 justify-end items-start ">
          {navLinks.map((item) => (
            <li
              onClick={()=>{setToggle(!toggle); setActive("");}}
              to={`#${item.id}`}
              key={item.id}
              className={`${
                active === item.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px] hover:text-white`}
            >
              <a href="">
              {item.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
