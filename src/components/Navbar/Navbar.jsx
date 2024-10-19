import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import Link from "../Link/Link";
const Navbar = () => {

    const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="bg-yellow-200 p-6 text-black">
      
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
            open === true ? <CgClose /> :
            <SlMenu />
            
        }
      </div>

      <ul className={`md:flex gap-10 absolute md:static bg-yellow-200 px-6 duration-1000 ${open ? 'top-16' : '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
