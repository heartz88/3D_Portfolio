import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <span className="canvas-load">
        <p style={{
          fontSize: 14, 
          color: '#f1f1f1', 
          fontWeight: 800, 
          marginTop: 40, 
          textAlign: 'center'
        }}>
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  )
}

export default Loader