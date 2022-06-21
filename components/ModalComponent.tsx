import { Modal, Typography, Image, Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";

type Props = {
  openModal: boolean;
  onCancel: () => void;
  cartQty: number;
  removeItem: () => void;
  handleCheckout: () => void;
};
const ModalComponent = (props: Props) => {
  const { Title, Text } = Typography;
  const PRICE = 125.0;
  const TOTAL = PRICE * props.cartQty;

  return (
    <Modal
      width={420}
      title="Cart"
      visible={props.openModal}
      closable
      onCancel={props.onCancel}
      onOk={props.onCancel}
    >
      {props.cartQty < 1 ? (
        <Title level={5}>Your Cart is Empty</Title>
      ) : (
        <>
          <div style={styles.container}>
            <Image alt="img" src={` /images/sm-1.jpg`} style={styles.image} />
            <div style={{ flex: 1 }}>
              <Title level={5} style={{ marginLeft: "10px" }}>
                Autom Limited Edition...
              </Title>
              <Text style={styles.price}>
                &#x24;{`${PRICE} * ${props.cartQty}`}&nbsp;
              </Text>
              <span>
                <Text style={styles.price}>&#x24;{TOTAL}</Text>
              </span>
            </div>
            <div style={styles.icon} onClick={props.removeItem}>
              <DeleteFilled />
            </div>
          </div>
          <Button onClick={props.handleCheckout} style={styles.btn}>
            <Title level={3} style={{ color: "#fff" }}>
              Checkout
            </Title>
          </Button>
        </>
      )}
    </Modal>
  );
};
export default ModalComponent;
const styles = {
  total: { fontSize: "18px", fontWeight: 900 },
  price: { marginLeft: "10px", fontSize: "18px" },
  btn: {
    width: "90%",
    backgroundColor: "#FFA64D",
    height: "60px",
    borderRadius: "7px",
    display: "flex",
    marginLeft: "5%",
    paddingTop: "15px",
    marginTop: "20px",
    paddingLeft: "30%",
  },
  container: {
    display: "flex",
    width: "90%",
    marginLeft: "5%",
  },
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "7px",
  },
  icon: {
    fontSize: "20px",
    // right: "30px",
    // position: "absolute",
    marginTop: "20px",
    opacity: 0.5,
    cursor: "pointer",
  },
};
