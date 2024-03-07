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
  MenuItem,
  Text,
  Input,
  Switch,
} from "@fluentui/react-components";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Edit24Regular,
  Settings24Regular,
  Location24Regular,
} from "@fluentui/react-icons";

import { watch } from "@arcgis/core/core/reactiveUtils.js";

import "./FluentCoordinateConversion.css";

async function reverseConvert({ vm, value, activeFormat }) {
  //coordinateEditable.editingEnabled = false;
  //const value = coordinateInput.value;
  try {
    const point = await vm.reverseConvert(value, activeFormat);
    vm.view.goTo(point);
  } catch (e) {
    //coordinateInput.status = "invalid";
  }
}

export default function FluentCoordinateConversion({ vm }) {
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

  console.log({ vm, reverseConvert, activeFormat });

  const [checkedValues, setCheckedValues] = useState({
    editing: [],
  });

  const onChange = (e, { name, checkedItems }) => {
    setCheckedValues((s) => {
      return s ? { ...s, [name]: checkedItems } : { [name]: checkedItems };
    });
  };

  const showEditing = checkedValues.editing.includes("edit");

  return (
    <div className="fluent-coordinate-conversion">
      <FluentProvider theme={webDarkTheme}>
        <Toolbar
          checkedValues={checkedValues}
          aria-label="Default"
          onCheckedValueChange={onChange}
        >
          <Location24Regular />
          {!showEditing ? (
            <Text className="text">
              {activeDisplayCoordinate || "No position"}
            </Text>
          ) : null}
          {showEditing ? (
            <Input className="input" value={activeDisplayCoordinate} />
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
          <Menu>
            <MenuTrigger>
              <ToolbarButton
                aria-label="Formats"
                icon={<Settings24Regular />}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>New </MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem disabled>Open File</MenuItem>
                <MenuItem>Open Folder</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </Toolbar>
      </FluentProvider>
    </div>
  );
}
