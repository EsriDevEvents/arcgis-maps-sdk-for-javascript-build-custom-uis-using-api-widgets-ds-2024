import { useEffect, useState } from "react";
import { watch } from "@arcgis/core/core/reactiveUtils";

export function useActiveFormat(vm) {
  const [activeFormat, setActiveFormat] = useState();

  useEffect(() => {
    const handle = watch(
      () => vm?.conversions?.getItemAt(0)?.format,
      (format) => setActiveFormat(format),
      { initial: true }
    );

    return function cleanUp() {
      handle?.remove();
    };
  }, [vm]);

  return { activeFormat };
}
