import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const Picture = ({ picture, onBuy }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={picture.image}
        alt={picture.name}
      />
      <CardContent>
        <Typography variant="h5">{picture.name}</Typography>
        <Typography variant="h6">${picture.price}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onBuy(picture)}
        >
          Buy
        </Button>
      </CardContent>
    </Card>
  );
};

export default Picture;
