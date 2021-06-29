import { CustomeButton } from "./button.style";

function Button(props) {
  return (
    <CustomeButton
    disabled={props.isLoading}
      isGray={props.isGray}
      radius={props.radius}
      width={props.width}
      onClick={props.handleClick}
      style={props.style}
      to={props.link}
      as={props.link?"":"button"}
    >
      {props.text}
    </CustomeButton >
  );
}
export default Button;
