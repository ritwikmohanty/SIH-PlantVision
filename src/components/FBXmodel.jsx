import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';

const PlantModel = ({ url, ...props }) => {
  const fbx = useLoader(FBXLoader, url);
  const mixerRef = useRef();

  useEffect(() => {
    if (fbx) {
      fbx.scale.set(0.07, 0.07, 0.07); // Scaling down the model
      fbx.position.set(0, -2.2, 0); // Centering the model

      fbx.traverse((child) => {
        if (child.isMesh) {
          // Enable double-sided material and configure alpha clipping
          child.material.side = THREE.DoubleSide; 
          child.material.transparent = true; // Enable transparency for alpha clip
          child.material.alphaTest = 0.5; // Set alpha clip threshold
          
          child.castShadow = true; // Enable shadow casting for all meshes
          child.receiveShadow = true; // Enable receiving shadows if needed

          // If needed, set additional properties like child.material.opacity or child.material.depthWrite
        }
      });

      // Create an animation mixer for the FBX model
      const mixer = new THREE.AnimationMixer(fbx);
      mixerRef.current = mixer;

      // Play all animations from the FBX file
      if (fbx.animations.length > 0) {
        fbx.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.play();
        });
      }
    }
  }, [fbx]);

  // Use frame loop to update the animation
  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta); // Update animations each frame
    }
  });

  return fbx ? <primitive object={fbx} {...props} /> : null;
};

export default PlantModel;
