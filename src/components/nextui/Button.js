import { Button, Spacer } from '@nextui-org/react';

export default function App(props) {
  return (
    <>
      <Button 
        shadow={props.shadow}
        size={props.size}
        color={props.color}
        icon={props.icon}
        onClick={props.clickHandler}
        css={props.css}
      >{props.iconName}</Button>
      <Spacer y={1} />
    </>
  );
}
