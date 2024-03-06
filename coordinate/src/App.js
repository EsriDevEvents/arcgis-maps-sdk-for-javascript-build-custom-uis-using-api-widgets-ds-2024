import "./App.css";
import "@arcgis/core/assets/esri/themes/light/main.css";

// import CoordinateVM from "@arcgis/core/widgets/CoordinateConversion/CoordinateConversionViewModel.js";
import { useMapView } from "./hooks/useMapView";
import { useCoordinateConversion } from "./hooks/useCoordinateConversion";

function App() {
  const { ref, mapView } = useMapView(
    {
      basemap: {
        portalItem: {
          id: "826498a48bd0424f9c9315214f2165d4", // Colored Pencil basemap,
        },
      },
    },
    {
      center: [-159.5043512937587, 22.049447588962245],
      zoom: 10,
    }
  );

  useCoordinateConversion(mapView);

  return <div className="App" ref={ref} />;
}

export default App;
