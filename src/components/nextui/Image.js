import { Image } from "@nextui-org/react";

export default function App(props) {
  return (
    <Image
      width={props.width}
      height={props.height}
      src={props.src}
      alt={props.alt}
      objectFit={props.objectFit}
    />
  );
}

// type ObjectFit =
//    | 'contain'
//    | 'cover'
//    | 'fill'
//    | 'none'
//    | 'scale-down'
//    | 'inherit'
//    | 'initial'
//    | 'revert'
//    | 'unset'
// )