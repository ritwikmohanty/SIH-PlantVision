import React, { useState } from 'react';

const Question = ({ questionData, onAnswerCorrect }) => {
  const [userInputs, setUserInputs] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleOptionClick = (option) => {
    if (option === questionData.correctAnswer) {
      setFeedback('Correct!');
      onAnswerCorrect();
    } else {
      setFeedback('Try Again!');
    }
    setUserInputs((prevInputs) => [...prevInputs, option]);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      padding: '20px',
    },
    questionCard: {
      backgroundColor: '#ffffff',
      padding: '20px', // Adjusted padding
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '100%', // Ensure card takes full width
      maxWidth: '800px', // Optional: limit max width
      height: '500px', // Fixed height to keep the card size consistent
      overflow: 'auto', // Handle content overflow
    },
    questionText: {
      fontSize: '24px', // Adjusted font size for better fit
      marginBottom: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: '3', // Limit to 3 lines
      WebkitBoxOrient: 'vertical',
    },
    optionButton: {
      padding: '15px 30px', // Bigger buttons
      marginBottom: '10px',
      backgroundColor: '#fff', // Initial color is white
      color: '#333', // Text color remains dark
      border: '2px solid #ccc', // Add a border for contrast
      borderRadius: '10px',
      fontSize: '18px', // Adjusted font size for better fit
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'background-color 0.3s ease',
    },
    correctOption: {
      backgroundColor: '#4CAF50', // Green background for correct answer
      color: '#fff', // White text for contrast
    },
    wrongOption: {
      backgroundColor: '#f44336', // Red background for wrong answer
      color: '#fff', // White text for contrast
    },
    feedback: {
      fontSize: '20px', // Adjusted font size for better fit
      fontWeight: 'bold',
      color: feedback === 'Correct!' ? '#4CAF50' : '#f44336', // Green or red feedback text
      marginTop: '20px',
      textAlign: 'center',
    }
  };

  return (
    <div style={styles.container}>
      {/* Question Card */}
      <div style={styles.questionCard}>
        <h2 style={styles.questionText}>{questionData.question}</h2>
        {questionData.options.map((option, index) => (
          <button
            key={index}
            style={{
              ...styles.optionButton,
              ...(userInputs.includes(option)
                ? option === questionData.correctAnswer
                  ? styles.correctOption
                  : styles.wrongOption
                : {}),
            }}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
        {feedback && <div style={styles.feedback}>{feedback}</div>}
      </div>
    </div>
  );
};

export default Question;