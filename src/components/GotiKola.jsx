// GotuKola.js
import React from 'react';
import ModelViewer from './ModelViewer';
import Header from './Header';

const GotuKola = () => {
  const imageData = [
    '/GotuKola1.jpg',
    '/GotuKola2.jpg',
    '/GotuKola3.jpg',
    '/GotuKola4.jpg',
  ];

  const plantData = {
    plantname: "Gotu Kola",
    scientific_name: "Centella asiatica",
    type: "Ayurveda",
    general_info: "Gotu Kola, known for its rejuvenating properties, is a staple in Ayurvedic medicine. It is used to enhance cognitive function, promote wound healing, and support overall skin health.",
    descriptive_info: `
      Gotu Kola, or Centella asiatica, is a significant herb in Ayurvedic medicine often referred to as the "herb of longevity." It is highly valued for its cognitive-enhancing properties, promoting mental clarity and focus.

      In Ayurveda, Gotu Kola is used to support brain health, improve memory, and aid in reducing anxiety and stress. It is also known for its benefits in wound healing and skin care, helping to promote the regeneration of tissues and improve the appearance of scars and blemishes.

      Gotu Kola can be consumed in various forms, including fresh leaves, dried powder, or as an extract. It is commonly added to teas, capsules, and topical ointments. The herb's ability to improve circulation and enhance collagen production makes it a popular choice for promoting healthy, youthful skin.

      Gotu Kola thrives in tropical and subtropical regions and can be grown in pots or gardens with moist, well-drained soil. Its versatile uses in both mental and physical health make it a cherished herb in Ayurvedic practices.
    `,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <ModelViewer
        modelPath="/Gotu-Kola.fbx"
        planeColor="lightgray"
        lightingIntensity={6}
        scale={0.2}
        position={[0, 0, 0]}
        planePosition={[0, 0, 0]}
        imageData={imageData}
        plantData={plantData}
      />
    </div>
  );
};

export default GotuKola;