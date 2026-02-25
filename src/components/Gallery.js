// import React, { useState } from 'react';
// import { FaFolder } from 'react-icons/fa';
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

// const GallerySection = () => {
//   const [selectedFolder, setSelectedFolder] = useState(null);

//   const folders = ['Category1', 'Category2', 'Category3', 'Category4', 'Category5', 'Category6'];
//   // Add your image objects here

//   const imagesByFolder = {
//     Category1: [
//       {
//         original: `${process.env.PUBLIC_URL}/images/category1/1.jpeg`,
//         description: 'Description for image 1',
//       },
//       {
//         original: `${process.env.PUBLIC_URL}/images/category1/2.jpeg`,
//         description: 'Description for image 2',
//       },
//       // Add more image objects for Category1
//     ],
//     Category2: [
//       {
//         original: `${process.env.PUBLIC_URL}/images/category2/3.jpeg`,
//         description: 'Description for image 3',
//       },
//       {
//         original: `${process.env.PUBLIC_URL}/images/category2/4.jpeg`,
//         description: 'Description for image 4',
//       },
//       // Add more image objects for Category2
//     ],
//     // Add more folders and images as needed
//   };

//   const handleFolderClick = (folder) => {
//     setSelectedFolder(folder);
//   };

//   // Set a fixed height and width for all images in the gallery
//   const imageStyle = { height: '200px', width: '200px', objectFit: 'cover' };

//   return (
//     <div>
//       <h2>Folders</h2>
//       <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', justifyContent: 'center', margin: '0 65px' }}>
//         {folders.map((folder) => (
//           <li
//             key={folder}
//             onClick={() => handleFolderClick(folder)}
//             style={{
//               cursor: 'pointer',
//               padding: '8px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               height: '100px',
//               margin: '0 8px', // Equal margin on the right and left sides
//             }}
//           >
//             <FaFolder style={{ marginBottom: '8px', height: '48px', width: '48px' }} />
//             {folder}
//           </li>
//         ))}
//       </ul>

//       {selectedFolder && (
//         <>
//           <h2>{selectedFolder}</h2>
// <ImageGallery
//   items={imagesByFolder[selectedFolder]}
//   showThumbnails={true}
//   showPlayButton={false}
// />       
//  </>
//       )}
//     </div>
//   );
// };

// export default GallerySection;
