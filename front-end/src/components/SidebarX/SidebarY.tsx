import { FaBuilding } from 'react-icons/fa'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import logo from '../../assets/logo.png'
import Badge from '../Badge/Badge'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:text-black hover:no-underline active:text-black rounded-sm text-white"

export default function SidebarY() {

  const [open, setOpen] =  useState(true)

  // fechar no icone "X"
  const handleOnClose = (e) => {
    if(e.target.id === "container")
    
    setOpen(false)
  };

  return (
    <div className={`${open ? "relative" : "hidden" } bg-white  w-60 p-3 flex flex-col text-black`}>
      
      <FaTimes
        className="absolute right-3 cursor-pointer"
        id="container"
        onClick={handleOnClose}
      />

      <div className="flex items-center justify-center gap-2 px-1 py-3">
        <img src={logo} width="135" height="100" />
      </div>

      <div className="flex items-center justify-center gap-2 px-1 py-3">
        <p> <Badge variant="secondary"/> Saulo (SidebarY) </p>
      </div>


      <div className="flex-1 py-8 flex flex-col gap-8.5"> 
        {DASHBOARD_SIDEBAR_LINKS.map((item) => ( 
          <div key={item.key}> 
            <SidebarLink key={item.key} item={item}/> 
          </div>
        ))}
      </div>
      
      <div className="flex flex-col gap-0.5 pr-2 border-t border-white"> 
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => ( 
          <div key={item.key}> 
            <SidebarLink key={item.key} item={item}/> 
          </div>
        ))}
      </div>

    </div>
  )
}

function SidebarLink({ item }) {

  const { pathname } = useLocation()

  return(
    <Link to={item.path} className={classnames(pathname === item.path ? 'bg-white text-orange-75' : 'text-black',linkClasses)}>
      <span className='text-xl'> {item.icon} </span>
      {item.label}
    </Link>
  )
}
