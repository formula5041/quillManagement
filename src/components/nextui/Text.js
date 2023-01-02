import { Text } from "@nextui-org/react";

export default function App(props) {
  return (
    <>
      <Text 
        color={props.color}
        h1={props.h1}
        h2={props.h2}
        h3={props.h3}
        h4={props.h4}
        h5={props.h5}
        h6={props.h6}
        size={props.size}
        css={props.css}
      >
        {props.text}
      </Text>
    </>
  );
}
