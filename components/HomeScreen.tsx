import React from "react";
import { Button, Menu } from "antd";
import Drawer from "./DrawerComponent";
import LeftMenu from "./LeftMenu";

import MenuContent from "./MenuContent";
import useWindowDimensions from "../others/useWindowDimensions";

const data = ["Collections", "Men", "Women", "About Us ", "Contact"];

const Navbar = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [page, setPage] = React.useState(data[0]);
  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);
  const { width, height, screen } = useWindowDimensions();
  const { isDesktop } = screen;

  const handleClick = (val: string) => {
    setPage(val);
    closeDrawer();
  };

  return (
    <div>
      <nav>
        <LeftMenu
          showDrawer={openDrawer}
          isDrawerOpen={showDrawer}
          data={data}
          page={page}
          handleClick={handleClick}
        >
          <MenuContent handleClick={handleClick} page={page} />
        </LeftMenu>
        <Drawer
          closeDrawer={closeDrawer}
          showDrawer={showDrawer}
          isDesktop={isDesktop}
          data={data}
          page={page}
          handleClick={handleClick}
        />
      </nav>
    </div>
  );
};
export default Navbar;
