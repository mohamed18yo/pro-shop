import { CustomeButton } from "./button.style";

function Button(props) {
  return (
    <CustomeButton
      isGray={props.isGray}
      radius={props.radius}
      width={props.width}
      onClick={props.handleClick}
      style={props.style}
    >
      {props.text}
    </CustomeButton>
  );
}
export default Button;
