import {
  FluentProvider,
  Input,
  Menu,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Switch,
  Text,
  Toast,
  ToastBody,
  Toaster,
  ToastTitle,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  ToolbarToggleButton,
  useId,
  useToastController,
  teamsDarkTheme,
} from "@fluentui/react-components";
import * as React from "react";
import { useState } from "react";
import {
  Edit24Regular,
  Settings24Regular,
  Location24Regular,
} from "@fluentui/react-icons";
import Conversion from "@arcgis/core/widgets/CoordinateConversion/support/Conversion";
import { useActiveFormat } from "../hooks/useActiveFormat";
import { useActiveDisplayCoordinate } from "../hooks/useActiveDisplayCoordinate";
import "./FluentCoordinateConversion.css";

export default function FluentCoordinateConversion({ vm }) {
  const { activeFormat } = useActiveFormat(vm);
  const { activeDisplayCoordinate } = useActiveDisplayCoordinate(vm);

  const [toolbarCheckedValues, setToolbarCheckedValues] = useState({
    editing: [],
  });

  const [formatCheckedValues, setFormatCheckedValues] = useState({
    format: [activeFormat?.name],
  });

  const onToolbarChange = (_e, { name, checkedItems }) => {
    setToolbarCheckedValues((s) => {
      return s ? { ...s, [name]: checkedItems } : { [name]: checkedItems };
    });
  };

  const showEditing = toolbarCheckedValues.editing.includes("edit");

  const onFormatChange = (_e, { name, checkedItems }) => {
    const value = checkedItems[0];
    const format = vm.formats.find((format) => format.name === value);
    const newConversion = new Conversion({ format });
    vm.conversions.removeAt(0);
    vm.conversions.add(newConversion, 0);

    setFormatCheckedValues((s) => {
      return s ? { ...s, [name]: checkedItems } : { [name]: checkedItems };
    });
  };

  async function reverseConvert({ vm, value, activeFormat }) {
    try {
      const point = await vm.reverseConvert(value, activeFormat);
      vm.view.goTo(point);
    } catch (e) {
      toastError();
    }
  }

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

  const inputNode = (
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
  );

  const textNode = (
    <Text className="text">{activeDisplayCoordinate || "No position"}</Text>
  );

  const menuListNode = (
    <MenuList>
      {vm?.formats?.toArray().map((format) => (
        <MenuItemRadio name="format" value={format.name} key={format.name}>
          {format.name.toLowerCase()}
        </MenuItemRadio>
      ))}
    </MenuList>
  );

  const menuTriggerNode = (
    <MenuTrigger>
      <ToolbarButton aria-label="Formats" icon={<Settings24Regular />} />
    </MenuTrigger>
  );

  return (
    <div className="fluent-coordinate-conversion">
      <FluentProvider theme={teamsDarkTheme}>
        <Toolbar
          checkedValues={toolbarCheckedValues}
          aria-label="Default"
          onCheckedValueChange={onToolbarChange}
        >
          <Switch
            label="Capture"
            onChange={(_event, data) => {
              vm.mode = data.checked ? "capture" : "live";
            }}
          />
          <ToolbarDivider />
          <Location24Regular />
          {showEditing ? inputNode : textNode}
          <ToolbarToggleButton
            aria-label="Edit Coordinate"
            name="editing"
            value="edit"
            icon={<Edit24Regular />}
          />
          <ToolbarDivider />
          <Menu
            hasCheckmarks
            onCheckedValueChange={onFormatChange}
            checkedValues={formatCheckedValues}
          >
            {menuTriggerNode}
            <MenuPopover>{menuListNode}</MenuPopover>
          </Menu>
        </Toolbar>
        <Toaster toasterId={toasterId} />
      </FluentProvider>
    </div>
  );
}
