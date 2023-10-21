// import React from 'react';
// import { Box, Typography, Button, Grid, Paper, Chip } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { MenuList } from "../../data/data";// Import danh sách sản phẩm từ nơi bạn lưu trữ

// const SlideShow = () => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//       slidesToSlide: 1, // Cứ mỗi lần slide một sản phẩm
//     },
//   };

//   return (
//     <Box bgcolor="#4caf50" minHeight="50vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{marginTop: "50px"}}>
//       <Box
//         bgcolor="#ffffff"
//         width="70%"
//         height="40vh"
//         position="relative"
//         overflow="hidden"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//       >
//         <Box bgcolor="#4caf50" height="4px" width="100%" position="absolute" top="0"></Box>
//         <Typography variant="h4" mt={4} mb={2}>
//           Các Sản Phẩm
//         </Typography>
//         <Carousel responsive={responsive}>

//         </Carousel>
//         <Box position="absolute" bottom="16px">
//           <Link to="/explore">
//             <Button variant="contained" color="success">
//               Khám Phá Thêm
//             </Button>
//           </Link>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default SlideShow;
