// LemonGrass.js
import React from 'react';
import ModelViewer from './ModelViewer';
import Header from './Header';

const LemonGrass = () => {
  const imageData = [
    '/LemonGrass1.jpg',
    '/LemonGrass2.jpg',
    '/LemonGrass3.jpg',
    '/LemonGrass4.jpg',
  ];

  const plantData = {
    plantname: "Lemon Grass",
    scientific_name: "Cymbopogon citratus",
    type: "Ayurveda",
    general_info: "Lemon Grass, known for its distinct citrus flavor, is widely used in Ayurveda for its digestive and antimicrobial properties. It aids in digestion, supports detoxification, and is known for its calming effects on the nervous system.",
    descriptive_info: `
      Lemon Grass is a popular herb in Ayurveda and culinary practices, renowned for its fresh lemon-like aroma and flavor. It is often used to enhance the taste of dishes and as a medicinal herb to support digestion and overall health.

      In Ayurveda, Lemon Grass is valued for its ability to support digestive health and detoxify the body. It helps alleviate symptoms of indigestion, such as bloating and gas, and promotes a healthy appetite. The herb is also known for its antimicrobial and anti-inflammatory properties.

      Lemon Grass can be consumed fresh or dried, and is commonly brewed into tea. Drinking Lemon Grass tea can help soothe digestive discomfort and promote relaxation. Additionally, the essential oil extracted from Lemon Grass is used in aromatherapy to relieve stress and improve mental clarity.

      Lemon Grass thrives in tropical and subtropical climates and is typically grown in well-drained soil with ample sunlight. It can be cultivated in pots or gardens and requires regular watering. The herb is not only a valuable addition to culinary dishes but also a beneficial plant for holistic health practices.
    `,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <ModelViewer
        modelPath="/Lemongrass.fbx"
        planeColor="lightgray"
        lightingIntensity={5}
        scale={0.2}
        position={[0, -3, 0]}
        planePosition={[0, -3, 0]}
        imageData={imageData}
        plantData={plantData}
      />
    </div>
  );
};

export default LemonGrass;