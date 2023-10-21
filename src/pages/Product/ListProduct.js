import React, { useState } from "react";
import { Grid, Paper, Typography, Button, Chip, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MenuList } from "../../data/data";
import { useCart } from "../../Config/CartConText";

const ProductList = () => {
  const productsPerRow = 4;
  const productsPerPage = productsPerRow * 2;
  const [visibleProducts, setVisibleProducts] = useState(productsPerPage);
  const { addToCart, cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + productsPerPage);
  };

  const handleShowLess = () => {
    setVisibleProducts(productsPerPage);
  };
  const handleDecreaseQuantity = (productName) => {
    const existingProduct = cart.find((item) => item.name === productName);
    if (existingProduct && existingProduct.quantity > 1) {
      decreaseQuantity(productName); // Gọi decreaseQuantity từ context
    } else {
      removeFromCart(productName);
    }
  };
  
  return (
    <Box sx={{ paddingLeft: "50px", paddingTop: "10px", paddingRight: "50px" }}>
      <Box flex={2} padding={4}>
        <Typography
          color="black"
          mg={10}
          align="center"
          fontSize="30px"
          fontWeight="bold"
        >
          Feature Product
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {MenuList.slice(0, visibleProducts).map((product, index) => (
          <Grid item key={product.name} xs={12} sm={6} md={3}>
            <Paper elevation={3} style={{ padding: 35, position: "relative" }}>
              <Chip
                label="New"
                color="secondary"
                style={{ position: "absolute", top: 8, left: 8 }}
              />
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: 240, objectFit: "cover" }}
              />
              <Typography variant="subtitle1" style={{ marginTop: 8 }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.weight}
              </Typography>
              <Typography variant="h6" style={{ marginTop: 8 }}>
                $
                {product.price !== undefined ? product.price.toFixed(2) : "N/A"}
              </Typography>
              {cart.some((item) => item.name === product.name) ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  marginTop={3}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{
                      color: "green",
                      borderColor: "green",
                    }}
                    onClick={() => handleDecreaseQuantity(product.name)}
                  >
                    -
                  </Button>
                  <Typography
                    variant="body1"
                    style={{ margin: "0 16px", color: "green" }}
                  >
                    {cart.find((item) => item.name === product.name).quantity}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{
                      color: "green",
                      borderColor: "green",
                    }}
                    onClick={() => increaseQuantity(product.name)}
                  >
                    +
                  </Button>
                </Box>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<ShoppingCartIcon />}
                  style={{
                    marginTop: 20,
                    marginLeft: "50px",
                    color: "green",
                    borderColor: "green",
                    backgroundColor: "white",
                  }}
                  onClick={() => addToCart(product)}
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
    </Box>
  );
};

export default ProductList;
