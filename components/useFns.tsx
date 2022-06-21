import { Typography } from "antd";
import React from "react";
import useWindowDimensions from "../others/useWindowDimensions";

const data = ["Collections", "Men", "Women", "About Us", "Contact"];

const UseFns = () => {
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<string>(data[0]);
  const [cartQty, setCartQty] = React.useState<number>(0);
  const [qty, setQty] = React.useState<number>(1);

  const { Title } = Typography;

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

  const handleClick = (val: string) => {

    setPage(val);
    closeDrawer();
  };

  const increment = () => setQty((qty) => qty + 1);
  const decrement = () => setQty((qty) => qty - 1);
  const openCart = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);
  const removeItem = () => setCartQty(0);
  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  return {
    removeItem,
    closeModal,
    openCart,
    handleClick,
    decrement,
    increment,
    addToCart,
    isDesktop,
    cartQty,
    page,
    openDrawer,
    showDrawer,
    openModal,
    data,
    closeDrawer,
    qty,
    Title,
  };
};
export default UseFns;
