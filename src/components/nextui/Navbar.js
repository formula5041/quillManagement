import { Navbar } from "@nextui-org/react";

export default function App(props) {
  return (
    <Navbar 
      isBordered 
      variant="sticky"
      css={{
        background: "red",
        opacity: 0.2,
      }}  
    >
      {props.progress}
    </Navbar>
  )
}
