import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Hand = ({ isMobile }) => {
  const hand = useGLTF("./handshake/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.1} groundColor="white" />
      <pointLight intensity={0} position={[-1.2, -20, -1.5]} />
      <spotLight
        position={[-20, 100, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={hand.scene}
        scale={isMobile ? 0.7 : 0.45}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const HandCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const mediaQuery1 = window.matchMedia("(max-width: 1100px)");

    setIsMobile(mediaQuery.matches);
    setIsMobile(mediaQuery1.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    mediaQuery1.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      mediaQuery1.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 30,
        position: [-5.6, 3, 2],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Hand isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default HandCanvas;
