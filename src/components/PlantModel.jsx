import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

function TulsiPlant(props) {
  const group = useRef();
  const [model, setModel] = useState();

  useLoader(FBXLoader, '/model/Tulsi.fbx', (fbx) => {
    fbx.scale.set(0.01, 0.01, 0.01);
    setModel(fbx);
  });

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {model && <primitive object={model} />}
    </group>
  );
}

const TulsiModelPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explore the Tulsi Plant</h1>
      <div style={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <TulsiPlant position={[0, -1, 0]} />
          <OrbitControls />
        </Canvas>
      </div>
      <button onClick={() => navigate('/')} style={styles.backButton}>
        Back to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#344e41',
  },
  canvasContainer: {
    width: '80%',
    height: '60vh',
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  backButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#437532',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TulsiModelPage;