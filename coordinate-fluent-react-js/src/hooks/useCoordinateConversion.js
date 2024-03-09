import { useEffect } from "react";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";

export function useCoordinateConversion(view) {
  useEffect(() => {
    const widget = new CoordinateConversion({ view });

    if (view?.ui) {
      view.ui.add(widget, "bottom-left");
    }

    return function cleanUp() {
      if (view?.ui) {
        view.ui.remove(widget);
      }

      widget?.destroy();
    };
  }, [view]);
}
