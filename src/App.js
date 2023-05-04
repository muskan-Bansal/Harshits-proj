import React, { useState } from "react";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography
} from "@material-ui/core";
import Picture from "./Picture";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  const [pictures, setPictures] = useState([
    {
      name: "Iris",
      price: 10,
      image: require("./Components/flower1.jpg"),
      sold: false
    },
    {
      name: "Rose",
      price: 15,
      image: require("./Components/flower2.jpg"),
      sold: false
    },
    {
      name: "Dhalia",
      price: 20,
      image: require("./Components/flower3.jpg"),
      sold: false
    },
    {
      name: "Chrysanthemus",
      price: 20,
      image: require("./Components/flower4.jpg"),
      sold: false
    },
    {
      name: "Daisy",
      price: 20,
      image: require("./Components/flower5.jpg"),
      sold: false
    },
    {
      name: "Lily",
      price: 20,
      image: require("./Components/flower6.jpg"),
      sold: false
    },
    {
      name: "Daffodil",
      price: 20,
      image: require("./Components/flower7.jpg"),
      sold: false
    },
    {
      name: "Tulip",
      price: 20,
      image: require("./Components/flower8.jpg"),
      sold: false
    },
    {
      name: "Marigold",
      price: 20,
      image: require("./Components/flower9.jpg"),
      sold: false
    }
  ]);
  const [cart, setCart] = useState([]);

  const handleBuy = (picture) => {
    setCart([...cart, picture]);
    const updatedPictures = pictures.map((p) =>
      p.name === picture.name ? { ...p, sold: true } : p
    );
    setPictures(updatedPictures);
  };

  const handleRemove = (picture) => {
    setCart(cart.filter((item) => item.name !== picture.name));
    const updatedPictures = pictures.map((p) =>
      p.name === picture.name ? { ...p, sold: false } : p
    );
    setPictures(updatedPictures);
  };

  const handlePay = () => {
    const updatedPictures = pictures.filter((p) => !p.sold);
    setPictures(updatedPictures);
    setCart([]);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Picture Store</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Select Pictures
        </Typography>
        <Grid container spacing={3}>
          {pictures.map((picture) =>
            picture.sold ? null : (
              <Grid item xs={12} sm={6} md={4} lg={3} key={picture.name}>
                <Picture picture={picture} onBuy={handleBuy} />
              </Grid>
            )
          )}
        </Grid>
        <ShoppingCart cart={cart} onRemove={handleRemove} onPay={handlePay} />
      </Container>
    </>
  );
};

export default App;
