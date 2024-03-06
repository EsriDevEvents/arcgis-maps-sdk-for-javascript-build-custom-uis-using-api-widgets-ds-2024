import Map from "https://js.arcgis.com/4.29/@arcgis/core/Map.js";
import MapView from "https://js.arcgis.com/4.29/@arcgis/core/views/MapView.js";
import CoordinateConversion from "https://js.arcgis.com/4.29/@arcgis/core/widgets/CoordinateConversion.js";
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

const ccWidget = new CoordinateConversion({ view, multipleConversions: false });

view.ui.add(ccWidget, "bottom-left");

// -----------------

const vm = new CoordinateVM({ view, multipleConversions: false });

const customWidget = document.createElement("div");
customWidget.innerHTML = `
<div class="custom-coordinate-conversion">
  <calcite-segmented-control id="custom-coordinate-mode">
      <calcite-segmented-control-item icon-start="selection-x" value="live" checked>Live</calcite-segmented-control-item>
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

updateFormats();
updateCoordinates();

watch(
  () => [vm.formats.length, vm.conversions.getItemAt(0)?.displayCoordinate],
  () => {
    updateFormats();
    updateCoordinates();
  }
);

coordinateSelect.addEventListener("calciteSelectChange", (event) => {
  vm.activeFormat = event.target.selectedOption.value;
});

coordinateMode.addEventListener("calciteSegmentedControlChange", (event) => {
  const value = event.target.value;
  vm.mode = value;
  console.log(vm.mode);
});

async function reverseConvert() {
  const value = coordinateInput.value;
  const selectFormat = vm.conversions.at(0)?.format;
  const selectIndex =
    vm.formats.findIndex((format) => format.name === selectFormat?.name) ?? -1;
  const format = vm.formats.getItemAt(selectIndex);
  console.log({ format });
  const point = await vm.reverseConvert(value, format);
  view.goTo(point);
}

coordinateEditable.addEventListener("calciteInlineEditableEditConfirm", () => {
  reverseConvert();
});

coordinateInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    reverseConvert();
  }
});

function updateFormats() {
  // const conversionNames = vm.conversions?.map(
  //   (conversion) => conversion.format?.name
  // );

  const selectFormat = vm.conversions.at(0)?.format;
  const selectIndex =
    vm.formats.findIndex((format) => format.name === selectFormat?.name) ?? -1;

  console.log({ selectIndex });

  const formatsTemplate = vm.formats
    //?.filter((format) => !conversionNames.includes(format.name))
    .toArray()
    .map(
      (format, index) =>
        `<calcite-option ${index === selectIndex ? "selected" : ""} value="${
          format.name
        }">${format.label.toUpperCase()}</calcite-option>`
    )
    .join("");

  coordinateSelect.innerHTML = formatsTemplate;
}

function updateCoordinates() {
  console.log({ vm });
  coordinateInput.value = vm.conversions.getItemAt(0)?.displayCoordinate ?? "";
}
