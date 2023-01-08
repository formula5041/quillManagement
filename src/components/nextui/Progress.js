import { Progress } from "@nextui-org/react";

export default function App(props) {
  return (
    <>
      <Progress 
        size="xs"
        value={props.positionValue} 
        shadow 
        color="warning" 
        status="success" 
        css={props.css}
      />
    </>
  );
}
