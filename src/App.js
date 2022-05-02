import Globe from "react-globe.gl";

function App() {
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
  }));
  return (
    <Globe
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    arcsData={arcsData}
    hexPolygonResolution={3}
    hexPolygonMargin={0.3}
    arcDashLength={() => Math.random()}
    arcDashGap={() => Math.random()}
    arcDashAnimateTime={() => Math.random() * 4000 + 500}
    animateIn={false}
    />
  );
}

export default App;
