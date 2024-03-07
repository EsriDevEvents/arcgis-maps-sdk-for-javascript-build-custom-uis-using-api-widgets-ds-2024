import "./App.css";
import "@arcgis/core/assets/esri/themes/light/main.css";

import { useMapView } from "./hooks/useMapView";
import { useCoordinateConversion } from "./hooks/useCoordinateConversion";
import { useCoordinateConversionVM } from "./hooks/useCoordinateConversionVM";
import FluentCoordinateConversion from "./components/FluentCoordinateConversion";

function App() {
  const { mapViewRef, mapView } = useMapView(
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

  const { coordinateConversionViewModel } = useCoordinateConversionVM(mapView);

  return (
    <div className="App" ref={mapViewRef}>
      <FluentCoordinateConversion vm={coordinateConversionViewModel} />
    </div>
  );
}

export default App;
