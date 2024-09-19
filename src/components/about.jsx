import React from 'react';
import { Leaf, Gamepad2, Axe, MessageSquare, Headphones, Languages } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <Icon className="feature-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
    <button>Explore Now</button>
  </div>
);

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "3D GARDENIA",
      description: "Explore a fully immersive 3D garden where precision and detail bring medicinal plants to life. Rotate, zoom, and inspect each plant closely to discover its unique characteristics. Experience the beauty of nature like never before, all within the digital realm."
    },
    {
      icon: Gamepad2,
      title: "GAMIFIED VIRTUAL TOUR",
      description: "Embark on a thrilling virtual tour where each correct answer earns you rewards, while wrong answers drain your health. Restore your energy with special medicinal drinks, stay sharp, and enjoy a fun and educational journey through the world of herbal healing."
    },
    {
      icon: Axe,
      title: "CUSTOMIZABLE GARDEN",
      description: "Create your own personalized garden by selecting and organizing your favorite plants. Our platform helps you design unique plant collections, tailored to your preferences and needs. Build the perfect virtual herbal space, just for you!"
    },
    {
      icon: MessageSquare,
      title: "AI CHATBOT",
      description: "Got health-related questions or need personalized plant recommendations? Meet our AI chatbot, your friendly virtual guide! Explore the herbs encyclopedia, get personalized advice, and watch helpful video tutorials—all through natural, interactive conversation."
    },
    {
      icon: Headphones,
      title: "VR INTEGRATION",
      description: "Step into the future with our Virtual Herbal Garden's VR mode. Immerse yourself in the 3D garden like never before and interact with medicinal plants in a truly engaging way. Feel as if you're walking through a real-life herbal garden from the comfort of your own home."
    },
    {
      icon: Languages,
      title: "MULTILINGUAL SUPPORT",
      description: "Our platform speaks your language! Enjoy the full experience of the Virtual Herbal Garden in multiple languages, both in text and audio. No matter where you're from, learning about medicinal plants has never been easier."
    }
  ];

  return (
    <div className="virtual-herbal-garden">
      <div className="container">
        <div className="header">
          <img src="herbal plants.png" alt="Herbal ingredients" />
          <div className="header-content">
            <h1>HEALING TRADITIONS OF AYUSH</h1>
            <p>
              AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy—an ancient system of holistic healing rooted in India's rich heritage. These traditional healthcare practices focus on maintaining balance and harmony within the body and mind, using natural remedies derived from medicinal plants.
            </p>
          </div>
        </div>
        
        <h2>KEY FEATURES</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Janvi+Purva:wght@700&family=Baskervville:wght@400&family=Judson:wght@400&display=swap');

        .virtual-herbal-garden {
          background-color: rgb(213, 224, 217);
          min-height: 100vh;
          padding: 2rem;
          font-family: 'Judson', serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .header img {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
        }

        .header-content {
          padding: 1.5rem;
        }

        h1 {
          font-family: 'Janvi Purva', serif;
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #333;
        }

        h2 {
          font-family: 'Janvi Purva', serif;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .feature-card {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          color: #4CAF50;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-family: 'Janvi Purva', serif;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .feature-card p {
          font-family: 'Baskervville', serif;
          color: #666;
          margin-bottom: 1rem;
        }

        .feature-card button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .feature-card button:hover {
          background-color: #45a049;
        }

        @media (min-width: 768px) {
          .header {
            display: flex;
          }

          .header img {
            width: 33.333%;
          }

          .header-content {
            width: 66.666%;
          }
        }

        @media (max-width: 767px) {
          .virtual-herbal-garden {
            padding: 1rem;
          }

          h1 {
            font-size: 1.5rem;
          }

          h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;