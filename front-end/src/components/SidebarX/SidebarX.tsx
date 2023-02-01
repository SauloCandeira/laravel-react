import { FaBuilding } from 'react-icons/fa'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:text-black hover:no-underline active:text-black rounded-sm text-white"

export default function SidebarX() {

  return (
    <div className="bg-white w-60 p-3 flex flex-col text-black">
      
      <div className="flex items-center gap-2 px-1 py-3"> 
        <FaBuilding fontSize={26}/>
        <span className='text-black text-lg'> Condominio Dedicado </span>
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
