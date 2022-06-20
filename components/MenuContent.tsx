import React from "react";
import { Button, Menu } from "antd";
import styles from "../styles/Home.module.css";

const data = ["Home", "Movies", "Series", "Bookmarked"];

type Props = {
  handleClick: (page: string) => void;
  page: string;
};

const MenuContent = (props: Props) => {
  return (
    <Menu mode="vertical" className={styles.menu}>
      {data.map((el, key) => (
        <Menu.Item key={key} style={{ backgroundColor: "#201C40" }}>
          <Button
            onClick={() => props.handleClick(el)}
            style={{
              ...btn_styles.btn,
              color: props.page === el ? "#fff" : "green",
            }}
          >
            {el}
          </Button>
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default MenuContent;

const btn_styles = {
  btn: {
    borderStyle: "none",
    width: "100%",
    backgroundColor: "#201C40",
  },
};
