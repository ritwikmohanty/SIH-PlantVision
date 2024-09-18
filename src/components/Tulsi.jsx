// Tulsi.js
import React from 'react';
import ModelViewer from './ModelViewer';
import Header from './Header';

const Tulsi = () => {
  const imageData = [
    '/Tulsi1.jpg',
    '/Tulsi2.jpg',
    '/Tulsi3.jpg',
    '/Tulsi4.jpg',
  ];

  const plantData = {
    plantname: "Tulsi",
    scientific_name: "Ocimum sanctum",
    type: "Ayurveda",
    general_info: "Tulsi, also known as Holy Basil, is revered in Ayurveda for its powerful adaptogenic properties. It is commonly used to enhance mental clarity, support respiratory health, and boost the immune system.",
    descriptive_info: `
      Tulsi, known as the "Queen of Herbs," is a sacred plant in Ayurveda and has been used for centuries for its medicinal and spiritual benefits. It helps balance the mind and body, improve stress resilience, and promote overall wellness. The plant is rich in essential oils, antioxidants, and bioactive compounds that support various health functions.

      Tulsi is highly valued for its adaptogenic properties, which help the body cope with stress and restore balance. It is commonly used to alleviate respiratory issues, such as coughs and colds, and to support the immune system. The leaves can be consumed fresh, dried, or brewed into tea to harness its therapeutic benefits.

      For respiratory health, Tulsi tea can be consumed 1-2 times daily. It also serves as a natural remedy for headaches, digestive problems, and skin conditions. Tulsi leaves can be applied topically to soothe insect bites and minor skin irritations.

      Tulsi thrives in tropical and subtropical climates and can be grown in pots or gardens. It prefers well-drained soil and requires regular watering. Due to its versatility and health benefits, Tulsi is a cherished herb in Ayurveda and a valuable addition to any herbal remedy collection.
    `,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <ModelViewer
        modelPath="/Tulsi_Final.fbx"
        planeColor="lightgray"
        lightingIntensity={0.7}
        scale={0.2}
        position={[0, -8, 0]}
        planePosition={[0, -8, 0]}
        imageData={imageData}
        plantData={plantData}
      />
    </div>
  );
};

export default Tulsi;