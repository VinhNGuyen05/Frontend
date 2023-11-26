import React from 'react'
import {
    Grid,
    Typography,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@mui/material'
import { useCart } from '../../Config/CartConText'
// import { IconButton } from '@mui/material'
// import ClearIcon from '@mui/icons-material/Clear'
// import { Link } from 'react-router-dom'

const Checkout = () => {
    const { cart } = useCart()

    const calculateTotal = () => {
        return cart.reduce((total, product) => {
            return total + product.quantity * product.price
        }, 0)
    }

    return (
        // <Box p={0}>

        //     <Box p={5} mb={2}>
        //         <Grid container spacing={10}>

        //             <Grid item xs={12} md={6}>
        //                 <Typography variant="h6">Cart Summary</Typography>
        //                 {cart.map((product) => (
        //                     <Typography key={product.name} variant="body2">
        //                         {product.name} x {product.quantity}
        //                     </Typography>
        //                 ))}
        //                 <Typography variant="subtitle1">
        //                     Subtotal: ${calculateSubtotal().toFixed(2)}
        //                 </Typography>
        //                 <Button variant="contained" color="primary" fullWidth>
        //                     Place Order
        //                 </Button>
        //             </Grid>
        //         </Grid>
        //     </Box>
        // </Box>
        <>
            <header className="header">
                <div className="container">
                    <h1 className="display-4 fw-bolder">Your cart</h1>
                </div>
            </header>

            <section className="shopping-cart bg-light py-5">
                <div className="container">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="items">
                                    {/* {cart.map((product) => (
                                        <div className="product">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <img className="img-fluid mx-auto d-block image" src={product.fruitImages[0].imageUrl} alt={product.fruitName} />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="info">
                                                        <div className="row">
                                                            <div className="col-md-5 product-name">
                                                                <div className="product-name">
                                                                    <Link to={`/detail/${product.fruitId}`}>{product.fruitName}</Link>
                                                                    <div className="product-info">
                                                                        <div>Category: <span className="value">{product.categoryFruitName}</span></div>
                                                                        <div>Origin: <span className="value">{product.originCity}</span></div>
                                                                        <div>Quantity Available: <span className="value">{product.quantityAvailable}</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 quantity">
                                                                <label for="quantity">Quantity: {product.quantity}</label>
                                                                <input
                                                                    id="quantity"
                                                                    type="number"
                                                                    value={product.quantity}
                                                                    max={product.quantityAvailable}
                                                                    className="form-control quantity-input"
                                                                // onChange={(e) => handleQuantityChange(product.fruitId, e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-md-3 price">
                                                                <span>${product.price}</span>
                                                                <IconButton
                                                                    edge="end"
                                                                    color="inherit"
                                                                    onClick={() => removeFromCart(product.fruitId)}
                                                                >
                                                                    <ClearIcon />
                                                                </IconButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))} */}
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h6">Billing Details</Typography>
                                        <TextField label="Shipping Address" fullWidth margin="none" />
                                        <TextField label="Phone Number" fullWidth margin="normal" />
                                        <RadioGroup aria-label="paymentMethod" name="paymentMethod">
                                            <FormControlLabel
                                                value="direct"
                                                control={<Radio />}
                                                label="Direct Payment"
                                            />
                                            <FormControlLabel
                                                value="momo"
                                                control={<Radio />}
                                                label="Momo Payment"
                                            />
                                        </RadioGroup>
                                    </Grid>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="summary">
                                    <h3>Summary</h3>
                                    {cart.map((product) => (
                                        <div className="summary-item"><span className="text" style={{ fontWeight: 'normal' }}>{product.fruitName} x {product.quantity}</span><span className="price">${product.price}</span></div>
                                    ))}
                                    <div className="summary-item"><span className="text">Discount</span><span className="price">$0</span></div>
                                    <div className="summary-item"><span className="text">Total</span><span className="price">${calculateTotal().toFixed(2)}</span></div>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout
