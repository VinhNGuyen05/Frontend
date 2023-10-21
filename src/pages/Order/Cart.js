import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useCart } from "../../Config/CartConText";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  };

  return (
    <Layout>
    <Box p={0}>
    <div className="header">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-march-fruit-and-vegetable-watermelon-background-image_207743.jpg"
            alt="Cart"
            style={{ width: "100%", height: "40vh"}}
          />
        </div>
      <Box p={5} mb={2}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={5}>
            {/* <Paper elevation={3}> */}
              <Box p={2}>
                {/* <Typography variant="h6">Order Summary</Typography> */}
                <Divider />
                {cart.map((product) => (
                  <Box key={product.name} display="flex" alignItems="center">
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: 50, marginRight: 10, objectFit: "cover" }}
                    />
                    <Box flexGrow={1}>
                      <Typography variant="body1">{product.name}</Typography>
                      <Typography variant="body2">
                        Quantity: {product.quantity}
                      </Typography>
                    </Box>
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() => removeFromCart(product.name)}
                    >
                      <ClearIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            {/* </Paper> */}
          </Grid>
          <Grid item xs={12} md={4} alignItems={"flex-end"}>
            <Paper elevation={2}>
              <Box p={3}>
                <Typography variant="h6">Cart Totals</Typography>
                <Divider />
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body1">Subtotal:</Typography>
                  <Typography variant="body1">
                    ${calculateTotal().toFixed(2)}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Button variant="contained" color="primary" fullWidth>
                    Pre-Order
                  </Button>
                  <NavLink to={"/checkout"}>
                  <Button variant="contained" color="primary" fullWidth>
                    Checkout
                  </Button>
                  </NavLink>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </Layout>
  );
};

export default Cart;
