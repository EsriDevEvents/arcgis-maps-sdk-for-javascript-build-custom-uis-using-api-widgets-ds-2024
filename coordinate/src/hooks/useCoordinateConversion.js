import { useRef, useEffect, useState } from "react";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion.js";

const destroyCoordinateConversion = (coordinateConversion) => {
  if (!coordinateConversion) {
    return;
  }

  coordinateConversion.destroy();
};

export function useCoordinateConversion(mapView) {
  const ref = useRef(null);

  const [coordinateConversion, setCoordinateConversion] = useState();

  useEffect(() => {
    const widget = new CoordinateConversion({ view: mapView });

    if (mapView?.ui) {
      mapView.ui.add(widget, "bottom-left");
    }

    setCoordinateConversion(widget);

    return function cleanUp() {
      if (mapView?.ui) {
        mapView.ui.remove(widget);
      }
      destroyCoordinateConversion(widget);
    };
  }, [mapView]);

  return { ref, coordinateConversion };
}
