import { Canvas } from "@react-three/fiber";

const App = () =>
<>
  <Canvas>
    <mesh>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
  </Canvas>
</>;

export default App;
