import {
  FluentProvider,
  webDarkTheme,
  Toolbar,
  ToolbarButton,
  ToolbarToggleButton,
  ToolbarDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItemRadio,
  Text,
  Input,
  Switch,
  useId,
  Toaster,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
} from "@fluentui/react-components";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Edit24Regular,
  Settings24Regular,
  Location24Regular,
} from "@fluentui/react-icons";

import { watch } from "@arcgis/core/core/reactiveUtils.js";
import Conversion from "@arcgis/core/widgets/CoordinateConversion/support/Conversion.js";

import "./FluentCoordinateConversion.css";

export default function FluentCoordinateConversion({ vm }) {
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  const toastError = () =>
    dispatchToast(
      <Toast>
        <ToastTitle>Error</ToastTitle>
        <ToastBody>Invalid coordinates entered.</ToastBody>
      </Toast>,
      { intent: "error" }
    );

  async function reverseConvert({ vm, value, activeFormat }) {
    try {
      const point = await vm.reverseConvert(value, activeFormat);
      vm.view.goTo(point);
    } catch (e) {
      toastError();
    }
  }

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

  const [toolbarCheckedValues, setToolbarCheckedValues] = useState({
    editing: [],
  });

  const onToolbarChange = (e, { name, checkedItems }) => {
    setToolbarCheckedValues((s) => {
      return s ? { ...s, [name]: checkedItems } : { [name]: checkedItems };
    });
  };

  const showEditing = toolbarCheckedValues.editing.includes("edit");

  const [formatCheckedValues, setFormatCheckedValues] = useState({
    format: [activeFormat?.name],
  });

  const onFormatChange = (e, { name, checkedItems }) => {
    const value = checkedItems[0];
    const format = vm.formats.find((format) => format.name === value);
    const newConversion = new Conversion({ format });
    vm.conversions.removeAt(0);
    vm.conversions.add(newConversion, 0);

    setFormatCheckedValues((s) => {
      return s ? { ...s, [name]: checkedItems } : { [name]: checkedItems };
    });
  };

  const formats = vm?.formats?.toArray().map((format) => (
    <MenuItemRadio name="format" value={format.name} key={format.name}>
      {format.name.toLowerCase()}
    </MenuItemRadio>
  ));

  return (
    <div className="fluent-coordinate-conversion">
      <FluentProvider theme={webDarkTheme}>
        <Toolbar
          checkedValues={toolbarCheckedValues}
          aria-label="Default"
          onCheckedValueChange={onToolbarChange}
        >
          <Location24Regular />
          {!showEditing ? (
            <Text className="text">
              {activeDisplayCoordinate || "No position"}
            </Text>
          ) : null}
          {showEditing ? (
            <Input
              placeholder="Enter coordinates"
              className="input"
              defaultValue={activeDisplayCoordinate}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  reverseConvert({
                    vm,
                    value: event.target.value,
                    activeFormat,
                  });
                }
              }}
            />
          ) : null}
          <ToolbarDivider />
          <ToolbarToggleButton
            aria-label="Edit Coordinate"
            name="editing"
            value="edit"
            icon={<Edit24Regular />}
          />
          <ToolbarDivider />
          <Switch
            label="Capture"
            onChange={(_event, data) => {
              vm.mode = data.checked ? "capture" : "live";
            }}
          />
          <ToolbarDivider />
          <Menu
            hasCheckmarks
            onCheckedValueChange={onFormatChange}
            checkedValues={formatCheckedValues}
          >
            <MenuTrigger>
              <ToolbarButton
                aria-label="Formats"
                icon={<Settings24Regular />}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>{formats}</MenuList>
            </MenuPopover>
          </Menu>
        </Toolbar>
        <Toaster toasterId={toasterId} />
      </FluentProvider>
    </div>
  );
}
