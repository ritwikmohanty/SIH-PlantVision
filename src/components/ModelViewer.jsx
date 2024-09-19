import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { DoubleSide } from 'three';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowLeft, FaStickyNote, FaVolumeUp, FaArrowCircleLeft } from 'react-icons/fa';

// Inline styles to add Google Font


const styles = {
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
    position: 'relative',
    overflow: 'hidden',
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
    fontFamily: '"Jaini Purva", sans-serif',
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
  readAloudIcon: {
    fontSize: '2.5rem',
    color: '#000',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  socialMediaContainer: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-175%)', // Center it horizontally
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
  socialMediaIcon: {
    fontSize: '2.5rem',
    color: '#555',
    textDecoration: 'none',
  },
  notesButton: {
    fontSize: '2.5rem',
    color: '#FFDF6C',
    cursor: 'pointer',
  },
  sliderContainer: {
    position: 'relative',
    display: 'flex',
    gap: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px',
    borderRadius: '10px',
    marginTop: '15px',
  },
  thumbnail: {
    width: '80px',
    height: '80px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'transform 0.3s ease',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
  },
  modalImageContainer: {
    position: 'relative',
    width: '80%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '2rem',
    color: 'black',
    cursor: 'pointer',
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch available voices
  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);

      const indianVoice = availableVoices.find((voice) => voice.name === 'en-IN-Standard-B');
      if (indianVoice) {
        setSelectedVoice(indianVoice);
      } else if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]);
      }
    };

    updateVoices();
    speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

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

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    
    
    <div style={styles.pageContainer}>
      <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Jaini+Purva&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Jaini+Purva&display=swap');
          `}
        </style>
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
              <FBXModel modelPath={modelPath} scale={scale} position={position} />
            </Suspense>
          </Canvas>
        </div>

        <div style={styles.displayContainer}>
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
          </div>

          <div style={styles.sliderContainer}>
            {imageData.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={styles.thumbnail}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>

          {isModalOpen && (
            <div style={styles.modalOverlay}>
              <div style={styles.modalImageContainer}>
                <FaArrowCircleLeft style={styles.backButton} onClick={closeModal} />
                <img src={selectedImage} alt="Selected" style={styles.modalImage} />
                <FaArrowLeft style={styles.closeButton} onClick={closeModal} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={styles.socialMediaContainer}>
        <FaFacebook style={styles.socialMediaIcon} />
        <FaTwitter style={styles.socialMediaIcon} />
        <FaInstagram style={styles.socialMediaIcon} />
        <FaLinkedin style={styles.socialMediaIcon} />
        <FaStickyNote style={styles.notesButton} onClick={() => alert('Notes functionality coming soon!')} />
        <FaVolumeUp
  style={{ ...styles.readAloudIcon, color: isReading ? '#4CAF50' : '#000' }}
  onClick={() => speakText(
    `${plantData.plantname}. ${plantData.scientific_name}. ${plantData.type}. ${plantData.general_info}. ${plantData.descriptive_info}`
  )}
/>
      </div>
    </div>
  );
};

export default ModelViewer;