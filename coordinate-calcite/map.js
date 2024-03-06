import Map from "https://js.arcgis.com/4.29/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.29/@arcgis/core/views/MapView.js";
import CoordinateConversion from "https://js.arcgis.com/4.29/@arcgis/core/widgets/CoordinateConversion.js";

// custom UI
import { createCustomCoordinateConversion } from "./custom-coordinate.js";

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
  container: "viewDiv",
  map,
  center: [-159.5043512937587, 22.049447588962245],
  zoom: 10,
});

const ccWidget = new CoordinateConversion({ view, multipleConversions: true });

view.ui.add(ccWidget, "bottom-left");

createCustomCoordinateConversion(view);
