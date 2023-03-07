import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import logo from '../../assets/logo.png'
import Badge from '../Badge/Badge'


const linkClasses = "flex items-center font-light hover:bg-white hover:text-black hover:no-underline active:text-black rounded-sm text-white"

const Home = () => {
  
    const menus = [
    { key: 'dashboard', label: 'Dashboard', name: "dashboard", link: "/", path: '/', icon: MdOutlineDashboard },
    { key: 'dashboard Y', label: 'Dashboard Y', name: "dashboard Y", link: "/dashboardY", path: '/dashboardY', icon: AiOutlineUser },

    // { name: "messages", link: "/", icon: FiMessageSquare },
    // { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    // { name: "File Manager", link: "/", icon: FiFolder },
    // { name: "Cart", link: "/", icon: FiShoppingCart },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    // { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-white min-h-screen ${
          open ? "w-60" : "w-16"
        } duration-500 text-black px-4`}
      >
        
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className={`${open ? "relative" : "hidden"}`}>
            <div className="flex items-center justify-center gap-2 px-1 py-3">
                <img src={logo} width="135" height="100" />
            </div>

            <div className="flex items-center justify-center gap-2 px-1 py-3">
                <p> <Badge variant="secondary"/> Saulo (SidebarZ) </p>
            </div>
        </div>

        <div className="mt-4 flex flex-col gap-0 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-2 font-medium p-2 hover:bg-white rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {/* {menu?.name} */}
                <div key={menu.key}> 
                    <SidebarLink key={menu.key} item={menu}/> 
                </div>
              
              </h2>
              
              
              <h2
                className={`${
                  open && "hidden"
                } absolute z-10 left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {/* {menu?.name} */}
                <div key={menu.key}> 
                    <SidebarLink key={menu.key} item={menu}/> 
                </div>

              
              </h2>

            </Link>
          ))}
        </div>
      </div>
      {/* <div className="m-3 text-xl text-gray-900 font-semibold">
        REACT TAILWIND
      </div> */}
    </section>
  );
};


function SidebarLink({ item }) {

    const { pathname } = useLocation()

    return(
        <Link to={item.path} className={classnames(pathname === item.path ? 'bg-white text-orange-75' : 'text-black',linkClasses)}>
            <span className='text-xl'> 
                {/* {React.createElement(item?.icon, { size: "16"})} */}
            </span>
            {item.label}
        </Link>
    )
}

export default Home;