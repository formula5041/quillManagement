import { Input, Spacer } from "@nextui-org/react";

export default function App(props) {
  return (
    <>
      <Input 
        underlined={props.underlined}
        rounded={props.rounded}
        bordered={props.bordered}
        labelLeft={props.labelLeft}
        label={props.label}
        placeholder={props.placeholder}
        status={props.status}
        size={props.size}
        color={props.color}
        helperColor={props.helperColor}
        helperText={props.helperText}
        aria-label="Close"
        
      />
      <Spacer y={4} />
    </>
  );
}
