import { useEffect, useState } from "react";
import CoordinateVM from "@arcgis/core/widgets/CoordinateConversion/CoordinateConversionViewModel";

export function useCoordinateConversionVM(mapView) {
  const [coordinateConversionViewModel, setVM] = useState();

  useEffect(() => {
    const vm = new CoordinateVM({ view: mapView, multipleConversions: false });

    setVM(vm);

    return function cleanUp() {
      vm?.destroy();
    };
  }, [mapView]);

  return { coordinateConversionViewModel };
}
