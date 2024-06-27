import { Container, FilterStyleProps, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
type filterButton = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export default function Filter({
  title,
  isActive = false,
  ...rest
}: filterButton) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
