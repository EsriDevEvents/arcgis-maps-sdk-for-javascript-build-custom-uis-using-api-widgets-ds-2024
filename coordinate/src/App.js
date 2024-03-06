import "./App.css";
import { useRef } from "react";

import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion.js";
import CoordinateVM from "@arcgis/core/widgets/CoordinateConversion/CoordinateConversionViewModel.js";

function App() {
  const myRef = useRef(null);

  componentDidMount() {
    this.setupMap();
  }

  // Create the map
  const map = new Map({
    basemap: {
      portalItem: {
        id: "826498a48bd0424f9c9315214f2165d4", // Colored Pencil basemap,
      },
    },
  });

  // Create the MapView
  const view = new MapView({
    container: document.createElement("div"),
    map,
    center: [-159.5043512937587, 22.049447588962245],
    zoom: 10,
  });

  const ccWidget = new CoordinateConversion({ view });

  view.ui.add(ccWidget, "bottom-left");

  console.log({ CoordinateVM });

  view.container = myRef.current;
  console.log(view.container);

  return (
    <div className="App">
      <div id="viewDiv" ref={myRef}></div>
    </div>
  );
}

export default App;
