import { useParams } from "react-router-dom";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import Layout from "./../components/Layout/Layout";
import { MenuList } from "../data/data";

const ProductDetail = () => {
  const { productName } = useParams();
  const product = MenuList.find((item) => item.name === productName);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  // Chuyển đổi thành mảng nếu là chuỗi
  const thumbnailImages = Array.isArray(product.image)
    ? product.image
    : [product.image];

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Layout>
    <Container sx={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {/* Ảnh lớn */}
          <img
            src={thumbnailImages[currentImageIndex]}
            alt={product.name}
            style={{ width: "100%", height: "auto" }}
          />
          {/* Ảnh nhỏ */}
          <Box mt={2}>
            {thumbnailImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                style={{
                  width: "80px",
                  height: "auto",
                  marginRight: "8px",
                  cursor: "pointer",
                  border: index === currentImageIndex ? "2px solid green" : "none",
                }}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" mb={2}>
            {product.name}
          </Typography>
          <Typography variant="h6" mb={1}>
            Giá: ${product.price.toFixed(2)}
          </Typography>
          {product.rating && (
            <Typography variant="body2" color="textSecondary" mb={2}>
              Đánh giá: {product.rating}
            </Typography>
          )}
          <Typography variant="body1" mb={2}>
            {product.description}
          </Typography>
          {product.sizes && product.sizes.length > 0 && (
            <>
              <Typography variant="h6" mb={1}>
                Kích thước:
              </Typography>
              <Box mb={2}>
                {product.sizes.map((size, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "8px", marginBottom: "8px" }}
                  >
                    {size}
                  </Button>
                ))}
              </Box>
            </>
          )}
          {product.categories && product.categories.length > 0 && (
            <>
              <Divider />
              <Box mt={2}>
                <Typography variant="h6" mb={1}>
                  Categories:
                </Typography>
                <Typography variant="body2" mb={2}>
                  {product.categories.join(", ")}
                </Typography>
              </Box>
            </>
          )}
          {product.tags && product.tags.length > 0 && (
            <>
              <Typography variant="h6" mb={1}>
                Tags:
              </Typography>
              <Typography variant="body2" mb={2}>
                {product.tags.join(", ")}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
    </Layout>
  );
};

export default ProductDetail;
