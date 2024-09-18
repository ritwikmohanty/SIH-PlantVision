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
      padding: '40px',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '100%', // Ensure card takes full width
      maxWidth: '800px', // Optional: limit max width
    },
    questionText: {
      fontSize: '28px', // Bigger question text
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    optionButton: {
      padding: '15px 30px', // Bigger buttons
      marginBottom: '10px',
      backgroundColor: '#fff', // Initial color is white
      color: '#333', // Text color remains dark
      border: '2px solid #ccc', // Add a border for contrast
      borderRadius: '10px',
      fontSize: '20px',
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
      fontSize: '24px',
      fontWeight: 'bold',
      color: feedback === 'Correct!' ? '#4CAF50' : '#f44336', // Green or red feedback text
      marginTop: '20px',
    },
    userInputs: {
      marginTop: '20px',
      fontSize: '16px',
      color: '#333',
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
        {userInputs.length > 0 && (
          <div style={styles.userInputs}>
            <p>You've selected:</p>
            <ul>
              {userInputs.map((input, index) => (
                <li key={index}>{input}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;