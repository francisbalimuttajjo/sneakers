import React from "react";
import { Typography, Avatar, Image } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import useWindowDimensions from "../others/useWindowDimensions";

type Props = {
  showDrawer: () => void;
  isDrawerOpen: boolean;
  page: string;
  data: string[];
  children: React.ReactNode;
  handleClick: (page: string) => void;
};

const LeftMenu = (props: Props) => {
  const { screen } = useWindowDimensions();
  const { isMobile, isDesktop, isTablet } = screen;
  const { Title } = Typography;

  return (
    <>
      <div
        style={
          isTablet || isMobile ? styles.container : styles.desktop_container
        }
      >
        <MenuOutlined
          onClick={props.showDrawer}
          style={isMobile || isTablet ? styles.icon : styles.list_none}
        />
        <div style={styles.sub_container}>
          <Title level={2} style={styles.title}>
            sneakers
          </Title>
          <ul style={isDesktop ? styles.list : styles.list_none}>
            {props.data.map((el, key) => (
              <li
                key={key}
                onClick={() => props.handleClick(el)}
                style={props.page === el ? styles.link_active : styles.link}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.avator_container}>
          <ShoppingCartOutlined
            onClick={props.showDrawer}
            style={styles.cart}
          />
          <Avatar
            style={{ width: "30px" }}
            src={<Image alt="img" src="https://joeschmoe.io/api/v1/random" />}
          />
        </div>
      </div>
    </>
  );
};
export default LeftMenu;

const styles = {
  container: {
    height: "50px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  desktop_container: {
    height: "100px",
    width: "80%",
    display: "flex",
    alignItems: "center",
    marginLeft: "10%",
    paddingRight: "10%",
    borderBottom: "1px solid red",
  },
  icon: {
    fontSize: "20px",
    cursor: "pointer",
  },
  link: {
    marginLeft: "20px",
    cursor: "pointer",
  },
  link_active: {
    color: "red",
    fontWeight: "bold",
    marginLeft: "20px",
    cursor: "pointer",
  },
  avator_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
    marginRight: "20px",
  },
  sub_container: { flex: 1, display: "flex" },

  list: {
    marginTop: "18px",
    listStyle: "none",
    display: "flex",
  },
  title: {
    fontWeight: "bold",
    marginLeft: "10px",
    marginTop: "7px",
  },
  list_none: { display: "none" },
  cart: { fontSize: "30px", cursor: "pointer", marginRight: "10px" },
};


export{styles}