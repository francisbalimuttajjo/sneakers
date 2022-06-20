import { Button, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

export type Props = {
  qty: number;
  increment: () => void;
  decrement: () => void;
  addToCart: () => void;
};

const Cart = (props: Props) => {
  const { Title } = Typography;
  return (
    <div style={styles.container}>
      <div style={styles.btn_container}>
        <Button
          disabled={props.qty === 0}
          onClick={props.decrement}
          style={styles.btn}
        >
          <Title style={styles.sign}>-</Title>
        </Button>
        <Title style={styles.qty} level={3}>
          {props.qty}
        </Title>
        <Button onClick={props.increment} style={styles.btn}>
          <Title style={styles.sign}>+</Title>
        </Button>
      </div>
    
      <Button onClick={props.addToCart} style={styles.cart_btn}>
        <ShoppingCartOutlined style={styles.icon} />
        <Title style={styles.cart_text} level={4}>
          Add to Cart
        </Title>
      </Button>
    </div>
  );
};

export default Cart;

const styles = {
  container: {
    width: "100%",
  },
  icon: { color: "#fff", fontSize: "30px" },
  cart_text: { color: "#fff", marginLeft: "10px" },
  cart_btn: {
    width: "100%",
    backgroundColor: "#FFA64D",
    height: "50px",
    borderRadius: "7px",
    display: "flex",
    paddingLeft: "40%",
    paddingTop: "15px",
  },
  btn: {
    width: "40%",
    backgroundColor: "#FFA64D",
    height: "50px",
  },
  sign: { color: "#fff", marginTop: -5 },
  btn_container: { display: "flex", marginBottom: "20px" },
  qty: {
    color: "#FFA64D",
    width: "20%",
    marginLeft: "10%",
    marginTop: "5px",
  },
};
