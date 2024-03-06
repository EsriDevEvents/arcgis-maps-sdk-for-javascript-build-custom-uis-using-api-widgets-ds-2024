import CoordinateVM from "https://js.arcgis.com/4.29/@arcgis/core/widgets/CoordinateConversion/CoordinateConversionViewModel.js";
import Conversion from "https://js.arcgis.com/4.29/@arcgis/core/widgets/CoordinateConversion/support/Conversion.js";
import { watch } from "https://js.arcgis.com/4.29/@arcgis/core/core/reactiveUtils.js";

export function createCustomCoordinateConversion(view) {
  const vm = new CoordinateVM({ view, multipleConversions: false });

  const customWidget = document.createElement("div");
  customWidget.innerHTML = `
<div class="custom-coordinate-conversion">

  <calcite-segmented-control id="custom-coordinate-mode">
      <calcite-segmented-control-item icon-start="cursor" value="live" checked>Live</calcite-segmented-control-item>
      <calcite-segmented-control-item icon-start="pin" value="capture">Capture</calcite-segmented-control-item>
  </calcite-segmented-control>

  <calcite-select id="custom-coordinate-select"></calcite-select>

  <calcite-inline-editable id="custom-coordinate-editable" controls>
      <calcite-input id="custom-coordinate-input" placeholder="Enter coordinates"></calcite-input>
  </calcite-inline-editable>

</div>
`;

  view.ui.add(customWidget, "bottom-right");

  const coordinateSelect = document.getElementById("custom-coordinate-select");
  const coordinateInput = document.getElementById("custom-coordinate-input");
  const coordinateMode = document.getElementById("custom-coordinate-mode");
  const coordinateEditable = document.getElementById(
    "custom-coordinate-editable"
  );

  let activeFormat = null;

  watch(
    () => vm.conversions.getItemAt(0)?.format,
    (format) => updateFormats(format),
    { initial: true }
  );
  watch(
    () => vm.conversions.getItemAt(0)?.displayCoordinate,
    (displayCoordinate) => updateCoordinates(displayCoordinate ?? ""),
    { initial: true }
  );

  coordinateSelect.addEventListener("calciteSelectChange", (event) => {
    const value = event.target.value;
    const format = vm.formats.find((format) => format.name === value);
    const newConversion = new Conversion({ format });
    vm.conversions.removeAt(0);
    vm.conversions.add(newConversion, 0);
  });

  coordinateMode.addEventListener("calciteSegmentedControlChange", (event) => {
    vm.mode = event.target.value;
  });

  async function reverseConvert() {
    coordinateEditable.editingEnabled = false;
    const value = coordinateInput.value;
    try {
      const point = await vm.reverseConvert(value, activeFormat);
      view.goTo(point);
    } catch (e) {
      coordinateInput.status = "invalid";
    }
  }

  coordinateEditable.addEventListener(
    "calciteInlineEditableEditConfirm",
    () => {
      reverseConvert();
    }
  );

  coordinateInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      reverseConvert();
    }
  });

  function updateFormats(currentFormat) {
    activeFormat = currentFormat;

    const formatLookup = {
      basemap: "Basemap (XY)",
      xy: "Longitude, Latitude (WGS84)",
      mgrs: "Military Grid Reference System (MGRS)",
      usng: "United States National Grid (USNG)",
      utm: "Universal Transverse Mercator (UTM)",
      dd: "Decimal Degrees (DD)",
      ddm: "Degrees Decimal Minutes (DDS)",
      dms: "Degrees Minutes Seconds (DMS)",
    };

    const options = vm.formats
      .toArray()
      .map(
        (format) =>
          `<calcite-option
              ${format === currentFormat ? "selected" : ""}
              value="${format.name}"
            >
            ${formatLookup[format.name.toLowerCase()]}
           </calcite-option>`
      )
      .join("");

    coordinateSelect.innerHTML = options;
  }

  function updateCoordinates(activeDisplayCoordinate) {
    coordinateInput.value = activeDisplayCoordinate;
    coordinateInput.status = "valid";
  }
}
