import React from "react";
import { Box, Grid, Typography, TextField, Radio, RadioGroup, FormControlLabel, Button } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import { useCart } from "../../Config/CartConText";

const Checkout = () => {
  const { cart } = useCart();

  const calculateSubtotal = () => {
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
          <Grid item xs={12} md={6}>
              <Typography variant="h6">Billing Details</Typography>
              <TextField label="Shipping Address" fullWidth margin="none" />
              <TextField label="Phone Number" fullWidth margin="normal" />
              <RadioGroup aria-label="paymentMethod" name="paymentMethod">
                <FormControlLabel value="direct" control={<Radio />} label="Direct Payment" />
                <FormControlLabel value="momo" control={<Radio />} label="Momo Payment" />
              </RadioGroup>
          </Grid>
          <Grid item xs={12} md={6}>
              <Typography variant="h6">Cart Summary</Typography>
              {cart.map((product) => (
                <Typography key={product.name} variant="body2">
                  {product.name} x {product.quantity}
                </Typography>
              ))}
              <Typography variant="subtitle1">Subtotal: ${calculateSubtotal().toFixed(2)}</Typography>
              <Button variant="contained" color="primary" fullWidth>
                Place Order
              </Button>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Checkout;
