import React from "react";
import * as S from "./header.styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <S.Header>
      <ShoppingCartIcon />
      <S.ItemCountButton variant="contained" color="primary">
        2
      </S.ItemCountButton>
      <Typography variant="h5"> Items</Typography>
    </S.Header>
  );
};

export default Header;
