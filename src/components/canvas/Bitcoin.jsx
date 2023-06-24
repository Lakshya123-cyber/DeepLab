import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Bitcoin = ({ isMobile }) => {
  const bitcoin = useGLTF("./bitcoin/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="white" />
      <pointLight intensity={50} position={[-1.2, -2.3, -1.5]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={bitcoin.scene}
        scale={isMobile ? 0.25 : 0.4}
        position={isMobile ? [-0.5, -2.1, -1.5] : [-1, -2.1, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const BitcoinCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 390px)");
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
      frameLoop="demand"
      shadows
      camera={{ position: [0, 0, 20], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Bitcoin isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BitcoinCanvas;
