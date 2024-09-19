import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Herobg from '../assets/Herobg.png';

const Hero = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleClick = () => {
    navigate('/gardenia');
  };

  return (
    <div style={styles.heroWrapper}>
      <section style={{ ...styles.heroSection, backgroundImage: `url(${Herobg})` }}>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Jaini+Purva&display=swap');
          `}
        </style>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Discover The</h1>
          <br />
          <h1 style={styles.heroTitle2}>Healing Power of Nature</h1>
          <p style={styles.heroSubtitle}>
            Explore the world of medicinal plants with an immersive, interactive experience.
          </p>
          <button
            style={{
              ...styles.heroButton,
              ...(isHovered ? styles.heroButtonHover : {}) // Apply hover style dynamically
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            EXPLORE GARDEN
          </button>
        </div>
      </section>
    </div>
  );
};

const styles = {
  heroWrapper: {
    position: 'relative',
    minHeight: '100vh', // Ensure the wrapper takes up at least the viewport height
    overflow: 'hidden',
  },
  heroSection: {
    position: 'relative', // Make sure it can extend beyond the viewport
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '100%',
  },
  heroTitle: {
    fontFamily: 'Abril Fatface',
    fontSize: 'clamp(40px, 8vw, 90px)', // Adjusted for better scaling
    fontWeight: '400',
    lineHeight: '1.1em',
    background: 'linear-gradient(-90deg, #101B12 0%, #4C8055 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    paddingBottom: '13px', // for removing translucent merging on heading
    marginTop: '-5vh',
    textShadow: '2px 4px 6px rgba(8, 8, 8, 0.5)',
  },
  heroTitle2: {
    fontFamily: 'Abril Fatface',
    fontSize: 'clamp(40px, 8vw, 90px)', // Adjusted for better scaling
    fontWeight: '400',
    lineHeight: '1.1em',
    background: 'linear-gradient(-90deg, #4C8055 0%, #101B12 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    paddingBottom: '13px', // for removing translucent merging on heading
    marginTop: '-5vh',
    textShadow: '2px 4px 6px rgba(8, 8, 8, 0.5)',
  },
  heroSubtitle: {
    fontFamily: '"Jaini Purva", sans-serif',
    fontSize: 'clamp(16px, 3vw, 30px)', // Adjusted to scale better on small screens
    fontWeight: 300,
    marginTop: '0.3vh',
    marginBottom: '4vh',
    color: '#000',
    padding: '0 5vw', // Adds padding for readability on mobile
  },
  heroButton: {
    backgroundColor: '#437532',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)',
    color: 'white',
    border: 'none',
    padding: '0.5vw 2.3vw',
    fontFamily: '"Jaini Purva", sans-serif',
    fontSize: 'clamp(20px, 2vw, 24px)', // Adjusted for responsiveness
    cursor: 'pointer',
    borderRadius: '10px',
    marginBottom: '30vh',
    transition: 'transform 0.2s ease-in-out',
  },
  heroButtonHover: {
    transform: 'scale(1.1)', // Hover function
  },
};

export default Hero;