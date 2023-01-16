import { Input, Spacer } from "@nextui-org/react";

export default function App(props) {
  return (
    <>
      <Input 
        value={props.value}
        clearable={props.clearable}
        underlined={props.underlined}
        rounded={props.rounded}
        bordered={props.bordered}
        labelLeft={props.labelLeft}
        labelPlaceholder={props.labelPlaceholder}
        label={props.label}
        placeholder={props.placeholder}
        status={props.status}
        size={props.size}
        color={props.color}
        helperColor={props.helperColor}
        helperText={props.helperText}
        aria-label="Close"
        css={props.css}
        onChange={props.onChange}
      />
      <Spacer y={4} />
    </>
  );
}
