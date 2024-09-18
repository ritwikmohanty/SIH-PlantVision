import React, { useState } from 'react';
import PlantInfo from './Plantinfo'; // Ensure this component only handles text
import Question from './Question'; // Ensure this component only handles text

const quizData = [
  {
    plant: {
      name: 'Ashwagandha',
      description: 'Ashwagandha is a powerful adaptogen used in Ayurveda to reduce stress and improve overall health.',
    },
    questions: [
      {
        question: 'What is the scientific name of Ashwagandha?',
        options: ['Withania Somnifera', 'Ocimum Sanctum', 'Phyllanthus Emblica', 'Chrysopogon Zizaniodes'],
        correctAnswer: 'Withania Somnifera',
        points: 10,
      },
      {
        question: 'What is Ashwagandha commonly used for?',
        options: ['Stress relief', 'Digestive issues', 'Skin problems', 'Hair growth'],
        correctAnswer: 'Stress relief',
        points: 10,
      },
      {
        question: 'Which part of the Ashwagandha plant is used in Ayurveda?',
        options: ['Root', 'Leaf', 'Flower', 'Seed'],
        correctAnswer: 'Root',
        points: 10,
      },
      {
        question: 'Ashwagandha is also known as:',
        options: ['Indian Ginseng', 'Holy Basil', 'Turmeric', 'Licorice'],
        correctAnswer: 'Indian Ginseng',
        points: 10,
      },
    ],
  },
  {
    plant: {
      name: 'Tulsi',
      description: 'Tulsi, or Holy Basil, is revered in Ayurveda for its adaptogenic and stress-relieving properties.',
    },
    questions: [
      {
        question: 'What is the scientific name of Tulsi?',
        options: ['Ocimum Sanctum', 'Withania Somnifera', 'Phyllanthus Niruri', 'Zingiber Officinale'],
        correctAnswer: 'Ocimum Sanctum',
        points: 10,
      },
      {
        question: 'Tulsi is commonly used for which condition?',
        options: ['Respiratory issues', 'Digestive problems', 'Skin infections', 'Headaches'],
        correctAnswer: 'Respiratory issues',
        points: 10,
      },
      {
        question: 'What part of the Tulsi plant is used in Ayurveda?',
        options: ['Leaf', 'Root', 'Flower', 'Seed'],
        correctAnswer: 'Leaf',
        points: 10,
      },
      {
        question: 'Tulsi is also known as:',
        options: ['Sacred Basil', 'Ginger', 'Licorice', 'Ginseng'],
        correctAnswer: 'Sacred Basil',
        points: 10,
      },
    ],
  },
  {
    plant: {
      name: 'Neem',
      description: 'Neem is a highly valued plant in Ayurveda for its detoxifying and anti-inflammatory properties.',
    },
    questions: [
      {
        question: 'What is the scientific name of Neem?',
        options: ['Azadirachta Indica', 'Withania Somnifera', 'Ocimum Sanctum', 'Phyllanthus Niruri'],
        correctAnswer: 'Azadirachta Indica',
        points: 10,
      },
      {
        question: 'Neem is often used for:',
        options: ['Skin health', 'Digestive issues', 'Respiratory problems', 'Stress relief'],
        correctAnswer: 'Skin health',
        points: 10,
      },
      {
        question: 'Which part of the Neem plant is used in Ayurveda?',
        options: ['Leaf', 'Root', 'Bark', 'All of the above'],
        correctAnswer: 'All of the above',
        points: 10,
      },
      {
        question: 'Neem has which of the following properties?',
        options: ['Antimicrobial', 'Sedative', 'Analgesic', 'Stimulant'],
        correctAnswer: 'Antimicrobial',
        points: 10,
      },
    ],
  },
  {
    plant: {
      name: 'Amla',
      description: 'Amla, or Indian Gooseberry, is known for its high vitamin C content and its role in enhancing immunity in Ayurveda.',
    },
    questions: [
      {
        question: 'What is the scientific name of Amla?',
        options: ['Phyllanthus Emblica', 'Withania Somnifera', 'Ocimum Sanctum', 'Azadirachta Indica'],
        correctAnswer: 'Phyllanthus Emblica',
        points: 10,
      },
      {
        question: 'Amla is often used for:',
        options: ['Immunity boosting', 'Pain relief', 'Skin rejuvenation', 'Digestive health'],
        correctAnswer: 'Immunity boosting',
        points: 10,
      },
      {
        question: 'What part of the Amla plant is used in Ayurveda?',
        options: ['Fruit', 'Leaf', 'Root', 'Seed'],
        correctAnswer: 'Fruit',
        points: 10,
      },
      {
        question: 'Amla is rich in which vitamin?',
        options: ['Vitamin C', 'Vitamin A', 'Vitamin D', 'Vitamin E'],
        correctAnswer: 'Vitamin C',
        points: 10,
      },
    ],
  },
];

const QuizApp = () => {
  const [currentPlantIndex, setCurrentPlantIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questionPoints, setQuestionPoints] = useState(0);

  const currentPlant = quizData[currentPlantIndex];

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerCorrect = () => {
    const pointsAwarded = currentPlant.questions[currentQuestionIndex].points;
    setPoints((prevPoints) => prevPoints + pointsAwarded);
    setQuestionPoints(pointsAwarded);
    setTimeout(() => {
      if (currentQuestionIndex + 1 < currentPlant.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else if (currentPlantIndex + 1 < quizData.length) {
        // Move to the next plant
        setCurrentPlantIndex(currentPlantIndex + 1);
        setCurrentQuestionIndex(0);
        setQuizStarted(false); // Show the next plant info
      } else {
        setQuizFinished(true); // End of quiz
      }
      setQuestionPoints(0); // Reset question points
    }, 1000);
  };

  const styles = {
    container: {
      minHeight: '100vh', // Full height of the screen
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f7f1',
      padding: '20px',
      position: 'relative', // Added for relative positioning of points
      marginTop: '80px', 
    },
    header: {
      fontSize: '36px', // Larger title
      textAlign: 'center',
      marginBottom: '30px',
    },
    points: {
      position: 'absolute', // Absolute positioning for right alignment
      top: '20px',
      right: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    finishedMessage: {
      textAlign: 'center',
      fontSize: '22px',
      color: '#4caf50',
      marginTop: '30px',
    },
    questionPoints: {
      textAlign: 'center',
      fontSize: '20px',
      color: '#2196F3',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Virtual Tour of Ayurvedic Plants</h1>
      <div style={styles.points}>Points: {points}</div>

      {!quizFinished ? (
        !quizStarted ? (
          <PlantInfo
            plantData={currentPlant.plant}
            onStartQuiz={handleStartQuiz}
          />
        ) : (
          <>
            {questionPoints > 0 && (
              <div style={styles.questionPoints}>Points for this question: {questionPoints}</div>
            )}
            <Question
              questionData={currentPlant.questions[currentQuestionIndex]}
              onAnswerCorrect={handleAnswerCorrect}
            />
          </>
        )
      ) : (
        <p style={styles.finishedMessage}>
          Congratulations! You've completed the quiz and earned {points} points!
        </p>
      )}
    </div>
  );
};

export default QuizApp;