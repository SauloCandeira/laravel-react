import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../Sidebaritem/sidebaritem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  const [sidebar, setSidebar] = useState(true)

  return (
    <div className="bg-white w-60 p-3 flex flex-col text-black">
      <Container sidebar={setSidebar} className="">
      
        {/* <FaTimes onClick={closeSidebar} />   */}
        <Content>
          <Link to={'/'}> 
            <SidebarItem Icon={FaHome} Text="Dashboard" />
          </Link>
          <Link to={'/DashboardY'}> 
            <SidebarItem Icon={FaChartBar} Text="Dashboard Y" />
          </Link>
          <Link to={'/DashboardX'}> 
            <SidebarItem Icon={FaUserAlt} Text="Dashboard X" />
          </Link>


          {/* <SidebarItem Icon={FaEnvelope} Text="Relatório" />
          <SidebarItem Icon={FaRegCalendarAlt} Text="Sair" /> */}
          {/* <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
          <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
          <SidebarItem Icon={FaRegSun} Text="Settings" /> */}
        </Content>
      </Container>
    </div>
  )
}

export default Sidebar