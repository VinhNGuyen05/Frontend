import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Menu = () => {
  const productsPerRow = 4;
  const productsPerPage = productsPerRow * 2;
  const [visibleProducts, setVisibleProducts] = useState(productsPerPage);
  const [cartQuantities, setCartQuantities] = useState(
    MenuList.map(() => 0) 
  );

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + productsPerPage);
  };

  const handleShowLess = () => {
    setVisibleProducts(productsPerPage);
  };
  const navigate = useNavigate();
  const handleProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  const handleAddToCart = (index) => {
    const newQuantities = [...cartQuantities];
    newQuantities[index] = 1; 
    setCartQuantities(newQuantities);
  };

  const handleDecreaseQuantity = (index) => {
    if (cartQuantities[index] > 0) {
      const newQuantities = [...cartQuantities];
      newQuantities[index] -= 1;
      setCartQuantities(newQuantities);
    }
  };

  const handleIncreaseQuantity = (index) => {
    const newQuantities = [...cartQuantities];
    newQuantities[index] += 1;
    setCartQuantities(newQuantities);
  };

  return (
    <Layout>
      <Container sx={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          {MenuList.slice(0, visibleProducts).map((product, index) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Paper elevation={3} style={{ padding: 16, position: "relative" }}>
                <Chip
                  label="New"
                  color="secondary"
                  style={{ position: "absolute", top: 8, left: 8 }}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => handleProductClick(product.name)}
                />
                <Typography variant="subtitle1" style={{ marginTop: 8 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.weight}
                </Typography>
                <Typography variant="h6" style={{ marginTop: 8 }}>
                  ${product.price.toFixed(2)}
                </Typography>
                {cartQuantities[index] > 0 ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginTop={2}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{
                        color: "green",
                        borderColor: "green",
                      }}
                      onClick={() => handleDecreaseQuantity(index)}
                    >
                      -
                    </Button>
                    <Typography
                      variant="body1"
                      style={{ margin: "0 16px", color: "green" }}
                    >
                      {cartQuantities[index]}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{
                        color: "green",
                        borderColor: "green",
                      }}
                      onClick={() => handleIncreaseQuantity(index)}
                    >
                      +
                    </Button>
                  </Box>
                ) : (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleAddToCart(index)}
                    startIcon={<ShoppingCartIcon />}
                    style={{
                      marginTop: 8,
                      marginLeft: "50px",
                      color: "green",
                      borderColor: "green",
                      backgroundColor: "white",
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
        {visibleProducts < MenuList.length ? (
          <Box textAlign="center" marginTop={2}>
            {visibleProducts <= productsPerPage ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleShowMore}
                style={{
                  color: "green",
                  borderColor: "green",
                  backgroundColor: "white",
                }}
              >
                Show More
              </Button>
            ) : (
              <React.Fragment>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleShowLess}
                  style={{
                    marginRight: 8,
                    color: "green",
                    borderColor: "green",
                    backgroundColor: "white",
                  }}
                >
                  Show Less
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleShowMore}
                  style={{
                    color: "green",
                    borderColor: "green",
                    backgroundColor: "white",
                  }}
                >
                  Show More
                </Button>
              </React.Fragment>
            )}
          </Box>
        ) : null}
      </Container>
    </Layout>
  );
};

export default Menu;
