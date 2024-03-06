import Map from "https://js.arcgis.com/4.29/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.29/@arcgis/core/views/MapView.js";
import CoordinateConversion from "https://js.arcgis.com/4.29/@arcgis/core/widgets/CoordinateConversion.js";
import Conversion from "https://js.arcgis.com/4.29/@arcgis/core/widgets/CoordinateConversion/support/Conversion.js";
import { watch } from "https://js.arcgis.com/4.29/@arcgis/core/core/reactiveUtils.js";

// -----------------

import CoordinateVM from "https://js.arcgis.com/4.29/@arcgis/core/widgets/CoordinateConversion/CoordinateConversionViewModel.js";

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

// -----------------

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
  const value = event.target.value;
  vm.mode = value;
});

async function reverseConvert() {
  coordinateEditable.editingEnabled = false;
  const value = coordinateInput.value;
  try {
    const point = await vm.reverseConvert(value, activeFormat);
    view.goTo(point);
  } catch (e) {
    coordinateInput.status = "invalid";
    coordinateInput.validationMessage = "Invalid coordinate";
  }
}

coordinateEditable.addEventListener("calciteInlineEditableEditConfirm", () => {
  reverseConvert();
});

coordinateInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    reverseConvert();
  }
});

function updateFormats(currentFormat) {
  activeFormat = currentFormat;

  const options = vm.formats
    .toArray()
    .map(
      (format) =>
        `<calcite-option ${format === currentFormat ? "selected" : ""} value="${
          format.name
        }">${format.label.toUpperCase()}</calcite-option>`
    )
    .join("");

  coordinateSelect.innerHTML = options;
}

function updateCoordinates(activeDisplayCoordinate) {
  coordinateInput.value = activeDisplayCoordinate;
  coordinateInput.status = "valid";
}
