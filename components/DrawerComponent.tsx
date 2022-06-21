import { Drawer, List } from "antd";
import { styles } from "./Nav"

type Props = {
  closeDrawer: () => void;
  showDrawer: boolean;
  isDesktop: boolean;
  data: string[];
  page: string;
  handleClick: (page: string) => void;
};

const DrawerComponent = (props: Props) => {
  return (
    <Drawer
      bodyStyle={{ backgroundColor: "#fff" }}
      placement="left"
      closable={true}
      onClose={props.closeDrawer}
      visible={props.showDrawer && !props.isDesktop}
      width={200}
    >
      <List
        bordered={false}
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item
            onClick={() => props.handleClick(item)}
            style={props.page === item ? styles.link_active : styles.link_inactive}
          >
            {item}
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default DrawerComponent;
