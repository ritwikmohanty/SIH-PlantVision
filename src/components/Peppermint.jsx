// import React, { Suspense, useRef, useEffect, useState } from 'react';
// import { Canvas, useThree } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { MeshStandardMaterial, DoubleSide } from 'three';
// import Header from './Header';

// const FBXModel = ({ onModelClick }) => {
//   const fbxRef = useRef();

//   useEffect(() => {
//     const loader = new FBXLoader();
//     loader.load('/peppermint.fbx', (object) => {
//       object.scale.set(0.2, 0.2, 0.2);
//       object.position.set(0, -4, 0);
//       object.castShadow = true;

//       object.traverse((child) => {
//         if (child.isMesh) {
//           const material = child.material;
//           if (material instanceof MeshStandardMaterial) {
//             material.alphaTest = 0.5;
//             material.vertexColors = false; // Ensure vertex colors are not rendered
//           }
//         }
//       });

//       fbxRef.current.add(object);
//     });

//     return () => {
//       if (fbxRef.current) {
//         fbxRef.current.clear();
//       }
//     };
//   }, []);

//   return <group ref={fbxRef} onClick={onModelClick} />;
// };

// const CustomCamera = () => {
//   const { camera } = useThree();
//   useEffect(() => {
//     camera.position.set(0, 5, 15);
//     camera.fov = 60;
//     camera.updateProjectionMatrix();
//   }, [camera]);

//   return null;
// };

// const PepperMint = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleModelClick = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <Header />
//       <div style={styles.contentContainer}>
//         <div style={styles.modelContainer}>
//           <Canvas shadows style={{ backgroundColor: '#808080' }}>
//             <CustomCamera />
//             <OrbitControls enableZoom={true} enableDamping dampingFactor={0.1} />
//             <ambientLight intensity={6} />
//             <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
//             <mesh
//               position={[0, -4, 0]}
//               rotation={[-Math.PI / 2, 0, 0]}
//               receiveShadow
//             >
//               <planeGeometry args={[100, 100]} />
//               <meshStandardMaterial color="lightgray" side={DoubleSide} />
//             </mesh>
//             <Suspense fallback={null}>
//               <FBXModel onModelClick={handleModelClick} />
//             </Suspense>
//           </Canvas>
//           <div style={styles.sliderContainer}>
//             {imageDataPepperMint.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Thumbnail ${index}`}
//                 style={styles.thumbnail}
//                 onClick={() => handleImageClick(image)}
//               />
//             ))}
//           </div>
//         </div>
//         <div style={styles.displayContainer}>
//           {selectedImage ? (
//             <img src={selectedImage} alt="Selected" style={styles.selectedImage} />
//           ) : (
//             <div style={styles.textContainer}>
//               <h1 style={styles.heading1}>{plantDataPepperMint.plantname}</h1>
//               <h3 style={styles.heading3}><i>Scientific Name:</i> {plantDataPepperMint.scientific_name}</h3>
//               <h4 style={styles.heading4}><i>Type:</i> {plantDataPepperMint.type}</h4>
//               <h4 style={styles.heading4}>General Info:</h4>
//               <p style={styles.paragraph}>{plantDataPepperMint.general_info}</p>
//               <h4 style={styles.heading4}>Details:</h4>
//               <p style={styles.paragraph}>{plantDataPepperMint.descriptive_info}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const imageDataPepperMint = [
//   '/PepperMint1.jpg',
//   '/PepperMint2.jpg',
//   '/PepperMint3.jpg',
//   '/PepperMint4.jpg',
// ];

// const plantDataPepperMint = {
//   plantname: "Pepper Mint",
//   scientific_name: "Mentha × piperita",
//   type: "Herb",
//   general_info: "Peppermint is a hybrid mint known for its distinctive aroma and flavor. It is widely used in cooking, medicine, and cosmetics.",
//   descriptive_info: `
//     Peppermint, a hybrid mint, is known for its refreshing and cooling effect. It is commonly used in culinary dishes, teas, and essential oils. In herbal medicine, it helps with digestive issues, headaches, and respiratory problems.
//   `,
// };

// const styles = {
//   pageContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100vh',
//   },
//   contentContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     height: 'calc(100vh - 80px)', // Adjust for header height
//   },
//   modelContainer: {
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#808080',
//     position: 'relative',
//   },
//   sliderContainer: {
//     position: 'absolute',
//     bottom: '10px',
//     left: '10px',
//     display: 'flex',
//     gap: '10px',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: '10px',
//     borderRadius: '10px',
//   },
//   thumbnail: {
//     width: '80px',
//     height: '80px',
//     cursor: 'pointer',
//     borderRadius: '5px',
//   },
//   displayContainer: {
//     flex: 1,
//     padding: '50px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#D5E0D9',
//   },
//   textContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     color: '#333',
//   },
//   selectedImage: {
//     maxWidth: '100%',
//     maxHeight: '100%',
//     objectFit: 'contain',
//     borderRadius: '10px',
//   },
//   heading1: {
//     fontSize: '2.5rem',
//     color: '#333',
//   },
//   heading3: {
//     fontSize: '1.5rem',
//     color: '#555',
//   },
//   heading4: {
//     fontSize: '1.5rem',
//     color: '#555',
//   },
//   paragraph: {
//     fontSize: '1rem',
//     lineHeight: '1.6',
//     color: '#666',
//   },
// };

// export default PepperMint;
// Peppermint.js
import React from 'react';
import ModelViewer from './ModelViewer';
import Header from './Header';

const Peppermint = () => {
  const imageData = [
    '/Peppermint1.jpg',
    '/Peppermint2.jpg',
    '/Peppermint3.jpg',
    '/Peppermint4.jpg',
  ];

  const plantData = {
    plantname: "Peppermint",
    scientific_name: "Mentha × piperita",
    type: "Ayurveda, Unani",
    general_info: "Peppermint is widely known for its cooling and refreshing properties. It is commonly used to aid digestion, relieve headaches, and provide respiratory support.",
    descriptive_info: `
      Peppermint, a hybrid of watermint and spearmint, is a versatile herb that has been used for centuries in traditional medicine. Its high menthol content provides a cooling sensation, making it a popular remedy for digestive discomfort, headaches, and respiratory conditions.

      The essential oils extracted from peppermint leaves have analgesic and anti-inflammatory properties. It is widely used to soothe indigestion, bloating, and nausea. Peppermint tea is a simple and effective remedy for easing stomach cramps and promoting overall digestive health.

      For headaches, applying diluted peppermint oil to the temples can provide quick relief due to its cooling effect. It can also be inhaled to clear nasal passages and alleviate symptoms of colds and flu.

      Peppermint thrives in cool, moist environments and can easily be grown in gardens or pots. It prefers well-drained soil and partial sunlight. Its robust growth and medicinal properties make it a valuable addition to herbal gardens and home remedies.
    `,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <ModelViewer
        modelPath="/peppermint.fbx"
        planeColor="lightgray"

        lightingIntensity={9}
        scale={0.2}
        position={[0, -8, 0]}
        planePosition={[0, -8, 0]}
        imageData={imageData}
        plantData={plantData}
      />
    </div>
  );
};

export default Peppermint;
