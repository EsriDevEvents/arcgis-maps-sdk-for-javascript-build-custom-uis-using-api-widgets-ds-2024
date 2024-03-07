import { useEffect, useState } from "react";
import { watch } from "@arcgis/core/core/reactiveUtils.js";

export function useActiveDisplayCoordinate(vm) {
  const [activeDisplayCoordinate, setActiveDisplayCoordinate] = useState();

  useEffect(() => {
    const handle = watch(
      () => vm?.conversions?.getItemAt(0)?.displayCoordinate,
      (displayCoordinate) =>
        setActiveDisplayCoordinate(displayCoordinate ?? ""),
      { initial: true }
    );

    return function cleanUp() {
      handle?.remove();
    };
  }, [vm]);

  return { activeDisplayCoordinate };
}
