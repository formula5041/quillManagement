
export default function App(props) {
  return (
    <>
      <input 
        type="file" 
        accept={props.accept}
        onChange={props.changeHandler}
      ></input>
    </>
  );
}
