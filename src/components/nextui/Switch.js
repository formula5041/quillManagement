import { Switch, Spacer } from "@nextui-org/react";

export default function App(props) {
  return (
    <>
      <Switch
        bordered
        shadow
        checked={props.checked}
        size={props.size}
        color={props.color}
        iconOn={props.iconOn}
        iconOff={props.iconOff}
      />
      <Spacer y={1} />
    </>
  );
}



