// Ashwagandha.js
import React from 'react';
import ModelViewer from './ModelViewer';
import Header from './Header';

const Ashwagandha = () => {
  const modelPath = '/Ashwagandha.fbx';
  const imageData = [
    '/Ashwagandha1.jpg',
    '/Ashwagandha2.jpg',
    '/Ashwagandha3.jpg',
    '/Ashwagandha4.jpg',
  ];
  const plantData = {
    plantname: "Ashwagandha",
    scientific_name: "Withania somnifera",
    type: "Ayurveda",
    general_info: "Ashwagandha, also known as Indian ginseng, is an important herb in Ayurveda, used for its rejuvenating properties and to combat stress and fatigue.",
    descriptive_info: `
      Ashwagandha, also known as Indian ginseng or winter cherry, is a highly regarded herb in Ayurvedic medicine. It is renowned for its rejuvenating properties and ability to combat stress, fatigue, and promote overall wellness. The root and berries of Ashwagandha are used to make traditional medicines that enhance energy, vitality, and mental clarity.

      Ashwagandha is an adaptogen, which means it helps the body manage stress and balance hormones. It is commonly used to support healthy sleep patterns, enhance memory and cognitive function, and improve physical strength and stamina. The herb is also known for its anti-inflammatory, antioxidant, and immune-boosting properties.

      In addition to its general benefits, Ashwagandha is used to treat various conditions such as anxiety, depression, arthritis, and hypertension. Regular consumption of Ashwagandha can also help regulate blood sugar levels and improve heart health.

      The recommended dosage of Ashwagandha powder or extract is 1-2 teaspoons daily, either in water or milk. It is generally safe for most people but should be avoided by pregnant or breastfeeding women unless advised by a healthcare professional.
    `,
  };
  const planeColor = 'lightgray';
  const lightingIntensity = 1;
  const scale = 0.1;
  const position = [0, -6, 0];
  const planePosition = [0, -6.5, 0];

  return (
    <div>
    <Header/>
    <ModelViewer
      modelPath={modelPath}
      planeColor={planeColor}
      lightingIntensity={lightingIntensity}
      scale={scale}
      position={position}
      planePosition={planePosition}
      imageData={imageData}
      plantData={plantData}
    />
    </div>
  );
};

export default Ashwagandha;