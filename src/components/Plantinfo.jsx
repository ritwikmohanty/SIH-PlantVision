import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const PlantInfo = ({ plantData, onStartQuiz, onViewModel }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewModel = () => {
    onViewModel(); // Call the function passed as a prop
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      padding: '20px',
    },
    infoCard: {
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '100%', // Ensure card takes full width
      maxWidth: '800px', // Increased max width for a larger card
      textAlign: 'center', // Center text inside card
    },
    infoText: {
      fontSize: '28px',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '22px',
      lineHeight: '1.5',
      color: '#333',
      marginBottom: '10px',
    },
    summary: {
      fontSize: '22px',
      lineHeight: '1.5',
      color: '#555',
      marginBottom: '20px',
    },
    startButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      textAlign: 'center',
      marginBottom: '10px', // Space between buttons
    },
    viewButton: {
      padding: '10px 20px',
      backgroundColor: '#2196F3',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      textAlign: 'center',
    },
    image: {
      width: '100%', // Ensure image takes full width of the card
      height: '250px', // Increased height for the image
      objectFit: 'cover', // Maintain aspect ratio and cover container
      borderRadius: '10px', // Rounded corners for the image
      marginBottom: '20px', // Space between image and text
    },
  };

  return (
    <div style={styles.container}>
      {/* Plant Info Card */}
      <div style={styles.infoCard}>
        <img src={plantData.image} alt={plantData.name} style={styles.image} />
        <h2 style={styles.infoText}>{plantData.name}</h2>
        <p style={styles.description}>{plantData.description}</p>
        <p style={styles.summary}>{plantData.summary}</p>
        <button style={styles.startButton} onClick={onStartQuiz}>
          Start Quiz
        </button>
        <button style={styles.viewButton} onClick={handleViewModel}>
          View 3D Model
        </button> {/* View 3D Model button */}
      </div>
    </div>
  );
};

export default PlantInfo;