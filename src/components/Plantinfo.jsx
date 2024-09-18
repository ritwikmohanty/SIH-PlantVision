import React from 'react';

const PlantInfo = ({ plantData, onStartQuiz }) => {
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
      padding: '40px',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '100%', // Ensure card takes full width
      maxWidth: '800px', // Optional: limit max width
    },
    infoText: {
      fontSize: '28px',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '18px',
      lineHeight: '1.5',
      color: '#333',
      marginBottom: '20px',
    },
    startButton: {
      padding: '15px 30px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '18px',
      textAlign: 'center',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Plant Info Card */}
      <div style={styles.infoCard}>
        <h2 style={styles.infoText}>{plantData.name}</h2>
        <p style={styles.description}>{plantData.description}</p>
        <button style={styles.startButton} onClick={onStartQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default PlantInfo;