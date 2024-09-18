import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { DoubleSide } from 'three';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Inline styles to add Google Font
const styles = {
  '@import': "url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap')",

  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
    marginTop: '80px',
    fontFamily: "'Poppins', sans-serif",
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
  heading1: {
    fontSize: '2.5rem',
    color: '#2C3E50',
    fontWeight: '600',
  },
  heading3: {
    fontSize: '1.7rem',
    fontWeight: '500',
    color: '#16A085',
  },
  heading4: {
    fontSize: '1.4rem',
    fontWeight: '500',
    color: '#000',
    marginBottom: '5px',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666',
  },
  descriptionLine: {
    border: '0',
    borderTop: '1px solid #ddd',
    margin: '10px 0',
    width: '100%',
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
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  stopReadingButton: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#000',
    color: '#fff',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
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
};

const buttonStyles = {
  ':hover': {
    transform: 'scale(1.05)',
  },
  ':active': {
    backgroundColor: '#388E3C',
  },
};

const FBXModel = ({ modelPath, scale, position, onModelClick }) => {
  const fbxRef = useRef();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(modelPath, (object) => {
      object.scale.set(scale, scale, scale);
      object.position.set(...position);
      object.castShadow = true;
      object.receiveShadow = true;

      object.traverse((child) => {
        if (child.isMesh) {
          child.material.side = DoubleSide;
          child.castShadow = true;
          child.receiveShadow = true;
          child.alphaTest = 0.5;
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

const ModelViewer = ({ modelPath, scale, position, planePosition, imageData, plantData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const utteranceRef = useRef(null);

  // Fetch available voices
  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);

      // Find the "en-IN-Standard-B" voice
      const indianVoice = availableVoices.find(voice => voice.name === 'en-IN-Standard-B');
      if (indianVoice) {
        setSelectedVoice(indianVoice);
      } else if (availableVoices.length > 0) {
        // Default to the first available voice if "en-IN-Standard-B" is not found
        setSelectedVoice(availableVoices[0]);
      }
    };

    updateVoices();
    speechSynthesis.onvoiceschanged = updateVoices; // Update voices when they change

    return () => {
      speechSynthesis.onvoiceschanged = null; // Clean up
    };
  }, []);

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
      utterance.voice = selectedVoice; // Use selected voice
      utterance.lang = selectedVoice ? selectedVoice.lang : 'en-IN'; // Set language based on selected voice
      speechSynthesis.speak(utterance);
      utteranceRef.current = utterance;
      setIsReading(true);
    }
  };

  const stopReading = () => {
    if (isReading) {
      speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <div style={styles.modelContainer}>
          <Canvas shadows={true} style={{ backgroundColor: '#808080' }}>
            <CustomCamera />
            <OrbitControls enableZoom={true} enableDamping dampingFactor={0.1} />
            <ambientLight intensity={2} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
            <mesh position={planePosition} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="#CCCCCC" side={DoubleSide} />
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
              <h3 style={styles.heading3}>Scientific Name: {plantData.scientific_name}</h3>
              <h4 style={styles.heading4}>Type: {plantData.type}</h4>
              <hr style={styles.descriptionLine} />
              <h4 style={styles.heading4}>General Info:</h4>
              <p style={styles.paragraph}>{plantData.general_info}</p>
              <hr style={styles.descriptionLine} />
              <h4 style={styles.heading4}>Details:</h4>
              <p style={styles.paragraph}>{plantData.descriptive_info}</p>
              <button
                onClick={isReading ? stopReading : () => speakText(`${plantData.plantname}. ${plantData.general_info}. ${plantData.descriptive_info}`)}
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

export default ModelViewer;