import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { MeshStandardMaterial, DoubleSide } from 'three';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FBXModel = ({ modelPath, scale, position, onModelClick }) => {
  const fbxRef = useRef();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(modelPath, (object) => {
      object.scale.set(scale, scale, scale);
      object.position.set(...position);
      object.castShadow = true;
      object.receiveShadow=true;

      object.traverse((child) => {
        if (child.isMesh) {
          child.material.side = DoubleSide;
          child.castShadow = true; // Cast shadows
          child.receiveShadow = true; // Receive shadows
          child.alphaTest=0.5;
        }
      });

      fbxRef.current.add(object);
    });

    return () => {
      if (fbxRef.current) {
        fbxRef.current.clear();
      }
    };
  }, [modelPath, scale, position]);

  return <group ref={fbxRef} onClick={onModelClick} />;
};

const CustomCamera = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 5, 15);
    camera.fov = 60;
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

const ModelViewer = ({ modelPath, planeColor, lightingIntensity, scale, position, planePosition, imageData, plantData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const utteranceRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModelClick = () => {
    setSelectedImage(null);
  };

  const speakText = (text) => {
    if (isReading) {
      speechSynthesis.cancel(); // Stop reading if already in progress
      setIsReading(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // Set language if needed
      speechSynthesis.speak(utterance);
      utteranceRef.current = utterance;
      setIsReading(true);
    }
  };

  useEffect(() => {
    // Clean up on component unmount or navigation
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <div style={styles.modelContainer}>
        <Canvas shadows={true} style={{ backgroundColor: '#808080' }}>
  <CustomCamera />
  <OrbitControls enableZoom={true} enableDamping dampingFactor={0.1} />
  <ambientLight intensity={2} />
  <directionalLight position={[5, 10, 5]} intensity={lightingIntensity} castShadow />
  
  {/* The plane now receives shadows */}
  <mesh position={planePosition} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <planeGeometry args={[100, 100]} />
    <meshStandardMaterial color={planeColor} side={DoubleSide} />
  </mesh>
  
  <Suspense fallback={null}>
    <FBXModel modelPath={modelPath} scale={scale} position={position} onModelClick={handleModelClick} />
  </Suspense>
</Canvas>
          <div style={styles.sliderContainer}>
            {imageData.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                style={styles.thumbnail}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div style={styles.displayContainer}>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" style={styles.selectedImage} />
          ) : (
            <div style={styles.textContainer}>
              <h1 style={styles.heading1}>{plantData.plantname}</h1>
              <h3 style={styles.heading3}><i>Scientific Name:</i> {plantData.scientific_name}</h3>
              <h4 style={styles.heading4}><i>Type:</i> {plantData.type}</h4>
              <h4 style={styles.heading4}>General Info:</h4>
              <p style={styles.paragraph}>{plantData.general_info}</p>
              <h4 style={styles.heading4}>Details:</h4>
              <p style={styles.paragraph}>{plantData.descriptive_info}</p>
              <button 
                onClick={() => speakText(`${plantData.plantname}. ${plantData.general_info}. ${plantData.descriptive_info}`)} 
                style={isReading ? styles.stopReadingButton : styles.readAloudButton}
              >
                {isReading ? 'Stop Reading' : 'Read Aloud'}
              </button>
            </div>
          )}
          <div style={styles.notesContainer}>
            <h4 style={styles.notesHeading}>Notes:</h4>
            <textarea style={styles.notesInput} />
          </div>
          <div style={styles.socialMediaContainer}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialMediaIcon}>
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialMediaIcon}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialMediaIcon}>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialMediaIcon}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
    marginTop:'80px',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 80px)',
    overflow: 'hidden',
  },
  modelContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
    position: 'relative',
    overflow: 'hidden',
  },
  sliderContainer: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    display: 'flex',
    gap: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '10px',
  },
  thumbnail: {
    width: '80px',
    height: '80px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  displayContainer: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D5E0D9',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    color: '#333',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    marginBottom: '15px',
    overflowY: 'auto',
  },
  notesContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    marginBottom: '15px',
  },
  notesHeading: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '10px',
  },
  notesInput: {
    width: '100%',
    height: '80px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    resize: 'vertical',
    fontSize: '0.9rem',
  },
  selectedImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '10px',
  },
  heading1: {
    fontSize: '2.5rem',
    color: '#333',
  },
  heading3: {
    fontSize: '1.7rem',
    color: '#555',
  },
  heading4: {
    fontSize: '1.4rem',
    color: '#555',
    marginBottom: '5px',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666',
  },
  socialMediaContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
  socialMediaIcon: {
    fontSize: '1.5rem',
    color: '#555',
    textDecoration: 'none',
  },
  readAloudButton: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  stopReadingButton: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#F44336', 
    color: '#fff',
  },
};

export default ModelViewer;