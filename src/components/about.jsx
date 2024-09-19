import React from 'react';
import { Leaf, Gamepad2, Axe, MessageSquare, Headphones, Languages } from 'lucide-react';
import './About.css'; // Import the CSS file

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="featureCard">
    <Icon className="featureIcon" />
    <h3 className="featureTitle">{title}</h3>
    <p className="featureDescription">{description}</p>
    <button className="button">Explore Now</button>
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
    <div className="virtualHerbalGarden">
      <div className="container">
        <div className="header">
          <img src="herbal plants.png" alt="Herbal ingredients" className="headerImage" />
          <div className="headerContent">
            <h1 className="headerTitle">HEALING TRADITIONS OF AYUSH</h1>
            <p className="paragraph">
              AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy—an ancient system of holistic healing rooted in India's rich heritage. These traditional healthcare practices focus on maintaining balance and harmony within the body and mind, using natural remedies derived from medicinal plants.
              <br/><br/>
              In the Virtual Herbal Garden, you can explore the diverse range of herbs and plants that form the foundation of AYUSH treatments. From boosting immunity to promoting overall well-being, these natural treasures have been used for centuries to heal and restore health. Dive in and learn how nature holds the power to nurture and heal through the wisdom of AYUSH.
            </p>
          </div>
        </div>

        <h2 className="keyFeaturesTitle">KEY FEATURES</h2>
        <div className="featuresGrid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;