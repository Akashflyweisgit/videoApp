/** @format */

// import React from "react";
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import "react-pro-sidebar/dist/css/styles.css";

// const Sidebar = (props) => {
//   return (
//     <div>
//       <div className="proslider_mobile prosideclass">

//         <ProSidebar>
//           <Menu iconShape="square">
//             <MenuItem>a</MenuItem>
//             <MenuItem onClick={() => props.history.push("/home")}>
//               Dashboard
//             </MenuItem>

//             <MenuItem onClick={() => props.history.push("/student")}>
//              Students
//             </MenuItem>
//             <MenuItem onClick={() => props.history.push("/category")}>
//              Category
//             </MenuItem>
//             <MenuItem onClick={() => props.history.push("/course")}>
//              Course
//             </MenuItem>
//             <MenuItem onClick={() => props.history.push("/coupon")}>
//              Coupoun
//             </MenuItem>

//             <SubMenu title="Videos" >
//             <MenuItem onClick={() => props.history.push("/test-videos")}>
//             Test Videos
//             </MenuItem>
//           <MenuItem onClick={() => props.history.push("/premium-videos")}>
//             Premium Videos
//             </MenuItem>
//            </SubMenu>
//             <MenuItem onClick={() => props.history.push("/addon/manager")}>
//              AddOn Manager
//             </MenuItem>
//              <MenuItem onClick={() => props.history.push("/question-management")}>
//              Question Managment
//             </MenuItem>
//             <MenuItem onClick={() => props.history.push("/reports")}>
//              Reports
//             </MenuItem>

//              <SubMenu title="Reports" >
//             <MenuItem onClick={() => props.history.push("/admin-revenue")}>
//             Admin Revenue
//             </MenuItem>
//            </SubMenu>

//             <SubMenu title="Settings" >
//             <MenuItem >
//             System settings
//             </MenuItem>
//             <MenuItem >
//             Web setting
//             </MenuItem>
//             <MenuItem >
//             Payment Setting
//             </MenuItem>
//             <MenuItem >
//             Language Setting
//             </MenuItem>
//             <MenuItem >
//             Smtp Settings
//             </MenuItem>
//             <MenuItem >
//             Theme Setting
//             </MenuItem>
//             <MenuItem >
//             About
//             </MenuItem>
//            </SubMenu>
//            <MenuItem >
//             Social Media links
//             </MenuItem>
//           </Menu>
//         </ProSidebar>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

//

import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
// import "./sidebar.css";

import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = (props) => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? <GiAbstract050 /> : <SiApacheairflow />}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                active={true}
                icon={<FiHome />}
                onClick={() => props.history.push("/home")}
              >
                Home
              </MenuItem>
              <MenuItem icon={<FaList />}>Category</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <SubMenu title="Settings" icon={<BiCog />}>
                <MenuItem icon={<BiCog />}> Language</MenuItem>
                <MenuItem icon={<BiCog />}> Web</MenuItem>
              </SubMenu>
              <MenuItem icon={<RiPencilLine />}>Logo Upload</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
