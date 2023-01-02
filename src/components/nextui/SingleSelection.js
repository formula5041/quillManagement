import {useState, useMemo} from "react";
import { Dropdown } from "@nextui-org/react";

export default function App(props) {
  const dropdownItems = props.dropdownItems
  const firstItemName = props.firstItemName
  const DropdownItemsList = []
  for (let key in dropdownItems) {
    let keyname = key
    let name = dropdownItems[keyname].name
    let icon = dropdownItems[keyname].icon
    DropdownItemsList.push(
      <Dropdown.Item key={keyname} icon={icon}>{name}</Dropdown.Item>
    )
  }
  const [selected, setSelected] = useState(new Set([firstItemName]))
  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  )
  const selectFun = ()=>{
    props.selectionChangeHandler(selectedValue)
  }
  selectFun()
  return (
    <Dropdown>
      <Dropdown.Button 
        flat color={props.color} 
        css={{ tt: "capitalize" }}
      >
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color={props.color}
        disallowEmptySelection
        selectionMode={props.selectionMode}
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {DropdownItemsList}
      </Dropdown.Menu>
    </Dropdown>
  );
}
