import { ButtonIconTypeStyleProps, Container, Icons } from "./styles";
import { TouchableOpacityProps } from "react-native";
type ButtonType = TouchableOpacityProps & {
  name: "add" | "close";
  type?: ButtonIconTypeStyleProps;
};

export default function ButtonIcon({
  name,
  type = "INSERT",
  ...rest
}: ButtonType) {
  return (
    <Container {...rest}>
      <Icons name={name} type={type} />
    </Container>
  );
}
