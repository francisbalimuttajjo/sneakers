import { Typography, Avatar, Image, Carousel, List, Card } from "antd";
import React from "react";
import Cart, { Props } from "./Cart";
import useWindowDimensions from "../others/useWindowDimensions";

const PRODUCT_IMAGES = [1, 2, 3, 4];

const Body = (props: Props) => {
  const { screen, width } = useWindowDimensions();
  const [displayImage, setDisplayImage] = React.useState(2);
  const { isDesktop } = screen;
  const { Title, Paragraph } = Typography;
  return (
    <div style={isDesktop ? styles.container : styles.mobile}>
      <div style={isDesktop ? styles.hide : styles.corousel}>
        <Carousel>
          {PRODUCT_IMAGES.map((image, key) => (
            <Image
              key={key}
              alt="img"
              src={`/images/product-${image}.jpg`}
              width={width}
            />
          ))}
        </Carousel>
      </div>
      <div style={isDesktop ? styles.display : styles.hide}>
        <Image
          alt="img"
          style={styles.image}
          src={`/images/product-${displayImage}.jpg`}
          width={"80%"}
        />

        <div style={styles.list}>
          {PRODUCT_IMAGES.map((image, key) => (
            <Card
              hoverable
              key={key}
              onClick={() => setDisplayImage(image)}
              cover={<img alt="img" src={` /images/sm-${image}.jpg`} />}
              style={{
                width: displayImage === image ? "80px" : "70px",
                ...styles.card,
              }}
            />
          ))}
        </div>
      </div>
      <div style={styles.info_container}>
        <Title level={5} style={styles.heading}>
          SNEAKER COMPANY
        </Title>
        <Title level={isDesktop ? 1 : 5}>Fall Limited Edition Sneakers</Title>
        <Paragraph>
          These low-profile sneakers are your perfect casual wear
          companion.Featuring a durable rubber outer sole,they&#39;ll withstand
          everything the weather can offer.
        </Paragraph>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flex: 1 }}>
            <Title level={1}>&#x24;125.00</Title>
            <div style={styles.discount_container}>
              <Title style={styles.discount} level={5}>
                50%
              </Title>
            </div>
          </div>

          <Title level={4} style={styles.original_price}>
            &#x24;250.00
          </Title>
        </div>
        <Cart
          qty={props.qty}
          decrement={props.decrement}
          increment={props.increment}
          addToCart={props.addToCart}
        />
      </div>
    </div>
  );
};

export default Body;

const styles = {
  container: {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    display: "flex",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "7%",
  },
  discount_container: {
    width: "50px",
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "#FFE6CC",
    marginTop: "8px",
    marginLeft: "2px",
  },
  discount: {
    marginTop: "5px",
    marginLeft: "9px",
    color: "#FFA64D",
  },
  card: {
    marginLeft: "10px",
    borderRadius: "20px",
    height: "70px",
    border: "1px solid red",
  },
  info_container: { width: "95%", paddingLeft: "5%" },
  original_price: {
    opacity: 0.5,
    textDecoration: "line-through",
    marginTop: 0,
  },
  mobile: {
    width: "100%",
    paddingBottom: "50%",
  },
  image: { borderRadius: "15px" },
  heading: { color: "#FFAA00", marginTop: "4%" },

  hide: {
    display: "none",
  },
  display: { display: "block" },
  list: {
    marginTop: "18px",
    marginBottom: "18px",

    display: "flex",
  },
  corousel: { display: "block" },
};
