// Neem.js
import React from 'react';
import ModelViewer from './ModelViewer';
import Header from './Header';

const Neem = () => {
  const imageData = [
    '/Neem1.jpg',
    '/Neem2.jpg',
    '/Neem3.jpg',
    '/Neem4.jpg',
  ];

  const plantData = {
    plantname: "Neem",
    scientific_name: "Azadirachta indica",
    type: "Ayurveda",
    general_info: "Neem is a versatile tree known for its medicinal properties and is often referred to as the 'village pharmacy' in Ayurveda. It is widely used for its antifungal, antibacterial, and anti-inflammatory properties.",
    descriptive_info: `
      Neem, scientifically known as Azadirachta indica, is a tree that holds significant importance in Ayurvedic medicine. The Neem tree is often called the "miracle tree" or the "village pharmacy" due to its extensive health benefits and uses. Every part of the Neem tree, including its leaves, bark, seeds, and oil, has medicinal value.

      Neem is renowned for its powerful antifungal, antibacterial, and anti-inflammatory properties. It is commonly used in the treatment of skin conditions such as acne, eczema, psoriasis, and fungal infections. Neem oil and paste are applied externally to treat wounds, cuts, and skin infections. Neem is also a popular ingredient in oral care products like toothpaste and mouthwash, as it promotes gum health and fights off bacteria that cause tooth decay and bad breath.

      In addition to its external benefits, Neem is used internally to detoxify the body, support the immune system, and improve liver health. It is also taken as a natural blood purifier and helps in managing blood sugar levels, making it beneficial for individuals with diabetes. Neem is often consumed in the form of tea, capsules, or powder.

      Neem is widely used in traditional Indian remedies for a variety of ailments. Its leaves are often boiled in water to create a detoxifying drink or applied as a paste on the skin for purification. Neem is also used as a natural pesticide in organic farming due to its insect-repelling properties.
    `,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <ModelViewer
        modelPath="/Neem.fbx"
        planeColor="lightgray"
        lightingIntensity={1}
        scale={0.016}
        position={[0, -8, 0]}
        planePosition={[0, -8, 0]}
        imageData={imageData}
        plantData={plantData}
      />
    </div>
  );
};

export default Neem;