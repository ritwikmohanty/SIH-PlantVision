// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, PointerLockControls } from "@react-three/drei";
// import { Physics, useBox, usePlane } from "@react-three/cannon";
// import * as THREE from "three";

// // Inline styles for Canvas
// const canvasStyle = {
//   width: '100vw',
//   height: '100vh',
//   display: 'block',
// };

// // Ground plane
// function Ground() {
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.5, 0],
//   }));
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// }

// // Player Capsule for physics-based collision detection
// function Player() {
//   const [ref, api] = useBox(() => ({
//     mass: 1,
//     position: [0, 1.5, 0],
//     args: [0.5, 1.5, 0.5],
//     fixedRotation: true,
//   }));

//   const [velocity, setVelocity] = useState([0, 0, 0]);

//   // Subscribe to velocity updates
//   useEffect(() => {
//     const unsubscribe = api.velocity.subscribe((v) => {
//       setVelocity(v);
//     });
//     return unsubscribe;
//   }, [api.velocity]);

//   // State to track player input
//   const [move, setMove] = useState({ forward: false, backward: false, left: false, right: false });
//   const [jump, setJump] = useState(false);
//   const speed = 5; // Movement speed

//   // Function to check if the player is on the ground
//   const isGrounded = Math.abs(velocity[1]) < 0.05;

//   useFrame(() => {
//     const direction = new THREE.Vector3(); // Create a direction vector
//     const frontVector = new THREE.Vector3(0, 0, Number(move.backward) - Number(move.forward)); // Forward/Backward
//     const sideVector = new THREE.Vector3(Number(move.right) - Number(move.left), 0, 0); // Left/Right

//     // Combine the front and side vectors to get the final direction
//     direction.addVectors(frontVector, sideVector).normalize().multiplyScalar(speed);

//     // Jump logic
//     if (jump && isGrounded) {
//       console.log("Jumping!");
//       api.applyImpulse([0, 5, 0], [0, 0, 0]); // Apply an upward impulse for jumping
//       setJump(false);
//     }

//     // Apply movement if the player is grounded or moving in the air
//     const movementVector = new THREE.Vector3(direction.x, 0, direction.z);
//     api.velocity.set(movementVector.x, velocity[1], movementVector.z); // Keep Y-velocity intact
//   });

//   // Event listeners for keyboard input
//   const handleKeyDown = (e) => {
//     if (e.key === "w") setMove((prev) => ({ ...prev, forward: true }));
//     if (e.key === "s") setMove((prev) => ({ ...prev, backward: true }));
//     if (e.key === "a") setMove((prev) => ({ ...prev, left: true }));
//     if (e.key === "d") setMove((prev) => ({ ...prev, right: true }));
//     if (e.key === " ") setJump(true); // Jump on spacebar press
//   };

//   const handleKeyUp = (e) => {
//     if (e.key === "w") setMove((prev) => ({ ...prev, forward: false }));
//     if (e.key === "s") setMove((prev) => ({ ...prev, backward: false }));
//     if (e.key === "a") setMove((prev) => ({ ...prev, left: false }));
//     if (e.key === "d") setMove((prev) => ({ ...prev, right: false }));
//   };

//   // Add and remove event listeners on mount/unmount
//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   return <mesh ref={ref} />;
// }

// // Garden model
// function Garden() {
//   const { scene } = useGLTF("/Gardenia.glb");
//   return <primitive object={scene} scale={1} />;
// }

// // Main FPS component
// export default function Gardenia() {
//   return (
//     <div>
//       <Canvas style={canvasStyle} shadows camera={{ position: [0, 2, 5], fov: 75, near: 0.1, far: 1000 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight castShadow intensity={1.0} position={[10, 10, 5]} />
//         <Physics>
//           <Ground />
//           <Player />
//           <Garden />
//         </Physics>
//         <PointerLockControls />
//       </Canvas>
//     </div>
//   );
// }
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, PointerLockControls, Environment } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import * as THREE from "three";

// Inline styles for Canvas
const canvasStyle = {
  width: '100vw',
  height: '100vh',
  display: 'block',
};

// Ground plane
function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

// Player Capsule for physics-based collision detection
function Player({ speed = 15, position = [0, 1.5, 0] }) {
  const { camera } = useThree();
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: position,
    args: [0.5, 1.5, 0.5],
    fixedRotation: true,
  }));

  const [velocity, setVelocity] = useState([0, 0, 0]);
  const [move, setMove] = useState({ forward: false, backward: false, left: false, right: false });
  const [jump, setJump] = useState(false);

  // Subscribe to velocity updates
  useEffect(() => {
    const unsubscribe = api.velocity.subscribe((v) => {
      setVelocity(v);
    });
    return unsubscribe;
  }, [api.velocity]);

  // Function to check if the player is on the ground
  const isGrounded = Math.abs(velocity[1]) < 0.05;

  useFrame(() => {
    const direction = new THREE.Vector3();
    const frontVector = new THREE.Vector3(0, 0, Number(move.backward) - Number(move.forward));
    const sideVector = new THREE.Vector3(Number(move.right) - Number(move.left), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(camera.rotation);

    // Jump logic
    if (jump && isGrounded) {
      console.log("Jumping!");
      api.applyImpulse([0, 5, 0], [0, 0, 0]); // Apply an upward impulse for jumping
      setJump(false);
    }

    // Apply movement
    api.velocity.set(direction.x, velocity[1], direction.z);

    // Update camera position to follow the player
    api.position.subscribe((p) => camera.position.set(p[0], p[1] + 1.5, p[2]));
  });

  // Event listeners for keyboard input
  const handleKeyDown = (e) => {
    if (e.key === "w") setMove((prev) => ({ ...prev, forward: true }));
    if (e.key === "s") setMove((prev) => ({ ...prev, backward: true }));
    if (e.key === "a") setMove((prev) => ({ ...prev, right: true }));
    if (e.key === "d") setMove((prev) => ({ ...prev, left: true }));
    if (e.key === " ") setJump(true); // Jump on spacebar press
  };

  const handleKeyUp = (e) => {
    if (e.key === "w") setMove((prev) => ({ ...prev, forward: false }));
    if (e.key === "s") setMove((prev) => ({ ...prev, backward: false }));
    if (e.key === "a") setMove((prev) => ({ ...prev, right: false }));
    if (e.key === "d") setMove((prev) => ({ ...prev, left: false }));
  };

  // Add and remove event listeners on mount/unmount
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return <mesh ref={ref} />;
}

// Garden model
function Garden() {
  const { scene } = useGLTF("/Gardenia.glb");
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return <primitive object={scene} scale={1} />;
  
}

// Main FPS component
export default function Gardenia() {
  // Define the spawn position
  const spawnPosition = [5,10,-3];  // Change these values to your desired spawn coordinates

  return (
    <div>
      <Canvas style={canvasStyle} shadows camera={{ fov: 75, near: 0.1, far: 1000 }}>
      <ambientLight intensity={1}/>
      <Environment preset='park' background />
      <directionalLight
  position={[10, 10, 5]}
  intensity={1}
  castShadow
  shadow-mapSize-width={4096} // Increased shadow map resolution
  shadow-mapSize-height={4096} // Increased shadow map resolution
  shadow-bias={-0.0001} // Fine-tune bias to avoid artifacts
  shadow-camera-far={50}
  shadow-camera-left={-30}  // Adjust the shadow camera size
  shadow-camera-right={30}
  shadow-camera-top={30}
  shadow-camera-bottom={-30}
/>
        <Physics>
          <Ground />
          <Player speed={15} position={spawnPosition} />
          <Garden />
        </Physics>
        <PointerLockControls />
      </Canvas>
    </div>
  );
}
// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useGLTF, PointerLockControls, Environment } from "@react-three/drei";
// import { Physics, useBox, usePlane } from "@react-three/cannon";
// import * as THREE from "three";

// // Inline styles for Canvas
// const canvasStyle = {
//   width: '100vw',
//   height: '100vh',
//   display: 'block',
// };

// // Ground plane
// function Ground() {
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -0.5, 0],
//   }));
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// }

// // Player Capsule for physics-based collision detection
// function Player({ speed = 10, position = [0, 1.5, 0] }) {
//   // ... (Player component code remains the same)
// }

// // Garden model
// function Garden() {
//   const { scene } = useGLTF("/Gardenia.glb");
//   return <primitive object={scene} scale={1} />;
// }

// // Main FPS component
// export default function Gardenia() {
//   // Define the spawn position
//   const spawnPosition = [5,10, -3];  // Change these values to your desired spawn coordinates

//   return (
//     <div>
//       <Canvas style={canvasStyle} shadows camera={{ fov: 75, near: 0.1, far: 1000 }}>
//         <ambientLight intensity={2} />
//         <directionalLight castShadow intensity={1.0} position={[10, 10, 5]} />
//         <Environment preset='sunset' background blur={1} />
//         <Physics>
//           <Ground />
//           <Player speed={15} position={spawnPosition} />
//           <Garden />
//         </Physics>
//         <PointerLockControls />
//       </Canvas>
//     </div>
//   );
// }