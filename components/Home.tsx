import React from "react";
import Body from "./Body";
import Nav from "./Nav";
import Modal from "./ModalComponent";
import Drawer from "./DrawerComponent";
import useFns from "./useFns";

const Home = () => {
  const {
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
    Title,
    qty,
  } = useFns();

  return (
    <div>
      <nav>
        <Nav
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
      {page === "Collections" && (
        <Body
          qty={qty}
          increment={increment}
          decrement={decrement}
          addToCart={addToCart}
        />
      )}
      <div style={styles.container}>
        {page === "Men" && <Title>Men</Title>}
        {page === "Women" && <Title>Women</Title>}
        {page === "Contact" && <Title>Contact Us</Title>}
        {page === "About Us" && <Title>About us</Title>}
      </div>
    </div>
  );
};
export default Home;

const styles = { container: { width: "80%", marginLeft: "10%" } };
