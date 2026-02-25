// import React from 'react';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const AutoSlider = () => {
//   const sliderSettings = {
//     autoplay: true,
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };


//   const images = [
//     '/images/k1.jpg',
//     '/images/k2.jpg',
//     '/images/k3.jpg',
//     '/images/k4.jpg',
//     '/images/k5.jpg',
//     '/images/k6.jpg',
//     '/images/k7.jpg',
//     '/images/k8.jpg',
//     '/images/k9.jpg',
//     '/images/k10.jpg',
//     '/images/k11.jpg',
//     '/images/k12.jpg',
//     '/images/k13.jpg',
   
    
//   ];

//   const containerStyle = {
//     width: '90%',
//     margin: '0 auto',
//     padding: '10px', // Added padding for the frame effect
//     border: '5px solid #D3D3D3', // Light gray color border // Gold color border for a devotional feel
//     borderRadius: '15px', // Rounded corners
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Shadow for depth
//     backgroundColor: '#FFF8DC', // Light background color inside the frame
//   };

//   const imageStyle = {
//     width: '100%',
//     height: '560px',
//     borderRadius: '10px', // Slight rounding of image corners
//   };

//   return (
//     <div style={containerStyle}>
//     <Slider {...sliderSettings}>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={image} alt={`Slider Image ${index + 1}`} style={imageStyle} />
//         </div>
//       ))}
//     </Slider>
//     </div>
//   );
// };

// export default AutoSlider;