import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";
import { ButtonTypeStyleProps, TextButton } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <TextButton>{title}</TextButton>
    </Container>
  );
}
