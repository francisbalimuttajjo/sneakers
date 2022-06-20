import React from "react";
import { Button } from "antd";
import Modal from "./ModalComponent";
import Body from "./Body";
import LeftMenu from "./LeftMenu";
import Drawer from "./DrawerComponent";

import useWindowDimensions from "../others/useWindowDimensions";

const data = ["Collections", "Men", "Women", "About Us ", "Contact"];

const Navbar = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [page, setPage] = React.useState(data[0]);
  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);
  const [qty, setQty] = React.useState(1);
  const [cartQty, setCartQty] = React.useState(0);
  const { screen } = useWindowDimensions();
  const { isDesktop } = screen;
  const addToCart = () => {
    if (qty < 1) {
      alert("You cant buy O items");
      return;
    }
    setCartQty((cartQty) => cartQty + qty);
    setQty(0);
  };
  const increment = () => setQty((qty) => qty + 1);
  const decrement = () => setQty((qty) => qty - 1);
  const handleClick = (val: string) => {
    setPage(val);
    closeDrawer();
  };

  const openCart = () => setOpenModal(true);

  const closeModal = () => setOpenModal(false);
  const removeItem = () => setCartQty(0);

  return (
    <div>
      <nav>
        <LeftMenu
          qty={cartQty}
          showDrawer={openDrawer}
          isDrawerOpen={showDrawer}
          data={data}
          page={page}
          handleClick={handleClick}
          openCart={openCart}
        />

        <Drawer
          closeDrawer={closeDrawer}
          showDrawer={showDrawer}
          isDesktop={isDesktop}
          data={data}
          page={page}
          handleClick={handleClick}
        />
      </nav>
      <Modal
        openModal={openModal}
        onCancel={closeModal}
        cartQty={cartQty}
        removeItem={removeItem}
      />
      <Body
        qty={qty}
        increment={increment}
        decrement={decrement}
        addToCart={addToCart}
      />
    </div>
  );
};
export default Navbar;
