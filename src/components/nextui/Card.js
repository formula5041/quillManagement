import { Card, Text, Spacer } from "@nextui-org/react";

export default function App(props) {
  const MockItem = ({ text }) => {
    return (
      <Card 
        isHoverable
        isPressable
        css={{ h: "$24", $$cardColor: props.color, marginTop: "10px"}}
      >
        <Card.Body>
          <Text h2 size={20} color="white">
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <MockItem text={props.text} />
      <Spacer x={1} />
    </>
  );
}
