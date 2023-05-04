import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const ShoppingCart = ({ cart, onRemove, onPay }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Typography variant="h4">Shopping Cart</Typography>
      {cart.length === 0 && <Typography>No items in cart</Typography>}
      {cart.map((item) => (
        <Card key={item.name}>
          <CardMedia
            component="img"
            height="100"
            image={item.image}
            alt={item.name}
          />
          <CardContent>
            <Typography>{item.name}</Typography>
            <Typography>${item.price}</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onRemove(item)}
            >
              Remove
            </Button>
          </CardContent>
        </Card>
      ))}
      {cart.length > 0 && (
        <div>
          <Typography variant="h6">Total Price: ${totalPrice}</Typography>
          <Button variant="contained" color="primary" onClick={onPay}>
            Pay
          </Button>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
