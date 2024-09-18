// AloeVera.js
import React from 'react';
import ModelViewer from './ModelViewer';
import Header from './Header';

const AloeVera = () => {
  const imageData = [
    '/AloeVera1.jpg',
    '/AloeVera2.jpg',
    '/AloeVera3.jpg',
    '/AloeVera4.jpg',
  ];

  const plantData = {
    plantname: "Aloe Vera",
    scientific_name: "Aloe barbadensis miller",
    type: "Ayurveda",
    general_info: "Aloe Vera is a versatile Ayurvedic plant known for its soothing, healing, and skin-rejuvenating properties. It is also widely used to treat digestive issues.",
    descriptive_info: `
      Aloe Vera, often referred to as the "plant of immortality," has been used in Ayurveda for centuries for its healing, soothing, and skin-rejuvenating properties. It is commonly used to treat burns, cuts, and other skin ailments due to its cooling and moisturizing effects. In addition to external uses, Aloe Vera is also consumed internally to support digestion, detoxify the body, and boost the immune system.

      Aloe Vera gel, extracted from the fleshy leaves, is rich in vitamins, minerals, and antioxidants that promote overall health. It is especially beneficial for treating constipation, acid reflux, and other gastrointestinal issues. The plant's anti-inflammatory and antimicrobial properties make it effective in soothing skin irritations and accelerating wound healing.

      The recommended dosage of Aloe Vera juice is 1-2 tablespoons daily for internal health benefits, while the gel can be applied topically as needed. Although generally safe, excessive consumption may cause diarrhea or electrolyte imbalances, and it should be avoided during pregnancy.

      Aloe Vera is native to arid and tropical regions and is widely cultivated for its medicinal properties. It thrives in well-drained soil and requires minimal water, making it an easy-to-grow plant for households. Due to its versatility, Aloe Vera is a key component in both skincare and internal detoxification in Ayurveda.
    `,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <ModelViewer
        modelPath="/Alovera.fbx"
        planeColor="lightgray"
        lightingIntensity={4}
        scale={0.2}
        position={[0, 0.1, 0]}
        imageData={imageData}
        plantData={plantData}
      />
    </div>
  );
};

export default AloeVera;